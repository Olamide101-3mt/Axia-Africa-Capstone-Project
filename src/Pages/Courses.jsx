import { useEffect, useState } from "react";
import Sidebar from "../Components/SideBar";
import Topbar from "../Components/TopBar";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white shadow rounded p-4">
              <img src={course.image} alt={course.title} className="h-32 mx-auto" />
              <h3 className="mt-2 text-[#023047] font-semibold">{course.title}</h3>
              <p className="text-sm text-gray-600 truncate">{course.description}</p>
              <button className="mt-3 w-full bg-[#219EBC] text-white py-2 rounded hover:bg-[#8ECAE6]">
                Enroll
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
