const minimist = require('minimist')
const getLongitudeAndLatitude = require('./utils/googleMapsClient.js')
const getDistance = require('./utils/googleMapsDistance.js')

const myCallbackFunction = function(argument) {
  // console.log('within function, argument is ' + JSON.stringify(argument))
  console.log('Latitude: ' + argument.lat)
  console.log('Longitude: ' + argument.lng)
}

module.exports = () => {
  const name = process.argv[1].replace(/^.*\//, '')
  const args = minimist(process.argv.slice(2))

  if (!process.env.GOOGLE_MAPS_API) {
    return console.error('Error: set environment variable GOOGLE_MAPS_API!')
  }
  if (name === 'where-is') {
    //
    // get longitude and latitude of location
    //
    if (args._.length <= 0) {
      console.error('Need address as argument')
    } else {
      let address = args._.join(' ')
      getLongitudeAndLatitude(address, myCallbackFunction)
    }
  } else if (name === 'distance') {
    //
    // get distance between two locations
    //
    let adresses = args._.join(' ').split(/ [ua]nd /i)
    if (adresses.length === 2) {
      getDistance(adresses)
    } else {
      console.error('need exactly two adresses separated by \' [au]nd \' when called as \'distance\'')
    }

  } else {
    // note: get current location by IP-Address; not yet implemented
    // and will not be implemented, as the best service
    // for this is https://www.maxmind.com/en/locate-my-ip-address
    // which ist still not good enough for this purpose
    console.error('called by unknown name!')
  }
}
