import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Stats from '../../components/stats/Stats';
import Genre from '../../components/genre/Genre';
import Nav from '../../components/nav/Nav';
import { SET_DETAIL_STATE } from '../../redux/MovieSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SET_DETAIL_STATE('idle'));
  }, [dispatch]);

  return (
    <>
      <Nav />
      <Stats />
      <Genre />
    </>
  );
};

export default Home;
