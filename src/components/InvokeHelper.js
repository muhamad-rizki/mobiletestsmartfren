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

  baseGetter = (type, kind, page) => this.api.get(`${BASE_URL_V3}${type}/${kind}?region=${this.region}&page=${!page ? 1 : page}&api_key=${API_KEY}`);

  getNowPlaying = (type = 'movie', page) => this.baseGetter(type, type === 'movie' ? 'now_playing' : 'on_the_air', page);

  getPopular = (type = 'movie', page) => this.baseGetter(type, 'popular', page);

  getTopRated = (type = 'movie', page) => this.baseGetter(type, 'top_rated', page);

  getUpcoming = (type = 'movie', page) => this.baseGetter(type, type === 'movie' ? 'upcoming' : 'airing_today', page);
}
