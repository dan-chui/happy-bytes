import Link from 'next/link';
import React from 'react';
import profileImg from '@/public/profile-img.png';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4">
        <Image
          src={profileImg}
          alt="Dan Chui"
          className="w-full h-auto rounded-full"
        />
      </div>
      <span className="font-bold text-xl">Happy Bytes</span>
    </Link>
  );
};

export default Logo;
