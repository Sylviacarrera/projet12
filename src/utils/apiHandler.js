// src/utils/apiHandler.js
import { USER_ACTIVITY } from './data';
import User from '../models/User';
import UserActivity from '../models/Useractivity';

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

export const getUserActivity = (id) => {
  const userActivityData = USER_ACTIVITY.find((activity) => activity.userId === parseInt(id));
  if (userActivityData) {
    return new UserActivity(userActivityData);
  } else {
    throw new Error('User activity not found');
  }
};
