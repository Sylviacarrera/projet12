import React, { useState, useEffect } from 'react';
import '../style/Dashboard.scss';

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
      <div className="dashboard-container">
        <h1>
          Bonjour <span className="red-text">{user.userInfos?.firstName}</span>
        </h1>
        <p className="felicitation-message">
          Félicitations ! Vous avez explosé vos objectifs hier <span role="img" aria-label="emoji">👏</span>
        </p>
      </div>
  );
};

export default Dashboard;