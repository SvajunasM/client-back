const { getClientFromDb, putClientToDb } = require('../models/clientModel');
const { failResponse, successResponse } = require('../utils/dbHelpers');

async function getClient(req, res) {
  const client = await getClientFromDb(req.user_id);
  if (!client) {
    failResponse(res);
    return;
  }

  successResponse(res, client);
}

async function writeClient(req, res) {
  const data = req.body;
  const client = await putClientToDb(data);
  if (!client) {
    failResponse(res);
    return;
  }
  successResponse(res, client);
}

module.exports = {
  getClient,
  writeClient,
};