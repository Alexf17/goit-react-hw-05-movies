import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { searchMoviesCast } from 'api/apiService';
import poster from '../../img/no_poster.jpg';

import { ErrorText, Img, Li, Ul, Wrap } from './Cast.styled';

const Cast = () => {
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
    <Wrap>
      {castList.length === 0 ? (
        <ErrorText>Sorry, but the data is not yet available</ErrorText>
      ) : (
        <Ul>
          {castList.map(({ name, profile_path, character }) => (
            <Li key={name}>
              <Img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : poster
                }
                alt={name}
              />
              <p>Name: {name}</p>
              <p>Character: {character}</p>
            </Li>
          ))}
        </Ul>
      )}
    </Wrap>
  );
};

export default Cast;
