import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';
import App from '../App';

test('renders app components', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );
  const linkElement = screen.getByText(/STATS BY GENRE/i);
  expect(linkElement).toBeInTheDocument();
});
