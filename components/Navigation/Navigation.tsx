import User from 'components/common/User/User'
import { useSession } from 'next-auth/react'
import { NavigationStyle } from './Style'

const Navigation = () => {
  const { data } = useSession()
  return (
    <NavigationStyle data-testid="navigation">
      <User username={data?.user?.name} thumbnail={data?.user?.avatar_url} />
    </NavigationStyle>
  )
}

export default Navigation
