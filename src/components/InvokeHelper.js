import Invoke from './Invoke';
import { API_KEY, BASE_URL_V3 } from '../env';

export default class InvokeHelper {
  constructor(token, region) {
    this.api = new Invoke();
    this.token = token;
    this.region = !region ? 'ID' : region;
  }

  setRegion = (region) => {
    this.region = region;
  }

  getConfiguration = () => this.api.get(`${BASE_URL_V3}configuration?api_key=${API_KEY}`);

  getGenres = () => this.api.get(`${BASE_URL_V3}genre/movie/list?api_key=${API_KEY}`);

  getNowPlayingMovies = page => this.api.get(`${BASE_URL_V3}movie/now_playing?region=${this.region}&page=${!page ? 1 : page}&api_key=${API_KEY}`);

  getPopularMovies = page => this.api.get(`${BASE_URL_V3}movie/popular?region=${this.region}&page=${!page ? 1 : page}&api_key=${API_KEY}`);

  getTopRatedMovies = page => this.api.get(`${BASE_URL_V3}movie/top_rated?region=${this.region}&page=${!page ? 1 : page}&api_key=${API_KEY}`);

  getUpcomingMovies = page => this.api.get(`${BASE_URL_V3}movie/upcoming?region=${this.region}&page=${!page ? 1 : page}&api_key=${API_KEY}`);
}
