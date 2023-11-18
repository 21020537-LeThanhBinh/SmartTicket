'use client';

import Image from "next/image";

interface AvatarProps {
  src: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, size = 30 }) => {
  return (
    <Image
      height={size}
      width={size}
      alt="Avatar"
      src={src || '/images/placeholder.svg'}
      className="rounded-full aspect-square object-cover"
    />
  );
}

export default Avatar;