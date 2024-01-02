import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { CodeSlashIcon, GitHubIcon, LinkedInIcon, SunIcon } from '../Icons';
import siteMetadata from '@/src/utils/siteMetaData';

const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button>
          <SunIcon />
        </button>
      </nav>
      <div>
        <a
          href={siteMetadata.siteUrl}
          target="_blank"
          className="inline-block w-7 h-7 mr-4"
          title="Portfolio"
        >
          <CodeSlashIcon className="hover:scale-125 transition-all duration-200" />
        </a>
        <a
          href={siteMetadata.linkedin}
          target="_blank"
          className="inline-block w-7 h-7 mr-4"
          title="LinkedIn"
        >
          <LinkedInIcon className="hover:scale-125 transition-all duration-200" />
        </a>
        <a
          href={siteMetadata.github}
          target="_blank"
          className="inline-block w-7 h-7 mr-4"
          title="GitHub"
        >
          <GitHubIcon className="hover:scale-125 transition-all duration-200" />
        </a>
      </div>
    </header>
  );
};

export default Header;
