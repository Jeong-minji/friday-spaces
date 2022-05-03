import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from 'pages/index'
import { useSession } from 'next-auth/react'
import { Session } from 'next-auth'

jest.mock('next-auth/react')

describe('Home', () => {
  it('renders a heading', async () => {
    const mockSession: Session = {
      expires: new Date(Date.now() + 2 * 86400).toISOString(),
      user: {
        email: 'Genie@GenieWorld.com',
        name: 'Genie',
        image: 'https://avatars.githubusercontent.com/u/85790271?v=4',
      },
    }
    ;(useSession as jest.Mock).mockReturnValueOnce([
      mockSession,
      'authenticated',
    ])

    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Home Page/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
