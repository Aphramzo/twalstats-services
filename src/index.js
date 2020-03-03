const getReadings = async (event) => {
  console.log('Event', event);
  return 'Hi';
};

module.exports = {
  getReadings,
  handler: getReadings,
};
