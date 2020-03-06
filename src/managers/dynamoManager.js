const AWS = require('aws-sdk');


const tableName = 'twalstats';
let gClient = null;

const getClient = () => {
  if (gClient) {
    return gClient;
  }
  gClient = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10',
    region: 'us-east-1',
  });
  return gClient;
};

const getAllStats = async () => {
  const client = getClient();

  return client
    .scan({
      TableName: tableName,
    })
    .promise();
};

module.exports = {
  getAllStats,
};
