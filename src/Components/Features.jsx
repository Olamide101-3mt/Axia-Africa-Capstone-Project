import React from "react";

const Features = () => {
  const features = [
    {
      title: "📘 Expert Courses",
      desc: "Learn from industry experts with courses designed for real-world application",
    },
    {
      title: "⏰ Flexible Learning",
      desc: "Study at your own pace with 24/7 access to course materials and resources",
    },
    {
      title: "✅ Certifications",
      desc: "Earn recognized certificates upon course completion to boost your career",
    },
    {
      title: "👥 Community",
      desc: "Connect with fellow learners and instructors in our vibrant community",
    },
  ];

  return (
    <section className="py-16 text-center" id="Features">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#023047]">Why Choose NextGen Academy?</h2>
        <p className="mt-2 text-gray-600">
          We provide everything you need to succeed in your learning journey
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-[#219EBC] font-bold mb-2">{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
