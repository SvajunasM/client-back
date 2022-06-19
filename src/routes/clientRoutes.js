const express = require('express');
const { getClient, writeClient } = require('../controllers/clientsController');
const { validateClient } = require('../utils/helpers');

const clientRoutes = express.Router();

clientRoutes.get('/', getClient);
clientRoutes.post('/add', validateClient, writeClient);

module.exports = clientRoutes;
