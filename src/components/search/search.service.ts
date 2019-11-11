import axios from 'axios'

export default class SearchService {
    private baseUrl = 'https://api.themoviedb.org/3';

    public search(searchValue: string): Promise<any> {
        return axios.get(this.baseUrl + '/search/multi', {
            params: {
                api_key: '<api_key>',
                query: searchValue
            }
        })
    }
}
