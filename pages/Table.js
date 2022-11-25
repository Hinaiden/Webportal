import React, {useState} from 'react'
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import { Link } from '@material-ui/core';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { green } from '@material-ui/core/colors';
import "../pages/Table.css"



const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};


function Table() {
 
    const [showProductDetails, setShowProductDetails] = useState(true);
    const [getRowData, setGetRowData] = useState([]);
    const [tableData, setTableData] = useState([
        {  name: "Raj", role: "Admin", email: "Raj@gmail.com", company: "Host Company", companyName: "A given name", firstName: "Chennai",lastName: "Chennai", date: "29 Jun 2099" },
        { name: "Mohan", role: "Company Admin", email: "mohan@gmail.com", company: "Issuer-1", companyName: "A given name", firstName: "Delhi", lastName: "Chennai",date: "19 Apr 2099"  },
        { name: "Edwin", role: "Company Staff", email: "sweety@gmail.com", company: "Issuer-1", companyName: "A given name", firstName: "Noida",lastName: "Chennai", date: "29 May 2019"  },
        { name: "Vikas", role: "Company Staff", email: "vikas@gmail.com", company: "Issuer-2", companyName: "A given name", firstName: "Mumbai", lastName: "Chennai",date: "01 Jan 2099"  },
        { name: "Neha", role: "Company Admin", email: "neha@gmail.com", company: "Issuer-3", companyName: "A given name", firstName: "Patna", lastName: "Chennai",date: "02 Feb 2099"  },
        { name: "Chris", role: "Company Staff", email: "mohan@gmail.com", company: "Issuer-1", companyName: "A given name", firstName: "Delhi", lastName: "Chennai",date: "20 Mar 2099"  },
        { name: "Sweety", role: "Company Staff", email: "sweety@gmail.com", company: "Host Company", companyName: "A given name", firstName: "Noida",lastName: "Chennai", date: "23 May 2021"  },
        { name: "Parry", role: "Company Admin", email: "vikas@gmail.com", company: "Issuer-1", companyName: "A given name", firstName: "Mumbai", lastName: "Chennai",date: "14 Jun 2099" },
        { name: "James", role: "Company Staff", email: "Raj@gmail.com", company: "Issuer-2", companyName: "A given name", firstName: "Chennai",  lastName: "Chennai",date: "29 Jun 2099"},
     
      ]);
    
      const columns=[
        {
          title: "",
          field: "booleanValue",
          editComponent: (props) => {
            return (
              <input
                type="checkbox"
                checked={props.value}
                onChange={(e) => props.onChange(e.target.checked)}
              />
            );
          },
          render: (rowdata) => (
            <input type="checkbox" checked={rowdata.booleanValue} />
          )
        },
        { title: "User ID", field: "name" },
        { title: "Role", field: "role"},
        { title: "Email", field: "email"},
        { title: "Company ID", field: "company"},
        { title: "Company Name", field: "companyName"},
        { title: "First Name", field: "firstName" },
        { title: "Last Name", field: "lastName"}, 
        { title: "Join Date", field: "date"}, 
       
  
      ]
  return (
    <div className="table">
      <div className="account">
         <h1>Account</h1>
         <div className="icon">
         <i class="fa-solid fa-plus fa-2x"></i><p>Add Account</p></div>
         </div>
         <div className="role">
           <p>$ROLE / $USER_ID</p>
         </div>
          <div className="nav">
        <button>Acc</button>
        <button>Log</button>
        <button>Cred</button>
        <button>NFT</button>
      </div>
     
        
         
 
     { showProductDetails?

    <div className="materialTable">
<MaterialTable  title={null}  icons={tableIcons} columns={columns} data={tableData}  options={{ headerStyle: {
     backgroundColor: 'lightblue',color: 'white'},search: true,filtering: true,
   pageSizeOptions:[10,20,30,40,50,60,70,80,90,100], pageSize: 10, paginationType: "stepped", showFirstLastPageButtons: false,  }} actions={[
    {
      icon: "info",
      tooltip: "More info",
      onClick: (event, rowData) => {
        setShowProductDetails(!showProductDetails);
        console.log(rowData);
        setGetRowData(rowData);
      
      }
    }
  ]} /> </div> : 

 <div >
     
 <p>User ID: {getRowData.name} </p>
 <p>Role:{getRowData.role}</p>
 <p>Email:{getRowData.email}</p>
 <p>Company ID:{getRowData.company}</p>
 <p>Gender:{getRowData.companyName}</p>
 <p>First Name:{getRowData.firstName}</p>
 <p>Last Name:{getRowData.lastName}</p>
 <p>Join Date:{getRowData.date}</p>
 <button onClick={()=> setShowProductDetails(!showProductDetails)}>Back to Home</button>
 
</div>
}
    </div>
  )
}

export default Table