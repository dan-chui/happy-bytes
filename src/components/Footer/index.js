'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { CodeSquareIcon, GitHubIcon, LinkedInIcon } from '../Icons';
import siteMetadata from '@/src/utils/siteMetaData';

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <footer className="mt-10 rounded-2xl bg-dark/50 dark:bg-light/30 m-4 sm:m-10 flex flex-col items-center text-light ">
      <h3 className="mt-10 font-medium text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Please Subscribe to stay updated! © Dan Chui. All rights reserved.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light p-1 sm:p-2 rounded mx-4"
      >
        <input
          type="email"
          placeholder="Email"
          {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
          className="w-full bg-transparent pl-2 sm:pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1  text-base xs:text-sm xxs:text-xs"
        />

        <input
          type="submit"
          className="bg-dark text-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1 text-base xs:text-sm xxs:text-xs"
        />
      </form>

      <div className="flex items-center my-6 ml-6">
        <a
          href={siteMetadata.siteUrl}
          target="_blank"
          className="inline-block w-7 h-7 mr-4"
          title="Portfolio"
        >
          <CodeSquareIcon className="hover:scale-125 transition-all duration-200 dark:fill-light" />
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
          <GitHubIcon className="hover:scale-125 transition-all duration-200 dark:fill-light" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
