import { useState, useEffect } from 'react';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../api1/1apiService';
import { NavLink } from 'react-router-dom';
import { FilmTitle, Img, Li, SearchWrap, Ul } from './Movies.styled';
import poster from '../../img/no_poster.jpg';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchParam, setSearchParam] = useSearchParams();
  const search = searchParam.get('query') ?? '';
  // const [isLoading, setIsLoading] = useState(false);
  const [films, setFilms] = useState([]);
  const location = useLocation();

  const newQuery = value => {
    if (value === query) {
      return;
    }
    setQuery(value);
    setSearchParam(value !== '' ? { query: value } : {});
  };

  async function getFilms(value) {
    try {
      setFilms([]);
      // setIsLoading(true);

      const filmList = await searchMovies(value);
      if (!filmList.length) {
        return;
      }

      setFilms(filmList);
    } catch (error) {
      console.log(error);
    }
    // setIsLoading(false);
  }

  useEffect(() => {
    if (search) {
      setQuery(search);
    }
    if (!query) {
      return;
    }
    getFilms(query);
  }, [query, search]);

  return (
    <>
      <SearchWrap>
        <SearchForm onSubmit={newQuery} />
      </SearchWrap>
      <Ul>
        {films.map(film => (
          <Li key={film.id}>
            <NavLink
              id={film.id}
              to={`/movies/${film.id}`}
              state={{ from: location }}
            >
              <Img
                src={
                  film.poster_path
                    ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                    : poster
                }
              />
              <FilmTitle>{film.title}</FilmTitle>
            </NavLink>
          </Li>
        ))}
      </Ul>
    </>
  );
};

export default Movies;
