import { BotConfig } from '../types/bot-config'
import { configAutoRetry } from './config-auto-retry'
import { configCommands } from './config-commands'
import { configComposers } from './config-composers'
import { configErrorHandler } from './config-error-handler'
import { configI18n } from './config-i18n'
import { configParseMode } from './config-parse-mode'
import { configSession } from './config-session'

const CONFIGS = [
  configCommands,
  configSession,
  configI18n,
  configAutoRetry,
  configParseMode,
  configComposers,
  configErrorHandler,
]

export const configBot: BotConfig = (bot) => {
  CONFIGS.forEach((c) => {
    c(bot)
  })
}
