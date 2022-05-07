import { signIn } from 'next-auth/react'
import SignInImage from './SignInImage'
import { SignInStyle } from './Style'

const SignInContent = () => {
  return (
    <SignInStyle>
      <button type="button" data-testid="btn-login" onClick={() => signIn()}>
        Login
      </button>
      <SignInImage />
    </SignInStyle>
  )
}

export default SignInContent
