const express = require('express');
const {
  getClient,
  writeClient,
  deleteClient,
} = require('../controllers/clientsController');
const { validateClient, validateToken } = require('../utils/helpers');

const clientRoutes = express.Router();

clientRoutes.get('/', validateToken, getClient);
clientRoutes.post('/add', validateClient, validateToken, writeClient);
clientRoutes.delete('/delete/:id', validateToken, deleteClient);

module.exports = clientRoutes;
