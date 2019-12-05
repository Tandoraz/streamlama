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
  id: number
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

interface Person{
  id?: number
  name?:string
  profile_path?:string
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
