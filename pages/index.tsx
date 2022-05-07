import type { GetServerSidePropsContext, NextPage } from 'next'
import { Helmet } from 'components'
import { PageStyle } from 'styles/content'
import { getSession, signOut } from 'next-auth/react'

const Home: NextPage = () => {
  return (
    <PageStyle>
      <Helmet title="Next App Index" description="Index Page" />
      <button type="button" data-testid="btn-logout" onClick={() => signOut()}>
        Logout
      </button>
    </PageStyle>
  )
}

export default Home

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const context = await getSession(ctx)
  if (!context) {
    return {
      redirect: {
        pernament: false,
        destination: '/signin',
      },
    }
  }
  return {
    props: {
      session: context,
    },
  }
}
