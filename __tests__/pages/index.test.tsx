import { render, screen } from '@testing-library/react'
import Home from 'pages/index'
import { ThemeProvider } from '@emotion/react'
import theme from 'styles/theme'

jest.mock('next-auth/react')

describe('Home', () => {
  it('Should Render Home Page', async () => {
    // const mockSession: Session = {
    //   expires: new Date(Date.now() + 2 * 86400).toISOString(),
    //   user: {
    //     email: 'Genie@GenieWorld.com',
    //     name: 'Genie',
    //     image: 'https://avatars.githubusercontent.com/u/85790271?v=4',
    //   },
    // }
    // ;(useSession as jest.Mock).mockReturnValueOnce([
    //   mockSession,
    //   'authenticated',
    // ])

    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    )

    const heading = screen.getByText(/main field/i)

    expect(heading).toBeInTheDocument()
  })
})
