import { render, screen } from '@testing-library/react'
import Home from 'pages/index'
import { ThemeProvider } from '@emotion/react'
import theme from 'styles/theme'
import { DefaultUser, Session } from 'next-auth'
import { useSession } from 'next-auth/react'
import { UserTypes } from 'types/User'

jest.mock('next-auth/react')

describe('Home', () => {
  it('Should Render Home Page', async () => {
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
        <Home />
      </ThemeProvider>
    )

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })
})
