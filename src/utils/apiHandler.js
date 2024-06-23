import User from '../models/User';
import UserActivity from '../models/Useractivity';
import UserSession from '../models/Usersession';
import Performance from '../models/Performance';

const BASE_URL = `${URL_API}/user`
const URL_USER = id => `${BASE_URL}/${id}`
const URL_ACTIVITY = id => `${BASE_URL}/${id}/activity`
const URL_AVERAGE_SESSIONS = id => `${BASE_URL}/${id}/average-sessions`
const URL_PERFORMANCE = id => `${BASE_URL}/${id}/performance`

const get = url => fetch(url).then(response => response.json())

export const getUser = id => get(URL_USER(id)).then(data => new User(data.data))
export const getUserActivity = id => get(URL_ACTIVITY(id)).then(data => new UserActivity(data.data))
export const getUserSession = id => get(URL_AVERAGE_SESSIONS(id)).then(data => new UserSession(data.data))
export const getUserPerformance = id => get(URL_PERFORMANCE(id)).then(data => new Performance(data.data))

