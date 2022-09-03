/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import HttpService from '../api/http-service';

export const initialState = {
  status: 'idle',
  detailStatus: 'idle',
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (genre) => {
  const response = await HttpService.ALL(`/list_movies.json?genre=${genre}&limit=20`);
  return response.data;
});

export const fetchMovieDetails = createAsyncThunk('movies/fetchMovieDetails', async (movie_id) => {
  const response = await HttpService.MOVIE(
    `/movie_details.json?movie_id=${movie_id}`,
  );
  return response.data;
});

const MovieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    SET_GENRE: (state, action) => {
      state.genre = action.payload;
    },
    SET_DETAIL_STATE: (state, action) => {
      state.detailStatus = action.payload;
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.status = 'loading';
      state.detailStatus = 'succeeded';
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.movies = action.payload.data;
    },
    [fetchMovies.rejected]: (state) => {
      state.status = 'failed';
    },
    [fetchMovieDetails.pending]: (state) => {
      state.detailStatus = 'loading';
    },
    [fetchMovieDetails.fulfilled]: (state, action) => {
      state.detailStatus = 'succeeded';
      state.selectedMovie = action.payload.data;
    },
    [fetchMovieDetails.rejected]: (state) => {
      state.detailStatus = 'failed';
    },
  },
});

export default MovieSlice.reducer;
export const { SET_DETAIL_STATE, SET_GENRE } = MovieSlice.actions;
