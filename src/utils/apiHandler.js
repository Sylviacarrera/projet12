// src/utils/apiHandler.js
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from './data';
import User from '../models/User';
import UserActivity from '../models/Useractivity';
import UserSession from '../models/Usersession';
import Performance from '../models/Performance';


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

export const getUserSession = (id) => {
  const userSessionData = USER_AVERAGE_SESSIONS.find((session) => session.userId === parseInt(id));
  if (userSessionData) {
    return new UserSession(userSessionData);
  } else {
    throw new Error('User session not found');
  }
};
export const getUserPerformance = (id) => {
  const userPerformanceData = USER_PERFORMANCE.find((performance) => performance.userId === parseInt(id));
  if (userPerformanceData) {
    return new Performance(userPerformanceData);
  } else {
    throw new Error('User performance not found');
  }
};