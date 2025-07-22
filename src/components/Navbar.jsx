import { FaBell, FaUserCircle, FaCog, FaGlobe, FaList, FaClipboard, FaCalendar, FaShareAlt, FaRegDizzy, FaBatteryFull } from "react-icons/fa"
import Button from "../components/Button"
import Popup from "./Popup";
import { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { collection, getDocs,addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";





const Navbar = () => {
  
  
  const [open,  setopen] = useState(false)
  const [status, setStatus] = useState("")
  const [summary, setSummary] = useState("")
  const [description,setDescription] = useState("")
  const [priority, setPriority] = useState("")
  const [assignee, setAssignee] = useState("")
  const [users, setUsers] = useState([])
  const [reporting,setReporting] = useState("")
  const [date, setDate] = useState(null)
  
  useEffect(()=>{
  const fetchUser = async()=>{
    const snapShote = await getDocs(collection(db,"users"))
    const users = snapShote.docs.map((doc)=>({
      id: doc.id,...doc.data(),
    })) 
    setUsers(users)
  }
     fetchUser()
  },[])

 const createTask = async (e) => {
  e.preventDefault();
  try {
    await addDoc(collection(db, "tasks"), {
      status,
      summary,
      description,
      priority,
      assignee,
      reporting,
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
  return (

    

    <div className='w-full'>
      {/* Top Navbar */}
        <div className=' border-b border-gray-300 h-12 w-full flex justify-around items-center bg-white'>
            <h1>Jira-logo</h1>
            <div className='h-[100%] flex gap-10 items-center'>
            <input 
            type="text"
            placeholder='Search project...'
            className=' border-1 border-gray-400 rounded-sm h-[70%] w-150 px-5 outline-none focus:ring-2 focus:ring-indigo-600 hidden sm:block' />
            <button
            className='bg-indigo-500 text-white rounded-sm w-30 h-[70%] cursor-pointer hover:bg-indigo-600'
            onClick={()=>setopen(true)}>+ Creat</button>

            {/* popUp */}
 
            <Popup isOpen={open} onClose={()=>setopen(false)}>

              <div className="p-4 overflow-y-scroll max-h-[40rem]">
               <form onSubmit={createTask}>

                {/* Status */}
                <div className="border border-gray-300 w-24 h-7 text-center bg-gray-200 rounded-md">
                <select 
                name="Status"
                value={status}
                onChange={(e)=>setStatus(e.target.value)}
                className="outline-none">
                <option value="">Status</option>
                <option value="Todo">Todo</option>
                <option value="On Going">On Going</option>
                <option value="Complete">Complete</option>
                </select>
                </div>

                {/* Summary */}
                <div className="flex flex-col gap-1 mt-5">
                <label htmlFor="summary">Summary</label>
                <input 
                id="summary"
                type="text"
                value={summary}
                required
                onChange={(e)=>setSummary(e.target.value)}
                placeholder="Enter Summary here...."
                className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-600" />

                </div>

                {/* Description*/}
                <div className="flex flex-col gap-1 mt-5">
                  <label htmlFor="Description">Description</label>
                 <textarea 
                 name="Description"
                 rows={10}
                 value={description}
                 onChange={(e)=>setDescription(e.target.value)}
                 placeholder="Add detail about task here..."
                 className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-600"/>
                </div>
                 

                 {/* Priority */}
                <div className="border border-gray-300 w-20 h-7 text-cente bg-gray-200 rounded-md mt-5">
                <select 
                name="Priority"
                value={priority}
                onChange={(e)=>setPriority(e.target.value)}
                className="outline-none">
                <option value="">Priority</option>
                <option value="Lowest">Lowest</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Highest">Highest</option>
                </select>
                </div>

                {/* Assignee */}
                 <div className="border border-gray-300 w-38 h-7 text-cente bg-gray-200 rounded-md mt-5">

                  <select 
                  name="Assignee"
                  value={assignee}
                  onChange={(e)=>setAssignee(e.target.value)}
                  className="outline-none">
                    <option value={""}>Select Assignee to</option>
                    {users.map((user) => (
                   <option key={user.id} value={user.fullName}>{user.fullName}</option>
                    ))}

                  </select>

                </div>



                {/* Reporting */}

                <div className="border border-gray-300 w-30 text-center bg-gray-200 rounded-md mt-5">
                  <select
                    name="Reporting"
                    value={reporting}
                    onChange={(e) => setReporting(e.target.value)}
                    className="outline-none w-full p-1"
                  >
                    <option value="">Reporting</option>
                    {users.map((user) => (
                    <option key={user.id} value={user.fullName}>
                      {user.fullName}
                    </option>
                    ))}
                  </select>
                 </div>


                {/* Due Date */}
                <div 
                  className=" mt-5 border-2 border-gray-300   rounded-md w-60  flex gap-2 items-center p-2 ">
                  <label htmlFor="dueDate"></label><FaCalendar className="text-gray-400 cursor-pointer"/>

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
              
              </Popup>
            </div>

            <div className='flex items-center gap-4 text-xl'>

                <FaBell className="text-gray-700"/>
                <FaCog className="text-gray-700"/>
                <FaUserCircle className="text-gray-700"/>

            </div>
        </div>

    {/* Navigation Button */}


        <div className="h-30 w-full border-b border-gray-300 flex absolute">

          <div className="flex items-end">


          <div className="flex relative right-18">
            <Button
            lable = "Summary"
            icon = {<FaGlobe/>}
            onclick={""}
            />
            <Button
            lable = "List"
            icon = {<FaList/>}
            />

            <Button
            lable="Board"
            icon={<FaClipboard/>}
            />

            <Button
            lable="Calender"
            icon={<FaCalendar/>}
            />
          </div>

            </div>
        <div className="relative p-3 flex gap-2 justify-end items-center w-full">
          <button
          className="p-2 rounded-sm border cursor-pointer hover:scale-105">
            <FaShareAlt/>
          </button>

          <button
          className="p-2 rounded-sm border cursor-pointer hover:scale-105">
            <FaBatteryFull/>
          </button>

          <button
          className="p-2 rounded-sm border cursor-pointer hover:scale-105">
            <FaRegDizzy/>
          </button>
        </div>
        </div>

    </div>
  )
}

export default Navbar