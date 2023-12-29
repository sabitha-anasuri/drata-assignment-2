// src/setupTests.js

test('Drata users checking test case', async () => {
  nock('https://api.drata.com')
    .get('/users')
    .reply(200, [
      { id: 1, name: 'sabitha' }
    ]);

  // Make API call using fetch or other HTTP client
  const response = await fetch('https://api.demo.drata.com/users');
  // assert response data
  expect(response.fullname).toBe('Sabitha Anasuri');
  expect(response.age).toBeGreaterThan(18);
  expect(response.friends).toBe(true);
  expect(response.plan.name).toBe('Pro')
  expect(response.plan.space).toBeGreaterThan(100);
});

