const services = require('../../services');
const { deleteUser } = require('../../services/userServices/deleteUser.service');

module.exports = {
    async deleteUser(req, res) {
        try {
            const { id } = req.params
            const existingUser = await services.userServices.get.getUserById(id);
            if (existingUser) {
                await services.userServices.delete.deleteUser(id);
                res.status(200).json({ status: true, message: 'user deleted successfully' })
            } else {
                res.status(404).json({ status: false, message: "user does not exist" })
            }
        } catch (err) {
            console.log(err)
            res.status(500).json({ status: false, message: err })
        }
    }
}