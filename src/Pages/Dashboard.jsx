import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../style/Dashboard.scss';
import Keydata from '../components/Keydata';
import Activity from '../components/Activity';
import AverageSession from '../components/Averagesession';
import Performance from '../components/Performance';
import { getUser, getUserActivity, getUserSession, getUserPerformance } from '../utils/apiHandler';

const Dashboard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [activity, setActivity] = useState([]);
  const [averageSessions, setAverageSessions] = useState([]);
  const [performance, setPerformance] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      navigate('/dashboard/12'); // Redirect if no ID is provided
    } else {
      console.log('Fetching data for user:', id);
      setLoading(true);
      Promise.all([
        getUser(id),
        getUserActivity(id),
        getUserSession(id),
        getUserPerformance(id)
      ])
        .then(([userData, userActivity, userSessions, userPerformance]) => {
          setUser(userData);
          setActivity(userActivity.sessions);
          setAverageSessions(userSessions.sessions);
          setPerformance(userPerformance.data);
          setLoading(false);
        })
        .catch(error => {
          setError(new Error('API is not available. Please try again later.'));
          setLoading(false);
        });
    }
  }, [id, navigate]);

  if (isLoading) return <div className="loader"></div>;
  if (error) return <div className="error-message">{error.message}</div>;

  return (
    <div className="dashboard-container">
      <h1>
        Bonjour <span className="red-text">{user.firstName}</span>
      </h1>
      <p className="felicitation-message">
        Félicitations ! Vous avez explosé vos objectifs hier <span role="img" aria-label="emoji">👏</span>
      </p>
      <div className="main-content">
        <div className="left-content">
          <Activity sessions={activity} />
          <div className="bottom-content">
          <AverageSession sessions={averageSessions} />
          <Performance data={performance} />
          </div>
        </div>
        <div className="right-content">
          <Keydata keyDatas={user.keyDatas} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
