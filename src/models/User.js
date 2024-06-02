import apple from '../assets/apple.png'
import protein from '../assets/protein.png'
import fire from '../assets/fire.png'
import cheeseburger from '../assets/cheeseburger.png'

/**
 * Class representing a user.
 */
class User {
    /**
     * Creates a user.
     * @param   {Object}     data                            The data object fetched from API.
     * @param   {!Number}    data.id                         The user's id.
     * @param   {Object}     data.userInfos                  The user's personal informations.
     * @param   {!String}    data.userInfos.firstName        The user's first name.
     * @param   {!String}    data.userInfos.lastName         The user's last name.
     * @param   {!Number}    data.userInfos.age              The user's age. Must be an integer.
     * @param   {Number}     data.todayScore                 The user's score. Must be an decimal number.
     * @param   {Object}     data.keyData                    The user's nutritional values data.
     * @param   {Number}     data.keyData.calorieCount       The user's calorie value. Must be an integer.
     * @param   {Number}     data.keyData.proteinCount       The user's protein value. Must be an integer.
     * @param   {Number}     data.keyData.carbohydrateCount  The user's carbs value. Must be an integer.
     * @param   {Number}     data.keyData.lipidCount         The user's fat value. Must be an integer.
     */
    constructor(data) {
        this.userId = data.id;
        this.firstName = data.userInfos.firstName;
        this.lastName = data.userInfos.lastName;
        this.age = data.userInfos.age;
        this.score = data.todayScore || data.score;
        this.keyDatas = [
            {
                name: 'Calories',
                measure: 'kCal',
                img: fire,
                quantity: data.keyData.calorieCount,
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
            },
            {
                name: 'Proteines',
                measure: 'g',
                img: protein,
                quantity: data.keyData.proteinCount,
                backgroundColor: 'rgba(74, 184, 255, 0.1)',
            },
            {
                name: 'Glucides',
                measure: 'g',
                img: apple,
                quantity: data.keyData.carbohydrateCount,
                backgroundColor: 'rgba(249, 206, 35, 0.1)',
            },
            {
                name: 'Lipides',
                measure: 'g',
                img: cheeseburger,
                quantity: data.keyData.lipidCount,
                backgroundColor: 'rgba(253, 81, 129, 0.1)',
            }
        ]
    }

}

export default User;