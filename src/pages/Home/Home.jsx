import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { searchTrendingMovies } from '../../api/apiService';
import poster from '../../img/no_poster.jpg';
import { URL } from '../../const/Url';

import { FilmTitle, Img, Li, Title, Ul } from './Home.styled';

const Home = () => {
  const [trendingList, setTrendingList] = useState([]);
  const location = useLocation();
  const currentUrl = location.pathname === '/' ? 'movies/' : '';

  useEffect(() => {
    searchTrendingMovies().then(setTrendingList);
  }, []);

  return (
    <>
      <Title>Trending today</Title>

      <Ul>
        {trendingList.map(({ id, poster_path, title }) => (
          <Li key={id}>
            <NavLink
              id={id}
              state={{ from: location }}
              to={`${currentUrl}${id}`}
            >
              <Img
                src={poster_path ? URL + poster_path : poster}
                alt={title}
              ></Img>
              <FilmTitle>{title}</FilmTitle>
            </NavLink>
          </Li>
        ))}
      </Ul>
    </>
  );
};

export default Home;
