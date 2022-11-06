import { Route, Routes } from 'react-router-dom';
import { NotFound } from './NotFound';
import { AppBar } from './AppBar/AppBar';
import { Home } from '../pages/Home/Home';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { Movies } from '../pages/Movies/Movies';

export const App = () => {
  return (
    <>
      <AppBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" />
            <Route path="reviews" />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};
