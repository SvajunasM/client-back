const express = require('express');
const { getClient, writeClient } = require('../controllers/clientsController');

const clientRoutes = express.Router();

clientRoutes.get('/', getClient);
clientRoutes.post('/add', writeClient);

module.exports = clientRoutes;
