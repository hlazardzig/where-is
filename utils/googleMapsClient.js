// see https://github.com/googlemaps/google-maps-services-js

const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_MAPS_API,
  Promise: Promise
})

module.exports = async (address, myCBFunction) => {
  //
  // Geocode an address, wait for result of async promise
  //
  let longlat = await googleMapsClient.geocode({address: address})
  .asPromise()
  .then((response) => {
    // console.log(JSON.stringify(response.json.results))
    return response.json.results[0].geometry.location
  })
  .catch((err) => {
    console.log(err);
  })

  // if called with function argument, call function here
  //
  if (myCBFunction) {
    myCBFunction(longlat)
  } else {
    console.log('longlat is ' + JSON.stringify(longlat))
  }

  return longlat
}
