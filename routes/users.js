const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

router.get('/', usersController.users);

router.get('/register', usersController.register);
router.post('/register', usersController.create);

router.get('/login', usersController.login);
router.post('/login', usersController.processLogin);

router.post('/logout', usersController.logout);

module.exports = router;
