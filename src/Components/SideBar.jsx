import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-[#05283a] text-white h-screen w-64 p-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-10">EduPlatform</h1>
      <nav className="flex flex-col gap-4">
        <Link to="/dashboard" className="hover:text-[#8ECAE6]">Dashboard</Link>
        <Link to="/courses" className="hover:text-[#8ECAE6]">Courses</Link>
        <Link to="/assignments" className="hover:text-[#8ECAE6]">Assignments</Link>
        <Link to="/profile" className="hover:text-[#8ECAE6]">Profile</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
