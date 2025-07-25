import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { db } from "../firebase/firebase";

import StatusSelect, {statusOptions} from "./StatusSelect";
import CategorySelect,{categoryOptions} from "./CategorySelect";
import PrioritySelect,{priorityOptions} from "./PrioritySelect";

const List = () => {
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    const fetchTask = async () => {
      const snapshot = await getDocs(collection(db, "tasks"));
      const tasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(tasks);
    };
    fetchTask();
  }, []);

  
 

 
  return (
    <div className="p-4">
      {/* Search */}
      <div className="bg-white px-4 py-2 border border-gray-300 flex items-center gap-2 text-gray-600 rounded-md w-full max-w-md mb-4">
        <FaSearch />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none bg-transparent w-full"
        />
      </div>

      {/* Table */}
      <div className="">
        <div className="min-w-[1200px]">
          {/* Table Header */}
          <div className="grid grid-cols-9 font-semibold text-sm bg-gray-100 rounded-t-md">
            {[
              "Summary",
              "Status",
              "Assignee",
              "Category",
              "Comment",
              "Priority",
              "Created",
              "Updated",
              "Reporter",
            ].map((header, i) => (
              <div
                key={i}
                className="border border-gray-300 px-4 py-3 text-center"
              >
                {header}
              </div>
            ))}
          </div>

          {/* Table Rows */}
          {tasks.map((task) => (
            <div
              key={task.id}
              className="grid grid-cols-9 text-sm bg-white even:bg-gray-50"
            >
              {/* Summary */}
              <div className="border border-gray-200 px-4 py-2 text-center text-gray-700">
                 <input
                  type="text"
                  value={task.summary || ""}
                  readOnly
                  className="w-full border border-gray-300 rounded px-2 py-1 text-sm outline-none"
                />
              </div>

              {/* Status */}
              <div className="border border-gray-200 font-bold px-4 py-2 text-center">
             {task.status}
              </div>

              {/* Assignee */}
              <div className="border border-gray-200 px-4 py-2 text-center text-gray-700">
                {task.assignee.toUpperCase()}
              </div>

              {/* Category */}
              <div className="font-bold border border-gray-200 px-4 py-2 text-center text-gray-700">
              {task.category}
              </div>

              {/* Comment */}
              <div className="border border-gray-200 px-2 py-2 text-center">
                <input
                  type="text"
                  readOnly
                  value={task.comment || ""}
                  className="w-full border border-gray-300 rounded px-2 py-1 text-sm outline-none"
                />
              </div>

              {/* Priority */}
              <div
              className="border font-bold border-gray-200 px-2 py-2 text-center">
              {task.priority}
              </div>

              {/* Created */}
              <div className="border border-gray-200 px-4 py-2 text-center text-gray-700">
                {task.createdAt?.seconds
                  ? new Date(task.createdAt.seconds * 1000).toLocaleDateString()
                  : "—"}
              </div>

              {/* Updated */}
              <div className="border border-gray-200 px-4 py-2 text-center text-gray-700">
                {task.update || "—"}
              </div>

              {/* Reporter */}
              <div className="border border-gray-200 px-4 py-2 text-center text-gray-700">
                {task.reporting.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
