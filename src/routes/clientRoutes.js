const express = require('express');
const { getClient, writeClient } = require('../controllers/clientsController');
const { validateClient, validateToken } = require('../utils/helpers');

const clientRoutes = express.Router();

clientRoutes.get('/', validateToken, getClient);
clientRoutes.post('/add', validateClient, validateToken, writeClient);

module.exports = clientRoutes;
