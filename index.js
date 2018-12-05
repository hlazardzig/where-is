const minimist = require('minimist')
const getLongitudeAndLatitude = require('./utils/googleMapsClient.js')
const getDistance = require('./utils/googleMapsDistance.js')

const myCallbackFunction = function(argument) {
  console.log('within function, argument is ' + JSON.stringify(argument))
}

module.exports = () => {
  const name = process.argv[1].replace(/^.*\//, '')
  const args = minimist(process.argv.slice(2))

  if (args._.length <= 0) {
    // get location by IP-Address; not yet implemented
    // and will not be implemented, as the best service
    // for this is https://www.maxmind.com/en/locate-my-ip-address
    // which ist still not good enough for this purpose
    console.log('Need some address as argument')
  } else if (name === 'where-is') {
    //
    // get longitude and latitude of this location
    //
    let address = args._.join(' ')
    console.log(getLongitudeAndLatitude(address, myCallbackFunction))
  } else if (name === 'distance') {
    //
    // get distance between two locations
    //
    let adresses = args._.join(' ').split(/ [ua]nd /)
    if (adresses.length === 2) {
      console.log('yet to be implemented')
      console.log(getDistance(adresses))

    } else {
      console.log('need exactly two adresses when called as \'distance\'')
    }

  } else {
    console.log('called by unknown name!')
  }
}
