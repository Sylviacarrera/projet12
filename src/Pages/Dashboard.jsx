import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../style/Dashboard.scss';
import { getUser } from '../utils/apiHandler';

const Dashboard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      navigate('/dashboard/12'); // Rediriger si aucun ID n'est fourni
    } else {
      console.log('Fetching data for user:', id);
      setLoading(true);
      getUser(id)
        .then(data => {
          if (data) {
            setUser(data);
            setLoading(false);
          } else {
            setError(new Error('User not found'));
            setLoading(false);
          }
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
        Bonjour <span className="red-text">{user.userInfos?.firstName || 'utilisateur'}</span>
      </h1>
      <p className="felicitation-message">
        Félicitations ! Vous avez explosé vos objectifs hier <span role="img" aria-label="emoji">👏</span>
      </p>
    </div>
  );
};

export default Dashboard;
