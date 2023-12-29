// src/setupTests.js

test('Drata users checking test case', async () => {
  nock('https://api.drata.com')
    .get('/users')
    .reply(200, [
      { id: 1, name: 'Sabitha' },
      { id: 2, name: 'Erin' },
    ]);

  // Make API call using fetch or other HTTP client
  const response = await fetch('https://api.drata.com/users');
  // assert response data
  expect(response.name).toBe('Sabitha Anasuri');
  expect(response.age).toBeGreaterThan(18);
  expect(Array.isArray(response.friends)).toBe(true);
});

