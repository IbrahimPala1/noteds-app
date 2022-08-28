const Api = require('./api');

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks()

describe('API class', () => {
  it('calls fetch and loads data', () => {
    // 1. Instantiate the class
    const api = new Api();

    // 2. We mock the response from `fetch`
    // The mocked result will depend on what your API
    // normally returns — you want your mocked response
    // to "look like" as the real response as closely as
    // possible (it should have the same fields).
    fetch.mockResponseOnce(JSON.stringify({
      name: "const Api = require('./api');

      // This makes `fetch` available to our test
      // (it is not by default, as normally `fetch` is only
      // available within the browser)
      require('jest-fetch-mock').enableMocks()
      
      describe('API class', () => {
        it('calls fetch and loads data', () => {
          // 1. Instantiate the class
          const api = new Api();
      
          // 2. We mock the response from `fetch`
          // The mocked result will depend on what your API
          // normally returns — you want your mocked response
          // to "look like" as the real response as closely as
          // possible (it should have the same fields).
          fetch.mockResponseOnce(JSON.stringify({
            name: "Some value",
            id: 123
          }));
      
          // 3. We call the method, and use `expect`
          // to assert the values we get back contain
          // what we expect.
          api.loadData((returnedDataFromApi) => {
            expect(returnedDataFromApi.name).toBe("Some value");
            expect(returnedDataFromApi.id).toBe(123);
          });
        });
      });",
      id: 123
    }));

    // 3. We call the method, and use `expect`
    // to assert the values we get back contain
    // what we expect.
    api.loadData((returnedDataFromApi) => {
      expect(returnedDataFromApi.name).toBe("Some value");
      expect(returnedDataFromApi.id).toBe(123);
    });
  });
});