import { User } from '../example/models'

declare module '@ioc:Adonis/Addons/Auth' {
  interface ProvidersList {
    lucid: {
      implementation: LucidProviderContract<typeof User>
      config: LucidProviderConfig<typeof User>
    }
    database: {
      config: DatabaseProviderConfig
      implementation: DatabaseProviderContract<DatabaseProviderRow>
    }
  }

  interface GuardsList {
    session: {
      implementation: SessionGuardContract<'lucid', 'session'>
      config: SessionGuardConfig<'lucid'>
    }
    api: {
      implementation: OATGuardContract<'lucid', 'session'>
      config: OATGuardConfig<'lucid'>
    }
    sessionDb: {
      implementation: SessionGuardContract<'database', 'sessionDb'>
      config: SessionGuardConfig<'database'>
    }
    basic: {
      implementation: BasicAuthGuardContract<'lucid', 'basic'>
      config: BasicAuthGuardConfig<'lucid'>
    }
    cognito: {
      implementation: CognitoGuardContract<'lucid', 'cognito'>
      config: CognitoGuardConfig<'lucid'>
    }
  }
}

declare module '@ioc:Adonis/Core/Hash' {
  interface HashersList {
    bcrypt: HashDrivers['bcrypt']
  }
}
