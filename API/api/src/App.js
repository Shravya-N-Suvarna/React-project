import React, { useEffect, useState } from 'react';
import axios from "axios";
function App() {
  const[isUsers,setIsUsers]=useState(undefined);
  useEffect(()=>{
    let Task=async()=>{
      let response=await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
      setIsUsers(response.data);
    }
    Task()
  },[]);
    // axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
      // setIsUsers(res.data);
  //   });
  // },[]);
  return (
    <div className="App">
      {/* {isUsers&&(isUsers.map((user)=>(
      <><p key={user}></p><p>{user.title}</p></>)))} */}
      {isUsers&&<div>{isUsers.time.updated}</div>}
      
    </div>
  );
}

export default App;
