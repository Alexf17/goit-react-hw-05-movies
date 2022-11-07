import { searchMoviesReviews } from 'api/apiService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Author, Li, Text, Wrap } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  async function getReviews(id) {
    const reviewsList = await searchMoviesReviews(id);

    if (!reviewsList.length) {
      return;
    }
    setReviews(reviewsList);
  }

  useEffect(() => {
    getReviews(movieId);
  }, [movieId]);

  return (
    <Wrap>
      <ul>
        {reviews.map(({ author, content }) => (
          <Li key={author}>
            <Author>{author}</Author>
            <Text>{content}</Text>
          </Li>
        ))}
      </ul>
    </Wrap>
  );
};
export default Reviews;
