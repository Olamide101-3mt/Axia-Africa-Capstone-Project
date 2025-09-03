import { useEffect, useState } from "react";
import Sidebar from "../Components/SideBar";
import Topbar from "../Components/TopBar";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <div className="p-6 flex justify-center">
          {user && (
            <div className="bg-white p-6 shadow rounded w-full max-w-md text-center">
              <img
                src={user.picture.large}
                alt={user.name.first}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-[#023047]">
                {user.name.first} {user.name.last}
              </h3>
              <p className="text-gray-600">{user.email}</p>
              <button className="mt-4 bg-[#219EBC] text-white px-4 py-2 rounded hover:bg-[#8ECAE6]">
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
