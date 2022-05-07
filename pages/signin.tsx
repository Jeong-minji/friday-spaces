import { signIn } from 'next-auth/react'
import { PageStyle } from 'styles/content'

const signin = () => {
  return (
    <PageStyle>
      <button type="button" data-testid="btn-login" onClick={() => signIn()}>
        Login
      </button>
    </PageStyle>
  )
}

export default signin
