import { Composer } from 'grammy'

import { MyContext } from '../types/my-context'

export const commandNotFoundComposer = new Composer<MyContext>()

commandNotFoundComposer.on('message:text', async (ctx) => {
  if (
    ctx.message.text.startsWith('/') &&
    (ctx.chat.type === 'private' || ctx.message.text.includes(ctx.me.username))
  ) {
    await ctx.reply(ctx.t('command_not_found'))
  }
})
