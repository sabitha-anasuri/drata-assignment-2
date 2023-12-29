// src/mocks/server.js
const nock = require('nock');

beforeEach(() => {
  nock.cleanAll();
});

// Define mock responses for different API endpoints
nock('https://api.drata.com')
  .get('/users/sabitha-anasuri')
  .reply(200, {
    login: 'sanasuri',
    name: 'Sabitha Anasuri',
    plan: {
      name: 'Pro',
      space: 5000,
    },
  });
