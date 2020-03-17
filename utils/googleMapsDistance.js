// see https://github.com/googlemaps/google-maps-services-js

const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_MAPS_API,
  Promise: Promise
})

// see https://www.andrerinas.de/tutorials/javascript-genaue-latlon-geokoordinaten-entfernungen-errechnen.html

function Deg2Rad( deg ) {
	return deg * Math.PI / 180
}

function PythagorasEquirectangular( coord1, coord2 ) {
	let lat1 = Deg2Rad(coord1.lat)
	let lat2 = Deg2Rad(coord2.lat)
	let lon1 = Deg2Rad(coord1.lng)
	let lon2 = Deg2Rad(coord2.lng)
	let r = 6371 // km
	let x = (lon2-lon1) * Math.cos((lat1+lat2)/2)
	let y = (lat2-lat1)
	let d = Math.sqrt(x*x + y*y) * r
	return d
}

module.exports = async (addresses, myCBFunction) => {
  //
  // Geocode an address, wait for result of async promise
  //
  let latlong = []

  for (let i=0; i<addresses.length; i++) {
    latlong[i] = await googleMapsClient.geocode({address: addresses[i]})
    .asPromise()
    .then((response) => {
      return response.json.results[0].geometry.location
    })
    .catch((err) => {
      console.log(err)
    })
  }

  //
  // see https://developers.google.com/maps/documentation/distance-matrix/intro
  //
  [origin, destination, distanceByCar] = await googleMapsClient.distanceMatrix({
    origins: latlong[0], destinations: latlong[1]})
    .asPromise()
    .then((response) => {
      // console.log(JSON.stringify(response.json.rows[0].elements[0].distance))
      return [response.json.origin_addresses, response.json.destination_addresses, response.json.rows[0].elements[0].distance]
    })
    .catch((err) => {
      console.log(err)
    })

  // if called with function argument, call function here
  //
  if (myCBFunction) {
    myCBFunction(latlong)
  } else {
    console.log('latlong[0] of ' + origin + ' is ' + JSON.stringify(latlong[0]))
    console.log('latlong[1] of ' + destination + ' is ' + JSON.stringify(latlong[1]))
    dist = PythagorasEquirectangular(latlong[0], latlong[1])
    console.log('Linear distance is ' + dist.toFixed(2) + ' km')
    console.log('and distance by car ' + distanceByCar.text)
  }

  return latlong
}
