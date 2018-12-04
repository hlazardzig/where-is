const minimist = require('minimist')
const getLongitudeAndLatitude = require('./utils/googleMapsClient.js')

const myCallbackFunction = function(argument) {
  console.log('within function, argument is ' + JSON.stringify(argument))
}

module.exports = () => {
  const args = minimist(process.argv.slice(2))

  if (args._.length <= 0) {
    // get location by IP-Address; not yet implemented
    console.log('Need some address as argument')
  } else {
    let address = args._.join(' ')
    getLongitudeAndLatitude(address, myCallbackFunction)
  }
}
