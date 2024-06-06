import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../style/Dashboard.scss';
import Keydata from '../components/Keydata';
import Activity from '../components/Activity';
import { getUser, getUserActivity } from '../utils/apiHandler';

const Dashboard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [activity, setActivity] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      navigate('/dashboard/12'); // Redirect if no ID is provided
    } else {
      console.log('Fetching data for user:', id);
      setLoading(true);
      Promise.all([getUser(id), getUserActivity(id)])
        .then(([userData, userActivity]) => {
          setUser(userData);
          setActivity(userActivity.sessions);
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
      <div className="dashboard-content">
        <Activity sessions={activity} />
        <Keydata keyDatas={user.keyDatas} />
      </div>
    </div>
  );
};

export default Dashboard;
