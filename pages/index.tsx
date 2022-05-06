import type { NextPage } from 'next'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import { Helmet } from 'components'

const Home: NextPage = () => {
  const { data } = useSession()
  return (
    <div style={{ height: '100%' }}>
      <Helmet title="Next App Index" description="Index Page" />

      <nav>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>

      <main>
        <h1>Home Page</h1>
        {data?.user ? (
          <>
            <p>{data.user.name}</p>
            <Image
              style={{
                borderRadius: '50%',
              }}
              src={data.user.image || ''}
              width={96}
              height={96}
              alt={`${data.user.name} Thumbnail`}
            />
            <p>Company : {data.user.company}</p>
            <p>Email : {data.user.email}</p>
            <p>Location : {data.user.location}</p>
            <p>Public Repos : {data.user.public_repos}</p>
            <p>
              Github Url:
              <a
                style={{ color: 'teal' }}
                href={data.user.html_url}
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </p>
            <button
              type="button"
              className="btn-auth"
              onClick={() => signOut()}
            >
              Github Logout
            </button>
          </>
        ) : (
          <button type="button" className="btn-auth" onClick={() => signIn()}>
            Github Login
          </button>
        )}
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  )
}

export default Home
