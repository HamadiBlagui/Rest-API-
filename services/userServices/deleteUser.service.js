const User = require('../../models/User');
module.exports = {
    async deleteUser(id) {
        try {
            return await User.findByIdAndRemove(id)
        } catch (err) {
            console.log(err)
            return err
        }
    }
}