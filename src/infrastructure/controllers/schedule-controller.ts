import { injectable } from 'inversify'

import { ScheduleService } from '../../application/services/schedule.service'
import { SearchService } from '../../application/services/search.service'

@injectable()
export class ScheduleController {
  constructor(
    private scheduleService: ScheduleService,
    private searchService: SearchService,
  ) { }

  async getScheduleForToday(input: string) {
    const entities = await this.searchService.search(input)
    const entity = entities[0]

    if (!entity) {
      return
    }

    const schedule = await this.scheduleService.getScheduleForToday(entity)

    return schedule
  }
}
