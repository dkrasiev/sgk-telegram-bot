import { cleanEnv, str } from 'envalid'

export const env = cleanEnv(process.env, {
  BOT_TOKEN: str(),
  REDIS_URI: str({ default: '127.0.0.1:6379' }),
})
