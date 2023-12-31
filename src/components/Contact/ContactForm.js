'use client';

import React, { useState } from 'react';

const FORM_ENDPOINT =
  'https://public.herotofu.com/v1/0dc28620-a792-11ee-9dec-893a2542e245';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">I'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      className="w-4/5 md:w-3/5"
    >
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm  bg-slate-200 border-0 rounded shadow outline-none "
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm  bg-slate-200 border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <textarea
          placeholder="Message"
          name="message"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm  bg-slate-200 border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <button
          className="active:bg-blue-600 hover:shadow-lg hover:scale-105 focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
