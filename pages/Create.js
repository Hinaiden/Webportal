import React, {useState} from "react";
import "../pages/Create.css";

function Create() {

  
  return (
    
    <div  >
      <div className="nav">
        <button>Acc</button>
        <button>Log</button>
        <button>Cred</button>
        <button>NFT</button>
      </div>
      <div className="center">
        <div className="upper">
          <p>$ROLE /</p>
          <p>$USER_ID</p>
        </div>
        
        <div className="title">$CREATE_UPDATE Account</div>

        
        <div className="body">
          <div className="flex">
          <label >User ID</label>
          <input type="text"  />
          </div>
          <div className="flex">
          <label >Role</label>
          <input type="text" />
          </div>
          <div className="flex">
          <label >Email</label>
          <input type="text" />
          </div>
          <div className="flex">
          <label >Password</label>
          <input type="text" />
          </div>
          <div className="flex">
          <label >First Name</label>
          <input type="text"  />
          </div>
          <div className="flex">
          <label >Last Name</label>
          <input type="text"  />
          </div>
          <div className="flex">
          <label >Company Name</label>
          <input type="text"  />
          </div>
          <div className="flex">
          <label >Company ID</label>
          <input type="text"/>
          </div>
          <div className="flex">
          <label >Company Address</label>
          <input type="text"  />
          </div>
          <div className="flex">
          <label >Company Contact</label>
          <input type="text"  />
          </div>
          </div>
          <button className="button">$CREATE_UPDATE</button>
        
      </div>

    </div>
  );
}

export default Create;
