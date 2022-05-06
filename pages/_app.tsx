import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { globalStyles } from 'styles/common'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      {globalStyles}
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
