import { RedisAdapter } from '@grammyjs/storage-redis'
import { session } from 'grammy'

import { redis } from '../../infrastructure/db/redis'
import { BotConfig } from '../types/bot-config'

export const configSession: BotConfig = (bot) => {
  bot.use(
    session({
      initial: () => ({}),
      storage: new RedisAdapter({
        instance: redis,
      }),
    }),
  )
}
