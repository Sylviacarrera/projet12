import User from '../models/User';

export const getUser = (id) => {
  return fetch(`${URL_API}/user/${id}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => {
      if (data.data) {
        return new User(data.data);
      } else {
        throw new Error('User not found');
      }
    });
};
