import { BotCommand } from 'grammy/types'

import { BotConfig } from '../types/bot-config'

const COMMANDS: BotCommand[] = [
  {
    command: 'start',
    description: 'start',
  },
  {
    command: 'schedule',
    description: 'schedule',
  },
  {
    command: 'today',
    description: 'today',
  },
  {
    command: 'tomorrow',
    description: 'tomorrow',
  },
]

export const configCommands: BotConfig = (bot) => {
  bot.api.setMyCommands(COMMANDS)
}
