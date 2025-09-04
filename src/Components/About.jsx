import React from "react";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-[#219EBC] to-[#8ECAE6] text-white py-16 text-center">
      <div className="container mx-auto px-6" id="About">
        <h2 className="text-3xl font-bold mb-4">About EduPlatform</h2>
        <p className="max-w-3xl mx-auto mb-8">
          EduPlatform is a modern learning management system designed to make
          education accessible, engaging, and effective. We believe that
          everyone should have the opportunity to learn new skills and advance
          their careers, regardless of their background or location.
        </p>
        <div className="flex justify-center gap-10 flex-wrap">
          <div>
            <strong className="text-2xl">10,000+</strong>
            <p>Students</p>
          </div>
          <div>
            <strong className="text-2xl">500+</strong>
            <p>Courses</p>
          </div>
          <div>
            <strong className="text-2xl">95%</strong>
            <p>Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
