import { Composer } from 'grammy'

import logger from '../../infrastructure/logger/logger'

export const logComposer = new Composer()

logComposer.on('message:text', async (ctx, next) => {
  logger.info({
    message: ctx.message,
  })
  await next()
})
