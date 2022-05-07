import Image from 'next/image'
import GifImage from 'assets/images/friday.gif'
import { SignInImageStyle } from './Style'

const SignInImage = () => {
  return (
    <SignInImageStyle>
      <Image src={GifImage} layout="fill" alt="Login!" />
    </SignInImageStyle>
  )
}

export default SignInImage
