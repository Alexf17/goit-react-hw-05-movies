import { searchMoviesDetails } from '../../API/APIservice';
import {
  Link,
  useParams,
  useLocation,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import poster from '../../img/no_poster.jpg';
import {
  Description,
  FilmTitle,
  GenresTitle,
  GoBackButton,
  Img,
  OverviewTitle,
  Wrapper,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    searchMoviesDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  const {
    poster_path,
    title,
    original_title,
    vote_average,
    release_date,
    overview,
    genres,
  } = movie;

  let date = new Date(release_date);

  return (
    <>
      <Link to={location.state?.from ?? '/'}>
        <GoBackButton>👈 Go back</GoBackButton>
      </Link>

      <Wrapper>
        <Img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : { poster }
          }
          alt={title}
          width="300"
        />
        <div>
          <FilmTitle>
            {original_title}({date.getFullYear()})
          </FilmTitle>
          <ul>
            <li>
              <Description>User Score:{vote_average.toFixed(1)}</Description>
            </li>
            <li>
              <OverviewTitle>Overview</OverviewTitle>
              <Description>{overview}</Description>
            </li>
            <li>
              <GenresTitle>Genres</GenresTitle>
              <Description>
                {genres.map(genre => genre.name).join(' ')}
              </Description>
            </li>
          </ul>
          <h3>Additional information</h3>
          <ul>
            <li>
              <NavLink to="cast" state={location.state?.from ?? '/'}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" state={location.state?.from ?? '/'}>
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
      </Wrapper>
      <Outlet />
    </>
  );
};
