import { searchMoviesCast } from 'api/apiService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <div>
      <ul>
        {castList.map(({ name, profile_path, character }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
