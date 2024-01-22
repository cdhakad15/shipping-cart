import { useEffect, useState } from 'react'

import './App.css'
import StaffList from './components/staffList';


function App() {
  const [staffList, setStaffList]= useState([]);


   useEffect(()=>{
    fetchStaffList();
   },[]);

  const fetchStaffList = async()=>{
    try {
      const response = await fetch("http://localhost:5000/staff/list");
      const data = await response.json();
      setStaffList(data);
      
    } catch (error) {
      console.error("Error fetching staff list",error.message);
    }
  };

  const handleStaffCreate =async(newStaff)=>{
    try {
      await fetch("http://localhost:5000/staff/create",
      {
        method:"POST",
        headers:{
          "Content-Type":
          "application/json",
        },
        body:JSON.stringify(newStaff),
      })

      fetchStaffList();
    
    

    } catch (error) {
      console.error("Error create staff ",error.message);
    }
  }
 
  return (
   <div>
    <h1>Shipping System</h1>
   <StaffList staffList={staffList}/>
   
   </div>
  )
}

export default App
