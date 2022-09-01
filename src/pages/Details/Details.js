/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Movie from '../../components/movie/Movie';
import Nav from '../../components/nav/Nav';

const Details = () => {
  const status = useSelector((state) => state.movies.status);
  const movies = useSelector((state) => state.movies.movies);
  const { movie_id } = useParams();
  const selectedMovie = movies.movies.filter((movie) => movie.genres.includes(movie_id));

  let content;
  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    content = (
      selectedMovie.map((movie) => <Movie key={movie.id} movie={movie} />));
  }
  return (
    <>
      <Nav />
      {content}
    </>
  );
};

export default Details;
