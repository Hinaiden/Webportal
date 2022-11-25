import React from "react";
import Table from "./components/Table";

function Details({getRowData}) {
  return (
    <div>
     
        <p>Name: {getRowData.name} </p>
        <p>Email:{getRowData.email}</p>
        <p>Phone Number:{getRowData.phone}</p>
        <p>Age:{getRowData.age}</p>
        <p>Gender:{getRowData.gender}</p>
        <p>City:{getRowData.city}</p>
      
        
    </div>
  )
}

export default Details