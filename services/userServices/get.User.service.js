const User = require("../../models/User");

module.exports = {
    async getUserByEmail(email) {
        try {
            return await User.findOne({ email })
        } catch (err) {
            console.log(err)
            return err
        }
    },
    async getUserByPhoneNumber(phoneNumber) {
        try {
            return await User.findOne({ phoneNumber })
        } catch (err) {
            console.log(err)
            return err
        }
    },
    async getUserList() {
        try {
            return await User.find();
        } catch (err) {
            console.log(err)
            return err
        }
    },
    async getUserById(id) {
        try {
            return await User.findById(id)
        } catch (err) {
            console.log(err)
            return err
        }
    }
}