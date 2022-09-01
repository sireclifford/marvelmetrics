/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { fetchAllMovies } from '../../redux/MovieSlice';
import './Genre.css';

const Genre = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.movies.status);
  const movies = useSelector((state) => state.movies.movies);

  const movide_data = {
    romance: [],
    comedy: [],
    action: [],
    crime: [],
    fantasy: [],
    horror: [],
  };

  const gotoMovie = (genre) => {
    // navigate to details page with movie id
    navigate(`/details/${genre}`);
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllMovies());
    }
  }, [dispatch, status]);

  let content;
  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    movies.movies.map((movie) => {
      if (movie.genres.includes('Romance')) {
        movide_data.romance.push(movie);
      }
      if (movie.genres.includes('Comedy')) {
        movide_data.comedy.push(movie);
      }
      if (movie.genres.includes('Action')) {
        movide_data.action.push(movie);
      }
      if (movie.genres.includes('Crime')) {
        movide_data.crime.push(movie);
      }
      if (movie.genres.includes('Fantasy')) {
        movide_data.fantasy.push(movie);
      }
      if (movie.genres.includes('Horror')) {
        movide_data.horror.push(movie);
      }

      return null;
    });
    content = (
      <>
        <div
          onKeyDown={() => gotoMovie('Romance')}
          className="aviation-item"
          onClick={() => gotoMovie('Romance')}
        >
          <BsFillArrowRightCircleFill
            style={{ color: 'white' }}
            className="more-icon"
          />
          <div className="aviation-number">{movide_data.romance.length}</div>
          <div className="aviation-title">Romance</div>
        </div>
        <div
          onKeyDown={() => gotoMovie('Comedy')}
          className="aviation-item"
          onClick={() => gotoMovie('Comedy')}
        >
          <BsFillArrowRightCircleFill
            style={{ color: 'white' }}
            className="more-icon"
          />
          <div className="aviation-number">{movide_data.comedy.length}</div>
          <div className="aviation-title">Comedy</div>
        </div>
        <div
          onKeyDown={() => gotoMovie('Action')}
          className="aviation-item"
          onClick={() => gotoMovie('Action')}
        >
          <BsFillArrowRightCircleFill
            style={{ color: 'white' }}
            className="more-icon"
          />
          <div className="aviation-number">{movide_data.action.length}</div>
          <div className="aviation-title">Action</div>
        </div>
        <div
          onKeyDown={() => gotoMovie('Crime')}
          className="aviation-item"
          onClick={() => gotoMovie('Crime')}
        >
          <BsFillArrowRightCircleFill
            style={{ color: 'white' }}
            className="more-icon"
          />
          <div className="aviation-number">{movide_data.crime.length}</div>
          <div className="aviation-title">Crime</div>
        </div>
        <div
          onKeyDown={() => gotoMovie('Fantasy')}
          className="aviation-item"
          onClick={() => gotoMovie('Fantasy')}
        >
          <BsFillArrowRightCircleFill
            style={{ color: 'white' }}
            className="more-icon"
          />
          <div className="aviation-number">{movide_data.fantasy.length}</div>
          <div className="aviation-title">Fantasy</div>
        </div>
        <div
          onKeyDown={() => gotoMovie('Horror')}
          className="aviation-item"
          onClick={() => gotoMovie('Horror')}
        >
          <BsFillArrowRightCircleFill
            style={{ color: 'white' }}
            className="more-icon"
          />
          <div className="aviation-number">{movide_data.horror.length}</div>
          <div className="aviation-title">Horror</div>
        </div>
      </>
    );
  } else if (status === 'failed') {
    content = <div>Failed to load movies</div>;
  }

  return (
    <div className="aviation">
      <h1 className="stats-title">STATS BY GENRE</h1>
      <div className="aviation-content">{content}</div>
    </div>
  );
};

export default Genre;
