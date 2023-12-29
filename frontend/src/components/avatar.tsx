'use client'

import Image from 'next/image'
import { imageLoader } from '../lib/images'

export default function Avatar({ author }) {
  const isAuthorHaveFullName = author?.node?.firstName && author?.node?.lastName
  const name = isAuthorHaveFullName
    ? `${author.node.firstName} ${author.node.lastName}`
    : author.node.name || null

  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        <Image
          loader={imageLoader}
          src={author.node.avatar.url}
          fill={true}
          style={{ objectFit: 'cover' }}
          sizes='(max-width: 640px) 100vw, 640px'
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
