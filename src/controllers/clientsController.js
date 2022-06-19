const {
  getClientFromDb,
  putClientToDb,
  removeClientFromDb,
} = require('../models/employeeModel');
const { failResponse, successResponse } = require('../utils/dbHelpers');

async function getClient(req, res) {
  const client = await getClientFromDb(req.userId);
  if (!client) {
    failResponse(res);
    return;
  }

  successResponse(res, client);
}

async function writeClient(req, res) {
  const data = req.body;
  data.user_id = req.userId;
  const client = await putClientToDb(data);
  if (!client) {
    failResponse(res);
    return;
  }
  successResponse(res, client);
}

async function deleteClient(req, res) {
  const { id } = req.params;
  const client = await removeClientFromDb(id);
  if (client.affectedRows !== 1) {
    failResponse(res, 'Something went wrong. Please try again');
    return;
  }
  successResponse(res, 'User deleted!');
}

module.exports = {
  getClient,
  writeClient,
  deleteClient,
};
