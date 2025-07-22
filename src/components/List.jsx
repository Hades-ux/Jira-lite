import { FaSearch } from "react-icons/fa";

const List = () => {
 
 const tasks = [
    {
      id: 1,
      Summary: "Fix Bug",
      Assignee: "Davis",
      Status: "On going",
      Comment: "Not able to log in",
      category: "Bug",
      dueDate: "20-07-2025",
      Priorty: "High",
      Created: "01-07-2025",
      Update: "",
      Report: "Manager",
    },
    {
      id: 2,
      Summary: "Design UI",
      Assignee: "Alex",
      Status: "Pending",
      Comment: "Waiting for approval",
      category: "Design",
      dueDate: "22-07-2025",
      Priorty: "Medium",
      Created: "03-07-2025",
      Update: "10-07-2025",
      Report: "Lead",
    },
  ];

  return (
    <>
    {/* Search */}
      <div className="bg-white p-4 border border-gray-200 flex  items-center gap-2 text-gray-500 rounded w-70 text-xl">
        <FaSearch/>
        <input type="text"
        placeholder="Search..."
        className="outline-none bg-transparent text-xl w-50" />
      </div>
    {/* Table */}
    <div className="border border-gray-300 mt-5 grid grid-cols-9 font-semibold text-sm bg-gray-200 rounded-t-xl">
      <div className="border-r border-gray-300 p-4 text-center">Summary</div>
      <div className="border-r border-gray-300 p-4 text-center">Status</div>
      <div className="border-r border-gray-300 p-4 text-center">Assignee</div>
      <div className="border-r border-gray-300 p-4 text-center">Category</div>
      <div className="border-r border-gray-300 p-4 text-center">Comment</div>
      <div className="border-r border-gray-300 p-4 text-center">Priority</div>
      <div className="border-r border-gray-300 p-4 text-center">Created</div>
      <div className="border-r border-gray-300 p-4 text-center">Updated</div>
      <div className=" border-gray-300 p-4 text-center rounded-t-xl">Reporter</div>
    </div>
    {/* Task Row */}
    {tasks.map((tasks)=>(
      <div className=" border-gray-300 grid grid-cols-9 font-semibold text-sm bg-white">

        <div className="border-r border-l border-b border-gray-300 p-4 text-center text-gray-500">{tasks.Summary}</div>
        <div className="border-r border-b border-gray-300 p-4 text-center text-gray-500">{tasks.Status}</div>
        <div className="border-r border-b border-gray-300 p-4 text-center text-gray-500">{tasks.Assignee}</div>
        <div className="border-r border-b border-gray-300 p-4 text-center text-gray-500">{tasks.category}</div>

        {/* Comment */}
        <div 
        onDoubleClick={""}
        className="border-r border-b border-gray-300 p-4 text-center text-gray-500"
        >
        <input
          type="text"
          value={tasks.Comment}
          onChange={(e) => setComment(tasks.id,"Comment",e.target.value)}
          className="w-full h-full outline-none bg-transparent text-center "
        /></div>




          {/* Priority */}
        <div className="border-r border-b border-gray-300 p-4 text-center">
          <select
  value={tasks.Priorty}
  onChange={(e) =>
    handleSelectChange(tasks.id, "Priorty", e.target.value)
  }
  className={`w-full h-full text-sm font-semibold text-center px-2 py-1 rounded outline-none transition
    ${
      tasks.Priorty === "Low"
        ? " text-green-700"
        : tasks.Priorty === "Medium"
        ? " text-yellow-700"
        : tasks.Priorty === "High"
        ? " text-orange-700"
        : tasks.Priorty === "Urgent"
        ? " text-red-700"
        : ""
    }
  `}
>
  <option value="Low" className="text-green-700">Low</option>
  <option value="Medium" className="text-yellow-700" >Medium</option>
  <option value="High" className="text-orange-700" >High</option>
  <option value="Urgent" className="text-red-700" >Urgent</option>
</select>

          </div>
        <div className="border-r border-b border-gray-300 p-4 text-center text-gray-500">{tasks.Created}</div>
        <div className="border-r border-b border-gray-300 p-4 text-center text-gray-500">{tasks.Update}</div>
        <div className="border-r border-b border-gray-300 p-4 text-center text-gray-500">{tasks.Report}</div>
      </div>
      ))}

    </>
      
  );
};

export default List;