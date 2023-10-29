import { Bot } from 'grammy'

import { MyContext } from './my-context'

export type BotConfig = (bot: Bot<MyContext>) => void
