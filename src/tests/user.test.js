// tests/user.test.js
const { expect } = require('chai');
const fetch = require('node-fetch'); // Or any HTTP client

describe('GitHub User API Tests', () => {
  beforeEach(() => {
    // Reset mock server before each test
    nock.cleanAll();
  });

  // Green Path Tests
  test('Fetches user details successfully', async () => {
    const response = await fetch('https://api.drata.com/users/sabitha');
    const user = await response.json();

    expect(user.login).to.equal('sabitha');
    expect(user.plan.name).to.equal('Pro');
  });

  // Error Handling Tests
  test('Handles 404 error for non-existent user', async () => {
    nock('https://api.drata.com')
      .get('/users/not-found')
      .reply(404);

    try {
      await fetch('https://api.drata.com/users/not-found');
      throw new Error('Should have thrown an error');
    } catch (error) {
      expect(error.response.status).to.equal(404);
    }
  });

  // Edge Cases
  test('Handles unexpected response structure gracefully', async () => {
    nock('https://api.drata.com')
      .get('/users/unexpected')
      .reply(200, { foo: 'bar' }); // Unexpected response structure

    try {
      await fetch('https://api.drata.com/users/unexpected');
      throw new Error('Should have thrown an error');
    } catch (error) {
      expect(error.message).to.include('Unexpected response format');
    }
  });
});
