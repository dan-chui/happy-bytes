import React from 'react';

const AboutCoverSection = () => {
  return (
    <section className="w-full md:h-[55vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16">
        <h2 className="font-bold capitalize text-3xl xs:text-4xl sxl:text-5xl  text-center lg:text-left">
          “Keep your eyes on the stars, and your feet on the ground.” ―Theodore
          Roosevelt
        </h2>
        <p className="w-full font-medium mt-8 text-base">
          <span>
            <p>
              Hi there - thanks for stopping by! I'm a web developer based in
              Tokyo, Japan. From a young age, I had a passion for technology in
              general, and I discovered coding more recently.
            </p>
            <br></br>
            <p>
              Since then, I have learned JavaScript and focused on building
              interactive and responsive web applications. A unique blend of
              creative and technical skills allows me to build innovative and
              user-friendly web solutions. I am excited to contribute to the
              dynamic world of web development, push boundaries, and embrace new
              challenges.
            </p>

            <br></br>
            <p>
              Please take some time to check out my
              <strong className="text-1xl underline">
                <a href="https://www.danchui.dev/" target="_blank">
                  {' '}
                  Developer Portfolio
                </a>
              </strong>{' '}
              to view my latest projects as well.
            </p>
            <br></br>
            <p>
              If you like what you find here, feel free to connect with me using
              the links provided!
            </p>
          </span>
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
