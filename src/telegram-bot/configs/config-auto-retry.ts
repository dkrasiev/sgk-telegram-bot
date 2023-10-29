import { autoRetry } from '@grammyjs/auto-retry'

import { BotConfig } from '../types/bot-config'

export const configAutoRetry: BotConfig = (bot) => {
  bot.api.config.use(autoRetry())
}
