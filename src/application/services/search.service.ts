import { SearchRepository } from '../interfaces/search-repository'

export class SearchService {
  constructor(private searchRepository: SearchRepository) { }

  search(query: string) {
    return this.searchRepository.search(query)
  }
}
