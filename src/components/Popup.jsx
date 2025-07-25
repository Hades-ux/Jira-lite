import { useState } from "react";
import { FaX, FaCalendar } from 'react-icons/fa6';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import StatusSelect, {statusOptions} from "./StatusSelect";
import CategorySelect, {categoryOptions} from "./CategorySelect";
import PrioritySelect, {priorityOptions} from "./PrioritySelect";
import { addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import AssigneeSelect from "./AssigneeSelect";
import ReportingSelect from "./ReportingSelect";

const Popup = ({isOpen, onClose}) => {

  
  const [status, setStatus] = useState("")
  const [summary, setSummary] = useState("")
  const [category, setCategory] = useState("");
  const [description,setDescription] = useState("")
  const [priority, setPriority] = useState("")
  const [assignee, setAssignee] = useState("")
  const [reporting,setReporting] = useState("")
  const [date, setDate] = useState(null)

  
  
   const createTask = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "tasks"), {
        status,
        summary,
        comment,
        description,
        priority,
        assignee,
        reporting,
        category,
        role,
        dueDate: date,
        createdAt: new Date(),
      });
      setopen(false);
      toast.success("Task created successfully!");
    } catch (error) {
      console.error("Error creating task:", error);
      toast.error("Failed to create task.");
    }
  };

    if(!isOpen) return null;
  return (
    <div className='fixed inset-y-10 bg-white bg-opacity-40 w-[60rem] h-[45rem] rounded-md shadow-2xl z-50 border-2 border-gray-300'>

        <div className='w-full p-3 flex items-center justify-between border-b-2 border-gray-300'>
          <h1 className='text-2xl font-semibold text-gray-600'>Create Task</h1>
            <button 
            onClick={onClose}
            className=' text-gray-600 hover:text-red-600 text-xl cursor-pointer'>
                <FaX className='border border-gray-300 p-0.5 rounded-sm hover:border-red-600'/>
                </button>
        </div>
               <div className="p-4 overflow-y-scroll max-h-[40rem]">
               <form onSubmit={createTask}>

                {/* Status */}
                <div className="w-30 h-7 text-center">
                <label className="block text-start mb-1 text-sm font-medium">Status</label>
                <StatusSelect
                value={statusOptions.find((opt) => opt.value === status)}
                onChange={(selectedOption) => setStatus(selectedOption.value)}
                />
                </div>

                {/* Summary */}
                <div className="flex flex-col gap-1 mt-10">
                 <label htmlFor="summary" className="block mb-1 text-sm font-medium">Summary</label>
                  <input 
                    id="summary"
                    type="text"
                    value={summary}
                    required
                    onChange={(e) => setSummary(e.target.value)}
                    placeholder="Enter Summary..."
                    className="w-full border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>


                {/* Category */}

                <div className="w-40 h-7 mt-2">
                 <label className="block text-start mb-1 text-sm font-medium">Category</label>
                   <CategorySelect
                     value={categoryOptions.find(opt => opt.value === category)}
                     onChange={(selected) => setCategory(selected.value)}
                   />
                 </div>

                {/* Description*/}
                <div className="flex flex-col mt-10">
                  <label htmlFor="Description" className="block text-start mb-1 text-sm font-medium">Description</label>
                 <textarea 
                 name="Description"
                 rows={10}
                 value={description}
                 onChange={(e)=>setDescription(e.target.value)}
                 placeholder="Add detail about task here..."
                 className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-600"/>
                </div>
                 

                 {/* Priority */}
                <div className=" w-30 mt-5">
                <label className="block text-start mb-1 text-sm font-medium">Priority</label>
                    <PrioritySelect
                      value={priorityOptions.find(opt => opt.value === priority)}
                      onChange={(selected) => setPriority(selected.value)}/>
                </div>

                {/* Assignee */}
                 <div className=" w-50 mt-5">
                <label className="block text-start mb-1 text-sm font-medium">Assignee</label>
                  <AssigneeSelect
                    value={assignee}
                    onChange={(val)=> setAssignee(val.value)}
                  />

                </div>



                {/* Reporting */}

               <div className=" w-50 mt-5">
                <label className="block text-start mb-1 text-sm font-medium">Reporting</label>
                  <ReportingSelect
                  value={reporting}
                  onChange={(val)=>setReporting(val.value)}/>
                </div>

                {/* Due Date */}
                <div 
                  className=" mt-5 border-2 border-gray-300   rounded-md w-60  flex gap-2 items-center p-2 ">
                  <label>Due Date</label>

                  <FaCalendar className="text-gray-400 cursor-pointer"/>
                  <DatePicker
                  id="dueDate"
                  selected={date}
                  onChange={(e) => setDate(e)}
                  required
                  dateFormat="dd/MM/yyyy"
                  onKeyDown={(e) => e.preventDefault()}
                  className="rounded-md outline-none"
                  placeholderText="Select Due Date"/>

                </div>
                

                <button 
                type="submit"
                className="p-2 border-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-500 cursor-pointer mt-5"
                >Create</button>
                
                </form> 
              </div>

    </div> 
  )
}

export default Popup