const { getAllStats } = require('./managers/dynamoManager');

const getReadings = async () => {
  const stats = await getAllStats();

  return stats;
};

module.exports = {
  getReadings,
  handler: getReadings,
};
