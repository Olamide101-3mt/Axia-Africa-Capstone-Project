import React from "react";

const DashboardModules = () => {
  const modules = [
    {
      id: 1,
      title: "Web Development Essentials",
      image: "https://via.placeholder.com/150x100.png?text=Web+Dev",
      progress: 65,
      link: "#",
    },
    {
      id: 2,
      title: "Python Programming",
      image: "https://via.placeholder.com/150x100.png?text=Python",
      progress: 40,
      link: "#",
    },
    {
      id: 3,
      title: "Data Science Basics",
      image: "https://via.placeholder.com/150x100.png?text=Data+Science",
      progress: 25,
      link: "#",
    },
    {
      id: 4,
      title: "Software Engineering",
      image: "https://via.placeholder.com/150x100.png?text=Software+Eng",
      progress: 80,
      link: "#",
    },
    {
      id: 5,
      title: "UI/UX Design",
      image: "https://via.placeholder.com/150x100.png?text=UI%2FUX",
      progress: 55,
      link: "#",
    },
  ];

  return (
    <div className="p-6 bg-[#cfeaf6] rounded-xl shadow-md mt-6">
      <h2 className="text-2xl font-bold text-[#05283a] mb-6">
        Enrolled Modules
      </h2>

      {/* 3-column grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <div
            key={module.id}
            className="flex flex-col items-center bg-white shadow-lg rounded-xl p-4 hover:shadow-xl transition"
          >
            <img
              src={module.image}
              alt={module.title}
              className="w-full h-32 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold text-[#023047] mb-2 text-center">
              {module.title}
            </h3>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div
                className="h-3 rounded-full bg-[#219EBC]"
                style={{ width: `${module.progress}%` }}
              ></div>
            </div>

            <p className="text-sm text-gray-600 mb-3">
              {module.progress}% Completed
            </p>

            <a
              href={module.link}
              className="text-sm font-medium text-white bg-[#219EBC] px-4 py-2 rounded-lg hover:bg-[#023047] transition"
            >
              Continue Learning →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardModules;
