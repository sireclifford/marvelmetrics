import { configureStore } from '@reduxjs/toolkit';
import MovieSlice from './redux/MovieSlice';

export default configureStore({
  reducer: {
    movies: MovieSlice,
  },
});
