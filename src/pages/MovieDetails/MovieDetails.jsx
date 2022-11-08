import { Suspense, useEffect, useState } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';

import { searchMoviesDetails } from '../../api/apiService';

import { URL } from '../../const/Url';
import poster from '../../img/no_poster.jpg';
import {
  Description,
  FilmTitle,
  GenresTitle,
  GoBackButton,
  Img,
  InfoBlock,
  InfoBlockTitle,
  InfoItem,
  InfoList,
  OverviewTitle,
  StyledNavLink,
  Wrapper,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

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
        <div>
          <Img
            src={poster_path ? URL + poster_path : poster}
            alt={title}
            width="300"
          />
        </div>
        <InfoBlock>
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
          <InfoBlockTitle>Additional information</InfoBlockTitle>
          <InfoList>
            <InfoItem>
              <StyledNavLink to="cast" state={{ from: backLinkHref }}>
                Cast
              </StyledNavLink>
            </InfoItem>
            <InfoItem>
              <StyledNavLink to="reviews" state={{ from: backLinkHref }}>
                Reviews
              </StyledNavLink>
            </InfoItem>
          </InfoList>
        </InfoBlock>
      </Wrapper>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
