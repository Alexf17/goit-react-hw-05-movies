import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '07c817eca0f88df46ceed4174b3720d7';

export async function searchTrendingMovies() {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${KEY}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function searchMovies(query) {
  try {
    const response = await axios.get(
      `search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function searchMoviesDetails(movieId) {
  try {
    const response = await axios.get(
      `/movie/${movieId}?api_key=${KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function searchMoviesCast(movieId) {
  try {
    const response = await axios.get(
      `movie/${movieId}?api_key=${KEY}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
}

export async function searchMoviesReviews(movieId) {
  try {
    const response = await axios.get(
      `/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}
