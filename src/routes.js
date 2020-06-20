const express = require('express');
const UserController = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')

const router = express.Router();

router.post('/users', UserController.store);
router.get('/users', UserController.index);

router.post('/users/:user_id/addresses', AddressController.store);
router.get('/users/:user_id/addresses', AddressController.index);



module.exports = router;