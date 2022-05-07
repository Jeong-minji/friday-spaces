import type { NextPage } from 'next'
import { Helmet } from 'components'
import { PageStyle } from 'styles/content'

const Home: NextPage = () => {
  return (
    <PageStyle>
      <Helmet title="Next App Index" description="Index Page" />
      main field
    </PageStyle>
  )
}

export default Home
