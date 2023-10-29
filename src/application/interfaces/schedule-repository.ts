import { BaseEntity } from '../../domain/entities/base-entity'
import { Schedule } from '../../domain/entities/schedule'

export interface ScheduleRepository {
  getSchedule(entity: BaseEntity, date: Date): Promise<Schedule>
}
