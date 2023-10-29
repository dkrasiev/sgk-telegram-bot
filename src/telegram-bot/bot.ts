import { run, RunnerHandle } from '@grammyjs/runner'
import { Bot } from 'grammy'

import { env } from '../infrastructure/config/env'
import { configBot } from './configs/config-bot'
import { MyContext } from './types/my-context'

export const bot = new Bot<MyContext>(env.BOT_TOKEN)

await bot.init()
configBot(bot)

export let runner: RunnerHandle

export const botController = {
  start() {
    runner = run(bot)
    return runner
  },

  async stop() {
    if (runner?.isRunning()) {
      await runner.stop()
    }
  },
}
