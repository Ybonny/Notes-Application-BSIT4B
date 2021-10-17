const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=b228ea66a5dfd37a18a7ecf6c83e61e6&query=37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
})