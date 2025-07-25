import {useState, useEffect} from 'react'
import CustomSelect from './ui/CustomSelect';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ReportingSelect = ({value, onChange}) => {

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

const reportingOptions = users.map(user => ({
   value: user.fullName,
   label: user.fullName,
  }));
  return (
    
    <CustomSelect
     options={reportingOptions}
     value={value}
     onChange={onChange}
    />
  )
}

export default ReportingSelect