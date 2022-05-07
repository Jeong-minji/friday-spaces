import type { NextPage } from 'next'
import { Helmet } from 'components'
import { PageStyle } from 'styles/content'
import { signIn, signOut, useSession } from 'next-auth/react'

const Home: NextPage = () => {
  const { data } = useSession()
  return (
    <PageStyle>
      <Helmet title="Next App Index" description="Index Page" />
      {data ? (
        <button
          type="button"
          data-testid="btn-logout"
          onClick={() => signOut()}
        >
          Logout
        </button>
      ) : (
        <button type="button" data-testid="btn-login" onClick={() => signIn()}>
          Login
        </button>
      )}
    </PageStyle>
  )
}

export default Home
