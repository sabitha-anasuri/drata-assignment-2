// src/mocks/server.js
const nock = require('nock');

beforeEach(() => {
  nock.cleanAll();
});

// Define mock responses for different API endpoints
nock('https://api.demo.drata.com')
  .get('/users/sabitha')
  .reply(200, {
    id: '1',
    name: 'sabitha',
    fullname: 'Sabitha Anasuri',
    plan: {
      name: 'Pro',
      space: 5000,
    },
    age: '30',
    friends: 'true'
  });
