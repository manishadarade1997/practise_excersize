module.exports = {
  e2e: {
    baseUrl: 'http://localhost:3000', // Change this to your application's URL
    viewportWidth: 1280,
    viewportHeight: 720,
    supportFile: 'cypress/support/e2e.js', // Explicitly set the support file path
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};