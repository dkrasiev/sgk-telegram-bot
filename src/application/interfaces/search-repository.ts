import { BaseEntity } from '../../domain/entities/base-entity'

export interface SearchRepository {
  search(query: string): Promise<BaseEntity[]>
}
