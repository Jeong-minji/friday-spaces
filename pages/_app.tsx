import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { globalStyles } from 'styles/common'
import { ThemeProvider } from '@emotion/react'
import theme from 'styles/theme'
import { PageLayout } from 'components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        {globalStyles}
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
