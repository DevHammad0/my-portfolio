import Image from "next/image";
import React from "react";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "GitHub" },
];

const AboutSection = () => {
  return (
    <section id="about-section" className="p-6">
      <div className="my-12 pb-12">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex items-start justify-center mt-8">
          <div className="w-1/2 text-justify px-6">
            <h1 className="text-center text-2xl font-bold mb-6">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Muhammad Hammad and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>, and
              <span className="font-bold">{" self-motivated"}</span>{" "}
               front end developer.
            </p>
            <br />
            <p>
              I am currently an undergraduate student, doing BS in Computer
              Science. I joined PIAIC on July, 2023 and have been working in the
              field ever since.
            </p>
            <br />
            <p>
              I am also a professional table tennis player. I am always seeking
              new experiences and love to keep myself engaged and learning new
              things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-700">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="w-1/2 text-left px-6">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap justify-center">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image src="aboutsection.svg" className="m-auto" alt="" width={300} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
