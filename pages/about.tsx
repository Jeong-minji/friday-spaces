import { Helmet } from 'components'
import type { NextPage } from 'next'
import Link from 'next/link'

const About: NextPage = () => {
  return (
    <div>
      <Helmet title="Next App About" description="About Page" />

      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>

      <main>
        <h1>About Page</h1>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  )
}

export default About
