const AWSMock = require('aws-sdk-mock');
const AWS = require('aws-sdk');
const { getReadings } = require('../src/index');

describe('getReadings', () => {
  const managerResult = [
    {
      propertyname: 'value',
    },
  ];

  beforeEach(async () => {
    AWSMock.setSDKInstance(AWS);
    AWSMock.mock('DynamoDB.DocumentClient', 'scan', (params, callback) => {
      callback(null, managerResult);
    });
    // jest.doMock('aws-sdk', () => ({
    //   DynamoDB: jest.fn(() => ({
    //     DocumentClient: jest.fn(() => ({
    //       scan: jest.fn().mockImplementation(() => ({
    //         promise() {
    //           return Promise.resolve(managerResult);
    //         },
    //       })),
    //     })),
    //   })),
    // }));
  });

  afterEach(() => {
    AWSMock.restore('DynamoDB.DocumentClient');
    // jest.clearAllMocks();
  });

  test('returns result from manager', async () => {
    const result = await getReadings();
    expect(result).toBe(managerResult);
  });
});
