const User = require('../../models/User');
module.exports = {
    async createUser(fullName, age, phoneNumber, email) {
        try {
            return await User.create({ fullName, age, phoneNumber, email })
        } catch (err) {
            return err
        }
    }
}