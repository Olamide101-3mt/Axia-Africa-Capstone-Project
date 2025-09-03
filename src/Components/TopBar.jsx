import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session if you stored a token
    localStorage.removeItem("token"); 

    // Redirect to login
    navigate("/login");
  };


  return (
    <div className="bg-[#cfeaf6] text-[#023047] px-6 py-4 shadow flex justify-between items-center">
      <h2 className="text-lg font-semibold">Dashboard</h2>
      <button 
      onClick={handleLogout}
      className="bg-[#219EBC] text-white px-4 py-2 rounded hover:bg-[#8ECAE6] transition">
        Logout
      </button>
    </div>
  );
};

export default TopBar;
