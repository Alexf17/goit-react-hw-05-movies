import { searchMoviesCast } from 'API/APIservice';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);

  async function createCastList(id) {
    const listActors = await searchMoviesCast(id);

    if (!listActors.length) {
      return;
    }
    setCastList(listActors);
  }

  useEffect(() => {
    createCastList(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return (
    <div>
      <ul>
        {castList.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
