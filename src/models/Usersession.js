
class UserSession {
    /**
     * Creates a user session.
     * @param   {Object}     data                        The data object fetched from API.
     * @param   {!Number}    data.userId                 The user's id.
     * @param   {Array}      data.sessions               The user's session data.
     * @param   {!Number}    data.sessions.day           The day of the week (1-7).
     * @param   {!Number}    data.sessions.sessionLength The session length in minutes.
     */
    constructor(data) {
        this.userId = data.userId;
        this.sessions = data.sessions.map(session => ({
            day: this.formatDay(session.day),
            sessionLength: session.sessionLength
        }));
    }

    /**
     * Format day number to a short day string.
     * @param   {Number} day The day number (1-7).
     * @returns {String} The short day string.
     */
    formatDay(day) {
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        return days[day - 1];
    }
}

export default UserSession;
