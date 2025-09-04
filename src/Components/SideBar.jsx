import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Overlay when sidebar is open on mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#05283a] text-white p-6 flex flex-col z-30 transform
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:relative lg:z-auto`}
      >
        <h1 className="text-2xl font-bold mb-10">EduPlatform</h1>
        <nav className="flex flex-col gap-4">
          <Link to="/dashboard" className="hover:text-[#8ECAE6]">Dashboard</Link>
          <Link to="/courses" className="hover:text-[#8ECAE6]">Courses</Link>
          <Link to="/assignments" className="hover:text-[#8ECAE6]">Assignments</Link>
          <Link to="/profile" className="hover:text-[#8ECAE6]">Profile</Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
