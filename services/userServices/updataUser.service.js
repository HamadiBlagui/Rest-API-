const User = require("../../models/User");

module.exports = {
    async updateUser(id, fullName, age, phoneNumber, email) {
        try {
            return await User.findByIdAndUpdate(id, {
                fullName,
                age,
                phoneNumber,
                email
            })
        } catch (err) {
            console.log(err)
            return err
        }
    }
}