import { createLogger, format, transports } from 'winston'

const logger = createLogger({
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs', maxsize: 100 * 1024 ** 2 }),
  ],
  format: format.combine(format.timestamp(), format.prettyPrint()),
})

export default logger
