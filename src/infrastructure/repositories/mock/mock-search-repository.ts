import { injectable } from 'inversify'

import { SearchRepository } from '../../../application/interfaces/search-repository'
import { BaseEntity } from '../../../domain/entities/base-entity'
import { Teacher } from '../../../domain/entities/teacher'

@injectable()
export class MockSearchRepository implements SearchRepository {
  async search(query: string): Promise<BaseEntity[]> {
    return [new Teacher('id', 'name')]
  }
}
