/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../redux/MovieSlice';
import Nav from '../../components/nav/Nav';
import './Details.css';

const Details = () => {
  const dispatch = useDispatch();
  const { detailStatus } = useSelector((state) => state.movies);
  const movie = useSelector((state) => state.movies.selectedMovie);
  const { movie_id } = useParams();

  useEffect(() => {
    if (detailStatus === 'idle') {
      dispatch(fetchMovieDetails(movie_id));
    }
  }, [movie_id, dispatch, detailStatus]);

  let content;
  if (detailStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (detailStatus === 'succeeded') {
    if (movie != null) {
      content = (
        <div className="movie-item">
          <img
            className="movie-image"
            src={movie.movie.medium_cover_image}
            alt={movie.movie.title}
          />
          <h2 className="movie-title">{movie.movie.title}</h2>
          <div className="movie-heading">
            <p className="genre">
              Genre:
              {movie.movie.genres[0]}
            </p>

            <div className="ratings">
              <p className="seeds">Rating</p>
              <p className="seeds-value">{movie.movie.rating}</p>
            </div>
          </div>
          <div className="movie-details">
            <p className="descrition">{movie.movie.description_full}</p>
          </div>
        </div>
      );
    }
  } else if (detailStatus === 'failed') {
    content = <div>Failed to load movie details</div>;
  }
  return (
    <>
      <Nav />
      {content}
    </>
  );
};

export default Details;
