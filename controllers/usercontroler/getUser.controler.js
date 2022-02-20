const services = require('../../services');
module.exports = {
    async getUserList(req, res) {
        try {
            const userList = await services.userServices.get.getUserList();
            res.status(200).json({ status: true, message: "user list", data: userList })
        } catch (err) {
            console.log(err)
            return err
        }
    }
}