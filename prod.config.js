const {defineConfig}=require("Cypress")
module.exports = defineConfig({
    video: true,
    e2e: {
        baseUrl:"https://www.google.com"
    },
    env: {
        username: 'prod'
    },

});