import Navbar from "../components/Navbar"
import List from "../components/List"

const projects = () => {
  return (
    <div className=" h-[100vh] bg-purple-50 ">
    
     <Navbar/>
      <div className="min-h-screen mt-30 p-6">
      <List/>
     </div>
    </div>
  )
}

export default projects