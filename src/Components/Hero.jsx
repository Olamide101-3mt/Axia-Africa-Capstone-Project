import React from "react";
import StudentImage from "../assets/StudentImage.jpg";
const Hero = () => {
  return (
    <section className="bg-[#8ECAE6] py-16">
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-10 px-6">
        <div>
          <h1 className="text-4xl font-bold text-[#023047] mb-4">
            Learn Without Limits
          </h1>
          <p className="mb-6">
            Discover thousands of courses, build new skills, and advance your
            career with our comprehensive learning platform.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-[#023047] text-white px-6 py-3 rounded-md"
            >
              Get Started
            </a>
            <a
              href="#"
              className="border border-[#023047] text-[#023047] px-6 py-3 rounded-md bg-white"
            >
              Learn More
            </a>
          </div>
        </div>
        <div>
          <img
            src={StudentImage}
            alt="A typical student Learning"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
