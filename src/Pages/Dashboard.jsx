import React, { useState, useEffect } from 'react';

const Dashboard = () => {
    const [user, setUser] = useState({})
    useEffect(() => {
    fetch("http://localhost:3000/user/12") .then((data)=>{
        data.json() .then((res)=>{
            setUser(res.data)
            console.log(user)
        })
    })
    }, [])
  return (
    <div>
      <h1>Dashboard</h1>
      {
      user.userInfos ?
      <p>{user.userInfos.lastName}</p>
      :<></>
      }
    </div>
  );
};

export default Dashboard;