import Image from 'next/image'
import React from 'react'

interface UserProps {
  username: string
  thumbnail: string
}

const User = ({ username, thumbnail }: UserProps) => {
  return (
    <div>
      <p>{username}</p>
      <Image
        src={thumbnail}
        width={36}
        height={36}
        alt={`${username} Thumbnail`}
      />
    </div>
  )
}

export default User
