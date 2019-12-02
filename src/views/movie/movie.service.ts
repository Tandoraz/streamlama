import { AxiosInstance } from 'axios'
import { AxiosResponse } from 'axios/index'
import tmdb from '@/plugins/tmdb';

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

export interface Movie {
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

/*

interface Movie {
adult?: boolean
backdrop_path?: string
belongs_to_collection?
null or object
optional
budget?
integer
optional
genres?
array[object]
optional
id?
integer
optional
name?
string
optional
homepage?
string or null
optional
id?
integer
optional
imdb_id
string or null
minLength: 9
maxLength: 9
pattern: ^tt[0-9]{7}
optional
original_language
string
optional
original_title
string
optional
overview
string or null
optional
popularity
number
optional
poster_path
string or null
optional
production_companies
array[object]
optional
name
string
optional
id
integer
optional
logo_path
string or null
optional
origin_country
string
optional
production_countries
array[object]
optional
iso_3166_1
string
optional
name
string
optional
release_date
string
format: date
optional
revenue
integer
optional
runtime
integer or null
optional
spoken_languages
array[object]
optional
iso_639_1
string
optional
name
string
optional
status
string
Allowed Values: Rumored, Planned, In Production, Post Production, Released, Canceled
optional
tagline
string or null
optional
title
string
optional
video
boolean
optional
vote_average
number
optional
vote_count
integer
}

*/
