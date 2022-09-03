/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { useLocation, useNavigate } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { fetchMovies } from '../../redux/MovieSlice';
import './Nav.css';

const Nav = () => {
  // const { movies } = useSelector((state) => state.movies);
  const status = useSelector((state) => state.movies.status);
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState({
    value: 'Comedy',
    label: 'Comedy',
  });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMovies(selectedOption.value));
    }
  }, [selectedOption, dispatch, status]);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const options = [
    { value: 'Comedy', label: 'Comedy' },
    { value: 'Horror', label: 'Horror' },
    { value: 'Romance', label: 'Romance' },
    { value: 'Action', label: 'Action' },
    { value: 'Thriller', label: 'Thriller' },
    { value: 'Drama', label: 'Drama' },
    { value: 'Crime', label: 'Crime' },
    { value: 'Animation', label: 'Animation' },
    { value: 'Fantasy', label: 'Fantasy' },
    { value: 'Adventure', label: 'Adventure' },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    dispatch(fetchMovies(selectedOption.value));
  };

  return (
    <div className="nav">
      <div
        role="button"
        tabIndex={0}
        onClick={() => navigate(-1)}
        className="return"
        style={{ visibility: pathname === '/' ? 'hidden' : 'visible' }}
      >
        <BsArrowLeftShort style={{ color: 'white', fontSize: '20px' }} />
      </div>
      <h1 className="title">Movies</h1>
      <div
        className="actions"
        style={{ visibility: pathname === '/' ? 'visible' : 'hidden' }}
      >
        <Select
          defaultValue={selectedOption}
          onChange={(value) => handleChange(value)}
          options={options}
          styles={{
            border: '1px solid goldenrod',
          }}
        />
      </div>
    </div>
  );
};

export default Nav;
