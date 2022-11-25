import React, {useState} from 'react'
import "../pages/CredentialDefinition.css"
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

function CredentialDefinition() {
    const [getRowData, setGetRowData] = useState([]);
    const [tableData, setTableData] = useState([
        {  id: "Ejkhjkhjkn:schema_general:1", name: "Nice Schema", content: "Sercet", date: "29 Jun 2099" },
        {  id: "Raj:schema_general:1", name: "Schema", content: "Click me", date: "29 May 2014" },
        {  id: "asdgdfrsg:schema_general:1d", name: "Dream Project", content: "NFT", date: "29 Apr 2099" },
        {  id: "Drydestrewy:specific:1", name: "NiceSchema", content: "Metaverse", date: "29 Jun 2099" },
        {  id: "GVsaeaer:schema_general:2", name: "123Schema", content: "Smart Wallet", date: "29 Aug 2099" },
        {  id: "Afhrstst:schema_general:1", name: "CreativeSchema", content: "Avatar", date: "29 Jun 2099" },
        {  id: "Qfsedfseresfg:specific:8", name: "WonderfulSchema", content: "Unity", date: "29 May 2099" },
        {  id: "Dearaers:specific:4", name: "ThinkSchema", content: "Sandbox", date: "29 Jun 2099" },
      
      ]);
    
      const columns=[
       
        { title: "Schema ID", field: "id" },
        { title: "Schema Name", field: "name"},
        { title: "Schema Content", field: "content"},
        { title: "Create Date", field: "date"},
     
       
  
      ]
  return (
    <div><div><div className="definition">
    <h1>Credential Definition</h1>
    <div className="icon">
    <i class="fa-solid fa-plus fa-2x"></i><p>Add Definition</p></div>
    </div>
    <div className="role">
      <p>$ROLE / $USER_ID</p>
    </div>
     <div className="nav">
   <button>Cred</button>
   <button>Log</button>
   <button>Acc</button>
   <button>NFT</button>
 </div>

   
    


<div className="materialTable">
<MaterialTable  title={null}  icons={tableIcons} columns={columns} data={tableData}  options={{ headerStyle: {
backgroundColor: 'Black',color: 'white'},search: true,filtering: true,
pageSizeOptions:[10,20,30,40,50,60,70,80,90,100], pageSize: 10, paginationType: "stepped", showFirstLastPageButtons: false,  }} /> </div> : 


</div></div>
  )
}

export default CredentialDefinition