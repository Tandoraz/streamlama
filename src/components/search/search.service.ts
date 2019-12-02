import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { AxiosResponse } from 'axios/index'
import tmdb from '@/plugins/tmdb';

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

export interface SearchResponse {
  page: number
  total_results: number
  total_pages: number
  results: (SearchMovie | SearchSerie | SearchPerson)[]
}

export interface SearchResult {
  id: number
  media_type: MediaType
}

export interface SearchMovie extends SearchResult {
  poster_path: string
  overview: string
  genre_ids: number[]
  original_language: string
  backdrop_path: string
  popularity: number
  vote_count: number
  vote_average: number

  original_title: string
  title: string
  release_date: string
  video: boolean
  adult: boolean
}

export interface SearchSerie extends SearchResult {
  poster_path: string
  overview: string
  genre_ids: number[]
  original_language: string
  backdrop_path: string
  popularity: number
  vote_count: number
  vote_average: number

  original_name: string
  name: string
  origin_country: string[]
  first_air_date: string
}

export interface SearchPerson extends SearchResult {
  name: string
  popularity: number
  adult: boolean
  profile_path: string
  known_for: (SearchMovie | SearchSerie)[]
}

export type MediaType = "movie" | "tv" | "person";
