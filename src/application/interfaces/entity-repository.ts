import { BaseEntity } from '../../domain/entities/base-entity'

export interface EntityRepository {
  getAll(): Promise<BaseEntity[]>
  getById(entityId: string): Promise<BaseEntity | null>
}
