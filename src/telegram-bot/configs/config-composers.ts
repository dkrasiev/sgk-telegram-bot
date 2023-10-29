import { commandNotFoundComposer } from '../composers/command-not-found.composer'
import { logComposer } from '../composers/log.composer'
import { scheduleComposer } from '../composers/schedule.composer'
import { startComposer } from '../composers/start.composer'
import { BotConfig } from '../types/bot-config'

const COMPOSERS = [
  logComposer,
  startComposer,
  scheduleComposer,
  commandNotFoundComposer,
]

export const configComposers: BotConfig = (bot) => {
  COMPOSERS.forEach((c) => {
    bot.use(c)
  })
}
