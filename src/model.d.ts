import Vue from 'vue';
import {Route} from "vue-router";

declare module 'vue/types/vue' {

  interface Vue {
    $route: Route
  }
}

interface SearchResponse {
  page: number
  total_results: number
  total_pages: number
  results: (SearchMovie | SearchSerie | SearchPerson)[]
}

interface SearchResult {
  media_type: MediaType
}

interface SearchMovie extends SearchResult {
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

interface SearchSerie extends SearchResult {
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

interface SearchPerson extends SearchResult, Person {
  popularity: number
  adult: boolean
  known_for: (SearchMovie | SearchSerie)[]
}

interface Movie {
  id: number
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

interface MovieDetail extends Movie {
  belongs_to_collection: object,
  budget: number,
  credits: Credits,
  external_ids: any,
  genres: any[],
  homepage: string,
  imdb_id: string,
  production_companies: any,
  production_countries: any,
  revenue: number,
  runtime: number,
  similar: SimilarMovie,
  spoken_languages: any,
  status: MovieStatus,
  tagline: string,
  videos: Video[]
}

interface SimilarMovie {
  page: number,
  results: SearchMovie[],
  total_pages: number,
  total_results: number
}

interface Credits {
  cast: CastMember[],
  crew: CrewMember[]
}

interface Video {
  id: string,
  iso_639_1: string,
  iso_3166_1: string,
  key: string,
  name: string,
  site: string,
  size: VideoSize,
  type: VideoType
}

interface TmdbConfig {
  images: TmdbImageConfig
  change_keys: string[]
}

interface TmdbImageConfig {
  backdrop_sizes: string[]
  base_url: string
  logo_sizes: string[]
  poster_sizes: string[]
  profile_sizes: string[]
  secure_base_url: string
  still_sizes: string[]
}

interface Person {
  id?: number
  name?: string
  profile_path?: string
}

interface CastMember extends Person {
  cast_id?: number
  character?: string
  credit_id?: string
  gender?: number
  order?: number
}

interface CrewMember extends Person {
  credit_id?: string
  department?: string
  gender?: number
  job?: string
}

type MediaType = "movie" | "tv" | "person";
type MovieStatus = "Rumored" | "Planned" | "In Production" | "Post Production" | "Released" | "Canceled";
type VideoType = "Trailer" | "Teaser" | "Clip" | "Featurette" | "Behind the Scenes" | "Bloopers";
type VideoSize = 360 | 480 | 720 | 1080;
