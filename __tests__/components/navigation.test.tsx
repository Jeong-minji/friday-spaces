import { Navigation } from 'components'
import { ThemeProvider } from '@emotion/react'
import theme from 'styles/theme'
import { render, screen } from '@testing-library/react'
import { DefaultUser, Session } from 'next-auth'
import { useSession } from 'next-auth/react'
import { UserTypes } from 'types/User'

jest.mock('next-auth/react')

describe('Navigation', () => {
  it('Should Navigation Render Success', async () => {
    const mockSession: Session = {
      expires: new Date(Date.now() + 2 * 86400).toISOString(),
      user: {
        id: 85790271,
      } as DefaultUser & UserTypes,
    }
    ;(useSession as jest.Mock).mockReturnValueOnce([
      mockSession,
      'authenticated',
    ])

    render(
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    )
    const navigationText = screen.getByTestId(/navigation/i)
    expect(navigationText).toBeInTheDocument()
  })
})
