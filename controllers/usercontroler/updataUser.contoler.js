const services = require('../../services');

module.exports = {
    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { fullName, age, phoneNumber, email } = req.body;
            let existingUser = await services.userServices.get.getUserById(id);

            if (existingUser) {
                await services.userServices.update.updateUser(id, fullName, age, phoneNumber, email)
                existingUser = await services.userServices.get.getUserById(id);
                res.status(200).json({ message: true, message: "user updated", data: existingUser })
            } else { res.status(404).json({ status: false, message: "user does not exist" }) }
        } catch (err) {
            console.log(err);
            return err;
        }
    }
}