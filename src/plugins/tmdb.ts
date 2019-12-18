import axios, {AxiosRequestConfig, AxiosInstance} from 'axios'
import {TmdbConfig} from "@/model";

export default class tmdb {
  private static config: TmdbConfig;
  private static TMDB_CONFIG_STORAGE_KEY = "TMDB_CONFIG";

  private static axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
  });

  public static async init() {
    this.axiosInstance.interceptors.request.use(this.interceptor);
    let config = sessionStorage.getItem(this.TMDB_CONFIG_STORAGE_KEY);
    if (!config) {
      let configResult = await this.axiosInstance.get<TmdbConfig>('/configuration', {
        headers: {'Authorization': 'Bearer ' + process.env.VUE_APP_TMDB_AUTH_TOKEN},
      });
      this.config = configResult.data as TmdbConfig;
      sessionStorage.setItem(this.TMDB_CONFIG_STORAGE_KEY, JSON.stringify(this.config));
    } else {
      this.config = this.loadLocalConfigOrUseDefault()
    }
  }

  private static interceptor = (request: AxiosRequestConfig) => {
    request.headers['Authorization'] = 'Bearer ' + process.env.VUE_APP_TMDB_AUTH_TOKEN;
    return request
  };

  public static getAxiosInstance(): AxiosInstance {
    return this.axiosInstance
  }

  public static getImageBaseUrl(): string {
    return this.getConfig().images.secure_base_url;
  }

  public static getPosterSize(minSize: Number = 200): string {
    let result = this.getConfig().images.poster_sizes.find(size => {
      return parseInt(size.substr(1)) >= minSize
    });
    return result ? result : 'original';
  }

  public static getProfileImageSize(minSize: Number = 200): string {
    let result = this.getConfig().images.profile_sizes.find(size => {
      return parseInt(size.substr(1)) >= minSize
    });
    return result ? result : 'original';
  }

  public static getBackdropSize(minSize: Number = 500): string {
    let result = this.getConfig().images.poster_sizes.find(size => {
      return parseInt(size.substr(1)) >= minSize
    });
    return result ? result : 'original';
  }

  private static getConfig(): TmdbConfig {
    if (this.config) return this.config;
    return this.loadLocalConfigOrUseDefault();
  }

  private static loadLocalConfigOrUseDefault(): TmdbConfig {
    let localConfig = sessionStorage.getItem(this.TMDB_CONFIG_STORAGE_KEY);
    if (localConfig) return JSON.parse(localConfig);
    return {
      images: {
        backdrop_sizes: ['w500'],
        base_url: 'http://image.tmdb.org/t/p/',
        logo_sizes: [],
        poster_sizes: ['w200'],
        profile_sizes: ['w200'],
        secure_base_url: 'https://image.tmdb.org/t/p/',
        still_sizes: []
      },
      change_keys: []
    }
  }

}
