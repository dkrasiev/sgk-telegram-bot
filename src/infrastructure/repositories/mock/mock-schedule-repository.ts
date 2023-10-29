import { injectable } from 'inversify'

import { ScheduleRepository } from '../../../application/interfaces/schedule-repository'
import { BaseEntity } from '../../../domain/entities/base-entity'
import { Lesson } from '../../../domain/entities/lesson'
import { Schedule } from '../../../domain/entities/schedule'

@injectable()
export class MockScheduleRepository implements ScheduleRepository {
  private schedule = new Schedule(new Date(), [
    new Lesson('num', 'title', 'teachername', 'cab', 'groupname'),
  ])

  async getSchedule(entity: BaseEntity, date: Date): Promise<Schedule> {
    return this.schedule
  }
}
