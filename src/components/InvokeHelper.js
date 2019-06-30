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

  getGenres = (type = 'movie') => this.api.get(`${BASE_URL_V3}genre/${type}/list?api_key=${API_KEY}`);

  getNowPlaying = (type = 'movie', page) => this.api.get(`${BASE_URL_V3}${type}/${type === 'movie' ? 'now_playing' : 'on_the_air'}?region=${this.region}&page=${!page ? 1 : page}&api_key=${API_KEY}`);

  getPopular = (type = 'movie', page) => this.api.get(`${BASE_URL_V3}${type}/popular?region=${this.region}&page=${!page ? 1 : page}&api_key=${API_KEY}`);

  getTopRated = (type = 'movie', page) => this.api.get(`${BASE_URL_V3}${type}/top_rated?region=${this.region}&page=${!page ? 1 : page}&api_key=${API_KEY}`);

  getUpcoming = (type = 'movie', page) => this.api.get(`${BASE_URL_V3}${type}/${type === 'movie' ? 'upcoming' : 'airing_today'}?region=${this.region}&page=${!page ? 1 : page}&api_key=${API_KEY}`);

  getPopularPeoples = page => this.api.get(`${BASE_URL_V3}person/popular?region=${this.region}&page=${!page ? 1 : page}&api_key=${API_KEY}`);
}
