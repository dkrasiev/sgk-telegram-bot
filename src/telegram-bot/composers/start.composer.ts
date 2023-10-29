import { Composer } from 'grammy'

import { MyContext } from '../types/my-context'

export const startComposer = new Composer<MyContext>()

startComposer.command('start', async (ctx) => {
  if (!ctx.from) {
    return
  }
  const name = ctx.from.first_name
  await ctx.reply(ctx.t('welcome', { name }))
})

startComposer.command('help', async (ctx) => {
  await ctx.reply(ctx.t('help'))
})
