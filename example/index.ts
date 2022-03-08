import { User } from './models'
import { AuthConfig, AuthContract } from '@ioc:Adonis/Addons/Auth'

export const config: AuthConfig = {
  guard: 'session',
  guards: {
    session: {
      driver: 'session',
      provider: {
        driver: 'lucid',
        model: async () => User,
        identifierKey: 'id',
        uids: ['email'],
      },
    },
    basic: {
      driver: 'basic',
      provider: {
        driver: 'lucid',
        model: async () => User,
        identifierKey: 'id',
        uids: ['email'],
      },
    },
    cognito: {
      driver: 'cognito',
      provider: {
        driver: 'lucid',
        model: async () => User,
        identifierKey: 'id',
        uids: ['email'],
      },
    },
    api: {
      driver: 'oat',
      tokenProvider: {
        driver: 'database',
        table: 'api_tokens',
      },
      provider: {
        driver: 'lucid',
        model: async () => User,
        identifierKey: 'id',
        uids: ['email'],
      },
    },
    sessionDb: {
      driver: 'session',
      provider: {
        driver: 'database',
        usersTable: 'users',
        identifierKey: 'id',
        uids: ['email'],
      },
    },
  },
}

const a = {} as AuthContract
a.loginViaId(1)
// a.use('basic').
