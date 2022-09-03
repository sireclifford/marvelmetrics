/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import { useParams } from 'react-router-dom';
import './Movie.css';

const Movie = (props) => {
  const { movie_id } = useParams();
  const movie = props;
  const {
    movie: { title, rating },
  } = props;
  let content;

  if (Object.keys(movie).length === 0) {
    content = <div>No data found</div>;
  } else {
    content = (
      <div className="movie-item">
        <div className="movie-title">
          <h2>{title}</h2>
          <p>
            Genre:
            {movie_id}
          </p>
        </div>
        <div className="movie-details">
          <p className="seeds-value">{rating}</p>
          <p className="seeds">Rating</p>
        </div>
      </div>
    );
  }

  return <div className="movie-list">{content}</div>;
};

export default Movie;
