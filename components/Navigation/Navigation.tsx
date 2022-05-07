import User from 'components/common/User/User'
import { useSession } from 'next-auth/react'
import { NavigationStyle } from './Style'

const Navigation = () => {
  const { data } = useSession()
  return (
    <NavigationStyle data-testid="navigation">
      {data ? (
        <User username={data?.user?.name} thumbnail={data?.user?.avatar_url} />
      ) : (
        <p>Not LoggedIn...</p>
      )}
    </NavigationStyle>
  )
}

export default Navigation
