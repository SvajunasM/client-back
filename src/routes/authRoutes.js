const express = require('express');
const { authController } = require('../controllers/authController');
const { validateRegistration, validateLogin } = require('../utils/helpers');

const authRoutes = express.Router();

authRoutes.post('/register', authController);
authRoutes.post('/login', loginController);

module.exports = authRoutes;
