"use client";

import React from "react";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 rounded-2xl bg-dark/50 dark:bg-light/30 m-4 sm:m-10 flex flex-col items-center text-light">
      <h3 className="mt-10 font-medium text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Stories | Updates | Guides
      </h3>

      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Let&apos;s keep in touch! &copy; {year} Dan Chui - All rights reserved.
      </p>

      <Link
        href="/contact"
        className="mt-6 bg-light text-dark font-medium rounded px-5 py-2 hover:scale-105 hover:shadow-lg transition-all duration-200"
      >
        Contact Me
      </Link>

      <div className="flex items-center my-6">
        <a
          href={siteMetadata.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-7 h-7 mr-4"
          title="LinkedIn"
        >
          <LinkedInIcon className="hover:scale-125 transition-all duration-200" />
        </a>

        <a
          href={siteMetadata.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-7 h-7"
          title="GitHub"
        >
          <GitHubIcon className="hover:scale-125 transition-all duration-200 dark:fill-light" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
