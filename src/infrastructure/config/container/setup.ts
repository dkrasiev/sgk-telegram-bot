import { ScheduleService } from '../../../application/services/schedule.service'
import { SearchService } from '../../../application/services/search.service'
import { ScheduleController } from '../../controllers/schedule-controller'
import { MockScheduleRepository } from '../../repositories/mock/mock-schedule-repository'
import { MockSearchRepository } from '../../repositories/mock/mock-search-repository'
import { container } from './container'
import { SCHEDULE_REPOSITORY_TOKEN, SEARCH_REPOSITORY_TOKEN } from './tokens'

container.bind(SCHEDULE_REPOSITORY_TOKEN).to(MockScheduleRepository)
container.bind(SEARCH_REPOSITORY_TOKEN).to(MockSearchRepository)

container.bind(ScheduleService).toDynamicValue((ctx) => {
  return new ScheduleService(ctx.container.get(SCHEDULE_REPOSITORY_TOKEN))
})
container.bind(SearchService).toDynamicValue((ctx) => {
  return new SearchService(ctx.container.get(SEARCH_REPOSITORY_TOKEN))
})

container.bind(ScheduleController).toSelf()
