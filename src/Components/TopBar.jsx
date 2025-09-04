import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const TopBar = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/login");
  };

  return (
    <div className="bg-[#cfeaf6] text-[#023047] px-6 py-4 shadow flex justify-between items-center">
      {/* Left side: Hamburger + Title */}
      <div className="flex items-center gap-4">
        {/* Hamburger (only shows on small screens) */}
        <button 
          onClick={toggleSidebar}
          className="text-2xl lg:hidden"
        >
          <FiMenu />
        </button>
        <h2 className="text-lg font-semibold">Dashboard</h2>
      </div>

      {/* Right side: Logout */}
      <button 
        onClick={handleLogout}
        className="bg-[#219EBC] text-white px-4 py-2 rounded hover:bg-[#8ECAE6] transition"
      >
        Logout
      </button>
    </div>
  );
};

export default TopBar;
