import { useEffect, useState } from "react";
import Sidebar from "../Components/SideBar";
import Topbar from "../Components/TopBar";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch courses");
        return res.json();
      })
      .then((data) => setCourses(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Topbar />

        <div className="p-6">
          <h2 className="text-2xl font-bold text-[#023047] mb-6">
            Enrolled Courses
          </h2>

          {loading && <p className="text-gray-600">Loading courses...</p>}
          {error && (
            <p className="text-red-500">Error: {error}. Please try again later.</p>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white shadow rounded p-4 flex flex-col"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-32 mx-auto object-contain"
                  />
                  <h3 className="mt-2 text-[#023047] font-semibold line-clamp-1">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {course.description}
                  </p>
                  <button className="mt-auto bg-[#219EBC] text-white py-2 rounded hover:bg-[#8ECAE6] transition">
                    Enroll
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
