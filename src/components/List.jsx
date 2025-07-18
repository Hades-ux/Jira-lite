import { FaSearch } from "react-icons/fa"


const List = () => {

    const tasks = [
        {
            id:1,
            Summary:"Fix Bug",
            Assignee: "Davis",
            Status:"On going",
            Comment:"Not able to log  in",
            category:"Bug",
            dueDate:"20-07-2025",
            Priorty:"High",
            Created:"01-07-2025",
            Update:"",
            Report:"Manager"
        }
    ]

  return (
    <div className="w-full p-5">

        {/*  Search list */}
        <div className="border border-gray-300 rounded-sm flex items-center p-3 gap-2 w-60">
            <FaSearch/>
            <input type="text"
            placeholder="Search List..."
            className="outline-none bg-transparent "
            />
        </div>

        {/* Task Table */}
<div className=" overflow-auto mt-5">


        <table className=" border border-gray-300 w-full mt-5" >
            <thead className=" bg-gray-100">
                <tr>
                    <th className="border px-3 py-2"> Summary  </th>
                    <th className="border px-3 py-2"> Status   </th>
                    <th className="border px-3 py-2"> Assignee </th>
                    <th className="border px-3 py-2"> Category </th>
                    <th className="border px-3 py-2"> Comment  </th>
                    <th className="border px-3 py-2"> Priority </th>
                    <th className="border px-3 py-2"> Created  </th>
                    <th className="border px-3 py-2"> Update   </th>
                    <th className="border px-3 py-2"> Reporter </th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) =>(
                    <tr key = {task.id} className="bg-white">
                    
                    <td className=" border px-3 py-2">{task.Summary}</td>
                    <td className=" border px-3 py-2">{task.Status}</td>
                    <td className=" border px-3 py-2">{task.Assignee}</td>
                    <td className=" border px-3 py-2">{task.category}</td>
                    <td className=" border px-3 py-2">{task.Comment}</td>
                    <td className=" border px-3 py-2">{task.Priorty}</td>
                    <td className=" border px-3 py-2">{task.Created}</td>
                    <td className=" border px-3 py-2">{task.Update}</td>
                    <td className=" border px-3 py-2">{task.Report}</td>

                    </tr>

                ))}
            </tbody>

        </table>
        </div>

    </div>
  )
}

export default List