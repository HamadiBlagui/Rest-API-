const services = require('../../services')
module.exports = {
    async createUser(req, res) {
        try {
            const { fullName, age, phoneNumber, email } = req.body;
            const existingPhoneNumber = await services.userServices.get.getUserByPhoneNumber(phoneNumber);
            const existingEmail = await services.userServices.get.getUserByEmail(email);
            if (phoneNumber.toString().length !== 8) {
                res.status(406)
                    .json({ status: false, message: "phone number is invalid" })
            }
            if (existingPhoneNumber) {
                res.status(406)
                    .json({ status: false, message: "phone number is used" })
            }
            if (!email.includes("@")) {
                res.status(406)
                    .json({ status: false, message: "email is invalid" })
            }
            if (existingEmail) {
                res.status(406)
                    .json({ status: false, message: "email already used" })
            }
            const newUser = await services.userServices.create.createUser(
                fullName,
                age,
                phoneNumber,
                email)
            res.status(201).json({ status: true, message: 'user created successfully', data: newUser })
        } catch (err) {
            res.status(500).json({ status: false, message: err });
            console.log(err);
        }
    },
};