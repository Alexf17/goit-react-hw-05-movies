import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { searchMovies } from '../../api/apiService';
import poster from '../../img/no_poster.jpg';
import { URL } from '../../const/Url';

import { FilmTitle, Img, Li, SearchWrap, Ul } from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchParam, setSearchParam] = useSearchParams();
  const search = searchParam.get('query') ?? '';
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);

      const filmList = await searchMovies(value);
      if (!filmList.length) {
        alert("Sorry, we searched but didn't find anything");
        return;
      }

      setFilms(filmList);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
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
      {isLoading ? (
        <Loader />
      ) : (
        <Ul>
          {films.map(film => (
            <Li key={film.id}>
              <NavLink
                id={film.id}
                to={`/movies/${film.id}`}
                state={{ from: location }}
              >
                <Img
                  src={film.poster_path ? URL + film.poster_path : poster}
                  alt={film.title}
                />
                <FilmTitle>{film.title}</FilmTitle>
              </NavLink>
            </Li>
          ))}
        </Ul>
      )}
    </>
  );
};

export default Movies;
