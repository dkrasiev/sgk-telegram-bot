// for tsyring
// babel can replace it
import 'reflect-metadata'
import './infrastructure/config/container/setup'

import { env } from './infrastructure/config/env'
import logger from './infrastructure/logger/logger'
import { bot, botController } from './telegram-bot/bot'

logger.info('starting...')
logger.info(`username: @${bot.botInfo.username}`)
logger.info(`redis: ${env.REDIS_URI}`)

botController.start()

const stop = async () => {
  logger.info('stopping...')
  await botController.stop()
  logger.info('stopped')
}

process.once('SIGINT', stop)
process.once('SIGTERM', stop)
