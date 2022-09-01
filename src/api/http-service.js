import http from './client';

const COMEDY = (url) => http.get(url);
const ROMANCE = (url) => http.get(url);
const ACTION = (url) => http.get(url);
const ANIMATION = (url) => http.get(url);
const FANTASY = (url) => http.get(url);
const ALL = (url) => http.get(url);

const HttpService = {
  COMEDY,
  ROMANCE,
  ACTION,
  ANIMATION,
  FANTASY,
  ALL,
};

export default HttpService;
