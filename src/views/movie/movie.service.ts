import {AxiosInstance, AxiosResponse} from 'axios'
import tmdb from '@/plugins/tmdb';
import {Movie} from "@/model";

export default class MovieService {
  private http: AxiosInstance;

  constructor() {
    this.http = tmdb.getAxiosInstance();
  }

  public loadMovie(movieId: string): Promise<AxiosResponse<Movie>> {
    return this.http.get(`/movie/${movieId}`, {
      params: {
        append_to_response: 'videos,similar,credits,external_ids'
      }
    })
  }
}
