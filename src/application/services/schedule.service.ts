import { BaseEntity } from '../../domain/entities/base-entity'
import { ScheduleRepository } from '../interfaces/schedule-repository'

export class ScheduleService {
  constructor(private scheduleRepository: ScheduleRepository) { }

  getScheduleForTwoDays(entity: BaseEntity) {
    const dates = this.getNextTwoDays()
    return Promise.all(
      dates.map((d) => this.scheduleRepository.getSchedule(entity, d)),
    )
  }

  getScheduleForToday(entity: BaseEntity) {
    const today = this.getToday()
    return this.scheduleRepository.getSchedule(entity, today)
  }

  getScheduleForTomorrow(entity: BaseEntity) {
    const tomorrow = this.getTomorrow()
    return this.scheduleRepository.getSchedule(entity, tomorrow)
  }

  private getNextTwoDays() {
    return [new Date(), new Date()]
  }

  private getToday() {
    return new Date()
  }

  private getTomorrow() {
    return new Date()
  }
}
