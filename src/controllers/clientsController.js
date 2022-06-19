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
  data.user_id = req.userId;
  console.log('data ===', data);
  console.log('req.userId ===', req.userId);
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