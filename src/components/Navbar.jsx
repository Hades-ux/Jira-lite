import { FaBell, FaUserCircle, FaCog, FaGlobe, FaList, FaClipboard, FaCalendar, FaShareAlt, FaRegDizzy, FaBatteryFull } from "react-icons/fa"
import Button from "../components/Button"

const Navbar = () => {
  return (

    <div className='w-full'>
      {/* Top Navbar */}
        <div className=' border-b border-gray-300 h-12 w-full flex justify-around items-center'>
            <h1>Jira-logo</h1>
            <div className='h-[100%] flex gap-10 items-center'>
            <input 
            type="text"
            placeholder='Search project...'
            className=' border-1 border-gray-400 rounded-sm h-[70%] w-150 px-5 outline-none focus:ring-2 focus:ring-indigo-600 hidden sm:block' />
            <button
            className='bg-indigo-500 text-white rounded-sm w-30 h-[70%] cursor-pointer hover:bg-indigo-600'>+ Creat</button>

            </div>

            <div className='flex items-center gap-4 text-xl'>

                <FaBell className="text-gray-700"/>
                <FaCog className="text-gray-700"/>
                <FaUserCircle className="text-gray-700"/>

            </div>
        </div>


    {/* Navigation Button */}


        <div className="h-30 w-full border-b border-gray-300 bg-purple-100 flex absolute">
          <h1 className="p-3">Project</h1>

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