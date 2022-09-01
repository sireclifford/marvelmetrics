/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import HttpService from '../api/http-service';

export const initialState = {
  status: 'idle',
};

export const fetchAllMovies = createAsyncThunk('movies/fetchAllMovies', async () => {
  const response = await HttpService.ALL('/list_movies.json?limit=50');
  return response.data;
});

export const fetchMovieDetails = createAsyncThunk('movies/fetchMovieDetails', async (movie_id) => {
  const response = await HttpService.ALL(`/movie_details.json?movie_id=${movie_id}`);
  return response.data;
});

const MovieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setComedy: (state, action) => {
      state.comedy = action.payload;
    },
  },
  extraReducers: {
    [fetchAllMovies.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchAllMovies.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.movies = action.payload.data;
    },
    [fetchAllMovies.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default MovieSlice.reducer;
