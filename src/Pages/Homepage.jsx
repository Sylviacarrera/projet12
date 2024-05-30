import React, { useState, useEffect } from 'react';

const Homepage = () => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log('Fetching data');
    setLoading(true);
    // eslint-disable-next-line no-undef
    fetch(`${URL_API}/user`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : (
        <div>{JSON.stringify(data)}</div>
      )}
    </div>
  );
};

export default Homepage;
