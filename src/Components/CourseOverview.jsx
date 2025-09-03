import React from "react";

const CourseOverview = () => {
  return (
    <div className="w-full flex justify-center px-6 mt-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#023047] via-[#219EBC] to-[#8ECAE6] p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Software Development - Cohort 8
          </h2>
          <p className="text-[#cfeaf6] mt-2">
            Welcome to your learning journey 🚀
          </p>
        </div>

        {/* Body Section */}
        <div className="p-6 bg-[#f9fcfe]">
          <h3 className="text-xl font-semibold text-[#05283a] mb-2">
            About this Program
          </h3>
          <p className="text-gray-700 leading-relaxed">
            This program is designed to help you build strong foundations in
            software engineering. You’ll learn modern web technologies, best
            practices in coding, and real-world project building. By the end of
            this cohort, you’ll have the skills and confidence to create full
            applications and collaborate effectively in a professional setting.
          </p>
        </div>

        {/* Footer (Optional stats or call to action) */}
        <div className="flex justify-between items-center bg-[#9fc1d2] px-6 py-4">
          <span className="text-[#05283a] font-medium">
            🎯 Duration: 6 Months
          </span>
          <button className="bg-[#023047] text-white px-4 py-2 rounded-lg hover:bg-[#05283a] transition">
            View Curriculum
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
