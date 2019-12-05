import {AxiosInstance, AxiosResponse} from 'axios'
import tmdb from '@/plugins/tmdb';
import {SearchResponse} from "@/model";

export default class SearchService {
  private http: AxiosInstance;

  constructor() {
    this.http = tmdb.getAxiosInstance();
  }

  public search(searchValue: string): Promise<AxiosResponse<SearchResponse>> {
    return this.http.get('/search/multi', {
      params: {
        query: searchValue
      }
    })
  }
}
