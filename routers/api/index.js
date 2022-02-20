const router = require('express').Router();
const controllers = require('../../controllers')

router.post('/createUser', controllers.userControlers.create.createUser);
router.get('/userList', controllers.userControlers.get.getUserList);
router.delete('/deleteUser/:id', controllers.userControlers.delete.deleteUser);
router.put('/editUser/:id', controllers.userControlers.update.updateUser);

module.exports = router