'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { CodeSlashIcon, GitHubIcon, LinkedInIcon } from '../Icons';

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <footer className="mt-16 rounded-2xl bg-dark/50 m-10 flex flex-col items-center text-light">
      <h3 className="mt-16 font-medium text-center capitalize text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="mt-5 px-4 text-center w-3/5 font-light text-base">
        Subscribe to learn about new technology and updates. © Dan Chui. All
        rights reserved.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 min-w-[384px] flex items-stretch bg-light p-2 rounded mx-4"
      >
        <input
          type="email"
          placeholder="Email address"
          {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
          className="w-full bg-transparent pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
        />

        <input
          type="submit"
          className="bg-dark text-light cursor-pointer font-medium rounded px-5 py-1"
        />
      </form>

      <div className="fkex items-center mt-8">
        <a
          href="https://www.danchui.dev/"
          className="inline-block w-6 h-6 mr-4"
        >
          <CodeSlashIcon className="hover:scale-125 transition-all duration-200" />
        </a>
        <a
          href="https://www.linkedin.com/in/danchui/"
          className="inline-block w-6 h-6 mr-4"
        >
          <LinkedInIcon className="hover:scale-125 transition-all duration-200" />
        </a>
        <a
          href="https://github.com/dan-chui"
          className="inline-block w-6 h-6 mr-4"
        >
          <GitHubIcon className="hover:scale-125 transition-all duration-200" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
