import type { UserTypes } from 'types/User'
import type { DefaultUser } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user?: DefaultUser & UserTypes
  }
}
