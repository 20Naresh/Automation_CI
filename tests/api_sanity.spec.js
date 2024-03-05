const { test, expect } = require('@playwright/test');
const axios = require('axios');

test('HTTP GET request test', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.status).toBe(200);

});
