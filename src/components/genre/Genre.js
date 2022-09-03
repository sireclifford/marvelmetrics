/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import './Genre.css';

const Genre = () => {
  const navigate = useNavigate();
  const status = useSelector((state) => state.movies.status);
  const movies = useSelector((state) => state.movies.movies);

  const gotoMovie = (movie_id) => {
    navigate(`/details/${movie_id}`);
  };

  let content;
  if (status === 'idle') {
    content = <div>Loading...</div>;
  } else if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    content = movies.movies.map((movie) => (
      <>
        <div
          onKeyDown={() => gotoMovie(movie.id)}
          className="aviation-item"
          onClick={() => gotoMovie(movie.id)}
          key={movie.id}
        >
          <BsFillArrowRightCircleFill
            style={{ color: 'white' }}
            className="more-icon"
          />
          <div className="aviation-number">{movie.rating}</div>
          <div className="aviation-title">{movie.title}</div>
        </div>
      </>
    ));
  } else if (status === 'failed') {
    content = <div>Failed to load movies</div>;
  }

  return (
    <div className="aviation">
      <h1 className="stats-title">
        STATS BY GENRE
      </h1>
      <div className="aviation-content">{content}</div>
    </div>
  );
};

export default Genre;
