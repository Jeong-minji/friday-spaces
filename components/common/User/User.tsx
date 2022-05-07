import Image from 'next/image'
import { UserStyle } from './Style'

interface UserProps {
  thumbnail?: string
  username?: string
}

const User = ({
  thumbnail = 'http://via.placeholder.com/64x64',
  username = 'Unnamed',
}: UserProps) => {
  return (
    <UserStyle data-testid="user-component">
      <div className="thumbnail">
        <Image
          src={thumbnail}
          alt={`${username} Thumbnail`}
          width={64}
          height={64}
        />
      </div>
      <div className="user-info">
        <span className="user-info__welcome">Welcome back,</span>
        <p className="user-info__username">{username}</p>
      </div>
    </UserStyle>
  )
}

export default User
