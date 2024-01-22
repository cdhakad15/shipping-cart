import React from 'react'

const StaffList = ({staffList}) => {
  return (
    <div>
        <h1>Staff List</h1>
       <ul>
        {staffList.map((staff)=>
        
     (
      <li key={staff.id}>{staff.name}</li>
     
     ))}
       </ul>
    </div>
  )
}

export default StaffList;