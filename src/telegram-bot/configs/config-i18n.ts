import { useFluent } from '@grammyjs/fluent'
import { Fluent } from '@moebius/fluent'
import path from 'path'

import { BotConfig } from '../types/bot-config'

const fluent = new Fluent()

await fluent.addTranslation({
  locales: 'ru',
  filePath: path.resolve(__dirname, '../locales/ru.ftl'),
})

export const configI18n: BotConfig = (bot) => {
  bot.use(
    useFluent({
      fluent,
    }),
  )
}
