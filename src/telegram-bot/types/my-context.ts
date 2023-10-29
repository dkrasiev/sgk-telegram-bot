import { FluentContextFlavor } from '@grammyjs/fluent'
import { Context, SessionFlavor } from 'grammy'

import { MySession } from './my-session'

export type MyContext = Context & SessionFlavor<MySession> & FluentContextFlavor
