const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userControllers');

// create new user
router.post('/register',UserController.registerUser );

// login user
router.post('/login', UserController.login );



module.exports = router;