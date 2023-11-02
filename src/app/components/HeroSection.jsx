"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="col-span-5 place-self-center mt-4 lg:mt-0 lg:ms-3">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
              alt="Hero Image"
            />
          </div>
        </div>
        <div className="col-span-7 place-self-center text-center lg:text-left lg:place-items-start lg:ms-6">
          <h1 className=" text-3xl font-extrabold text-white mb-6">
            <span className="text-transparent lg:text-5xl text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              I&apos;m Racha OuldBabaali,
            </span>{" "}
            <br />
            <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-white to-gray-300">
              <TypeAnimation
                cursor={false}
                sequence={[
                  "Full Stack Developer",
                  1000,
                  "Frontend Developer",
                  3000,
                  "Backend Developer",
                  1000,
                ]}
                wrapper="span"
                repeat={Infinity}
                spead={100}
              />
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-primary mb-6">
            I&apos;m a software developer! I can help you build a product,
            feature or website Look through some of my work and experience! If
            you like what you see and have a project you need coded, don&apos;t
            hestiate to contact me.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://docs.google.com/document/d/1mzb1FoL5wEXlQbIPiqbku_vLNVnZF9gw48dVNhwXLjQ/edit?usp=sharing"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full my-3 sm:m-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
