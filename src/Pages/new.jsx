// import CourseOverview from "../Components/CourseOverview";
// import DashboardModules from "../Components/DashboardModules";
// import Sidebar from "../Components/SideBar";
// import Topbar from "../Components/TopBar";

// const DashboardHome = () => {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1">
//         <Topbar />
//         <CourseOverview />
        
//         <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white shadow rounded p-6">
//             <h3 className="text-lg font-bold text-[#023047]">Enrolled Courses</h3>
//             <p className="mt-2 text-gray-600">You are enrolled in 4 courses</p>
//           </div>
//           <div className="bg-white shadow rounded p-6">
//             <h3 className="text-lg font-bold text-[#023047]">Upcoming Deadlines</h3>
//             <p className="mt-2 text-gray-600">2 assignments due this week</p>
//           </div>
//           <div className="bg-white shadow rounded p-6">
//             <h3 className="text-lg font-bold text-[#023047]">Progress</h3>
//             <p className="mt-2 text-gray-600">70% course completion</p>
//           </div>
//         </div>
//         <DashboardModules />
//       </div>
//     </div>
//   );
// };

// export default DashboardHome;


// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div className="bg-[#05283a] text-white h-screen w-64 p-6 flex flex-col">
//       <h1 className="text-2xl font-bold mb-10">EduPlatform</h1>
//       <nav className="flex flex-col gap-4">
//         <Link to="/dashboard" className="hover:text-[#8ECAE6]">Dashboard</Link>
//         <Link to="/courses" className="hover:text-[#8ECAE6]">Courses</Link>
//         <Link to="/assignments" className="hover:text-[#8ECAE6]">Assignments</Link>
//         <Link to="/profile" className="hover:text-[#8ECAE6]">Profile</Link>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

// import { useNavigate } from "react-router-dom";

// const TopBar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Clear session if you stored a token
//     localStorage.removeItem("token"); 

//     // Redirect to login
//     navigate("/login");
//   };


//   return (
//     <div className="bg-[#cfeaf6] text-[#023047] px-6 py-4 shadow flex justify-between items-center">
//       <h2 className="text-lg font-semibold">Dashboard</h2>
//       <button 
//       onClick={handleLogout}
//       className="bg-[#219EBC] text-white px-4 py-2 rounded hover:bg-[#8ECAE6] transition">
//         Logout
//       </button>
//     </div>
//   );
// };

// export default TopBar;
