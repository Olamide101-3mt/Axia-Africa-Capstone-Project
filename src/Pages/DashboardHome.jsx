import { useState } from "react";
import CourseOverview from "../Components/CourseOverview";
import DashboardModules from "../Components/DashboardModules";
import Sidebar from "../Components/SideBar";
import TopBar from "../Components/TopBar";

const DashboardHome = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 flex flex-col">
        <TopBar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <CourseOverview />

        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded p-6">
            <h3 className="text-lg font-bold text-[#023047]">Enrolled Courses</h3>
            <p className="mt-2 text-gray-600">You are enrolled in 4 courses</p>
          </div>
          <div className="bg-white shadow rounded p-6">
            <h3 className="text-lg font-bold text-[#023047]">Upcoming Deadlines</h3>
            <p className="mt-2 text-gray-600">2 assignments due this week</p>
          </div>
          <div className="bg-white shadow rounded p-6">
            <h3 className="text-lg font-bold text-[#023047]">Progress</h3>
            <p className="mt-2 text-gray-600">70% course completion</p>
          </div>
        </div>

        <DashboardModules />
      </div>
    </div>
  );
};

export default DashboardHome;
