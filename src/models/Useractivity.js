class UserActivity {
    /**
     * Creates a user activity.
     * @param {Object} data The data object fetched from API.
     * @param {!Number} data.userId The user's id.
     * @param {Array} data.sessions The user's activity sessions.
     */
    constructor(data) {
        this.userId = data.userId;
        this.sessions = data.sessions.map(session => ({
            day: session.day.split('-')[2], // Extracting day from the date
            kilogram: session.kilogram,
            calories: session.calories,
        }));
    }
}

export default UserActivity;
