import Navbar from "../components/Navbar"
import List from "../components/List"

const projects = () => {
  return (
    <div className="flex flex-col h-[100vh] bg-purple-100 ">
    
    <Navbar/>
     <div className="mt-10 px-4">
      <List/>
     </div>
    </div>
  )
}

export default projects