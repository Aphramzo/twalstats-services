const { getReadings } = require('../src/index');

test('returns hi', async () => {
  const result = await getReadings({});
  expect(result).toBe('Hi');
});
