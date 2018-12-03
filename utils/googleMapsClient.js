// see https://github.com/googlemaps/google-maps-services-js

const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_MAPS_API,
  Promise: Promise
})

module.exports = async (address) => {
  // Geocode an address.

  let longlat = await googleMapsClient.geocode({address: address})
  .asPromise()
  .then((response) => {
    // console.log(JSON.stringify(response.json.results))
    // console.log(JSON.stringify(response.json.results[0].geometry.location))
    return response.json.results[0].geometry.location
  })
  .catch((err) => {
    console.log(err);
  })

  console.log('longlat is ' + JSON.stringify(longlat))
  return longlat

}
