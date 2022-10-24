import { log } from 'console';
import { createMocks } from 'node-mocks-http';

import ping from '../pages/api/ping';

describe('Api Endpoint: ping', () => {
  it('exists', () => {
    // Assert
    console.log('exists');
    expect(ping).toBeDefined();
  });

  it('responds with details about the user and channel', async () => {
    // Arrange
    console.log('responds with');
    const { req, res } = createMocks({
      method: 'GET',
      headers: {
        'nightbot-channel':
          'name=kongleague&displayName=KongLeague&provider=twitch&providerId=454709668',
        'nightbot-user':
          'name=wescopeland&displayName=WesCopeland&provider=twitch&providerId=52223868&userLevel=moderator'
      }
    });

    // Act
    await ping(req, res);
    const resData = res._getData();
    console.log("🚀 ~ file: ping.test.ts ~ line 26 ~ it ~ resData", resData)

    // Assert
    expect(resData).toContain('Your username is WesCopeland');
    expect(resData).toContain('the current channel is KongLeague');
  });
});