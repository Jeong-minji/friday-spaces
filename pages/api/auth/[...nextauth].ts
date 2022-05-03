import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { UserTypes } from 'types/User'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'repo read:user user:email',
        },
      },
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  callbacks: {
    async jwt({ token, user, profile }) {
      if (user) {
        token.user = {
          ...user,
          ...profile,
        }
      }
      return token
    },
    async session({ session, token }) {
      const users = token.user as UserTypes
      session = {
        ...session,
        user: users,
      }
      return session
    },
    async redirect() {
      return '/'
    },
  },
})
