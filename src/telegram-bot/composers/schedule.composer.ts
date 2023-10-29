import { Composer } from 'grammy'

import { container } from '../../infrastructure/config/container/container'
import { ScheduleController } from '../../infrastructure/controllers/schedule-controller'
import { MyContext } from '../types/my-context'

export const scheduleComposer = new Composer<MyContext>()

const controller = container.get(ScheduleController)

scheduleComposer.command('schedule', async (ctx) => {
  await ctx.reply('this is schedule command')
})

scheduleComposer.command('today', async (ctx) => {
  const schedule = await controller.getScheduleForToday(ctx.message!.text)

  if (!schedule) {
    await ctx.reply(ctx.t('schedule_fail'))
    return
  }

  await ctx.reply(
    schedule.date.toISOString() + ' ' + schedule.lessons.length + ' lessons',
  )
})

scheduleComposer.command('tomorrow', async (ctx) => {
  await ctx.reply('this is tomorrow command')
})
