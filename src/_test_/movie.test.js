import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../store';
import Movie from '../components/movie/Movie';

it('Test renders with data', () => {
  const movie = {
    movie_id: '1',
    title: 'test',
    rating: '1',
  };
  const tree = renderer.create(
    <Provider store={store}>
      <Movie movie={movie} />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

it('Test renders with no data', () => {
  const movie = {};
  const tree = renderer.create(
    <Provider store={store}>
      <Movie movie={movie} />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
