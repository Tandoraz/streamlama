import axios from 'axios'

export default class SearchService {
  private baseUrl = 'https://api.themoviedb.org/3';

  public search(searchValue: string): Promise<SearchPerson> {
    return axios.get(this.baseUrl + '/search/multi', {
      params: {
        api_key: '<api_key>',
        query: searchValue
      }
    })
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

interface SearchPerson extends SearchResult {
  name: string
  popularity: number
  adult: boolean
  profile_path: string
  known_for: (SearchMovie | SearchSerie)[]
}

type MediaType = "movie" | "tv" | "person";
