const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=b228ea66a5dfd37a18a7ecf6c83e61e6&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
//    console.log(response.body.current)

    console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + 'degress out. There is a ' + response.body.current.precip + '% chance of Rain')
})
//Geocoding