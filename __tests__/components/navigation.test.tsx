import { Navigation } from 'components'
import { ThemeProvider } from '@emotion/react'
import theme from 'styles/theme'
import { render, screen } from '@testing-library/react'

describe('Navigation', () => {
  it('Should Navigation Render Success', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    )
    const navigationText = screen.getByText(/Navigation/i)
    expect(navigationText).toBeInTheDocument()
  })
})
