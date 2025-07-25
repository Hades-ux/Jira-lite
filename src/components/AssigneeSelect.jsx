import {useState, useEffect} from 'react'
import CustomSelect from './ui/CustomSelect';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";




const AssigneeSelect = ({value, onChange}) => {

    const [users, setUsers] = useState([])

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

    const assigneeOptions = users.map(user => ({
   value: user.fullName,
   label: user.fullName,
  }));

  return (
    <CustomSelect
    options={assigneeOptions}
    value={value}
    onChange={onChange}/>
  )
}

export default AssigneeSelect