import { parseMode } from '@grammyjs/parse-mode'

import { BotConfig } from '../types/bot-config'

export const configParseMode: BotConfig = (bot) => {
  bot.api.config.use(parseMode('html'))
}
