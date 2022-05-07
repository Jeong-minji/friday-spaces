import { Navigation } from 'components'
import { ReactNode } from 'react'
import { PageLayoutStyle } from './Style'

interface PageLayoutProps {
  children: ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <PageLayoutStyle>
      <Navigation />
      {children}
    </PageLayoutStyle>
  )
}

export default PageLayout
