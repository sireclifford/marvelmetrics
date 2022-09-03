import axios from 'axios';

export default axios.create({
  baseURL: 'https://yts.mx/api/v2/',
  headers: {
    'Content-Type': 'application/json',
  },
});
