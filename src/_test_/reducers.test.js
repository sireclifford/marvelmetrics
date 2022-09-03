import { SET_GENRE } from '../redux/MovieSlice';

describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(SET_GENRE(undefined)).toEqual({
      payload: undefined,
      type: 'movies/SET_GENRE',
    });
  });

  it('should return the initial state', () => {
    expect(SET_GENRE('idle')).toEqual({
      payload: 'idle',
      type: 'movies/SET_GENRE',
    });
  });
});
