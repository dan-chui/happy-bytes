import React from "react";

const AboutCoverSection = () => {
  return (
    <section className="w-full border-b-2 border-solid border-dark dark:border-light flex flex-col items-center justify-center text-dark dark:text-light">
      <div className="w-full xl:w-3/4 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16">
        <h2 className="font-bold capitalize text-2xl xs:text-3xl sxl:text-4xl  text-center lg:text-left mb-4">
          “Simplicity is the ultimate sophistication.” ― Leonardo da Vinci
        </h2>
        <p className="font-medium mt-4 text-base">
          <span>
            <p>
              Hi, I'm Dan. This blog documents my transition into IT, security,
              and technology risk, building on a background in financial risk
              and governance. Here you’ll find a mix of hands-on labs,
              system-level observations, and practical insights across identity,
              access, security operations, and risk management. Rather than
              focusing on tools alone, I aim to understand how technology,
              security, and business risk intersect in real-world environments.
              Think of this as a practical learning journal - bridging
              structured labs with real-world application, and sharing insights
              that are useful for both IT and security roles.
            </p>
            {/* <br></br>
            <p>
              Ever since, I have focused on JavaScript and building interactive
              and responsive web applications. I am excited to contribute to the
              dynamic world of web development, push boundaries, and embrace new
              challenges.
            </p> */}

            <br></br>
            {/* <p>
              Please take some time to check out my{" "}
              <strong className="text-xl underline">
                <a href="https://www.danchui.dev/" target="_blank">
                  {" "}
                  Portfolio Website
                </a>
              </strong>{" "}
              to view my latest projects as well.
            </p>
            <br></br> */}
            <p>
              If you like what you find, feel free to connect with me using the
              provided links!
            </p>
          </span>
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
