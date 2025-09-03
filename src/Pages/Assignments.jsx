import { useEffect, useState } from "react";
import Sidebar from "../Components/SideBar";
import Topbar from "../Components/TopBar";

const Assignments = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <div className="p-6">
          <h2 className="text-xl font-bold text-[#023047] mb-4">Assignments</h2>
          <ul className="space-y-3">
            {tasks.map((task) => (
              <li key={task.id} className="flex items-center justify-between bg-white p-4 shadow rounded">
                <span>{task.title}</span>
                <span
                  className={`px-3 py-1 rounded text-sm ${
                    task.completed ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {task.completed ? "Completed" : "Pending"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
