# where-is
How to create a real-world Node CLI app with Node; Tutorial by https://github.com/timberio

https://timber.io/blog/creating-a-real-world-cli-app-with-node/

## done

- where-is, returns longitude and latitude of a given address/location
- distance, returns distance between two addresses/locations in km

## to do

- implement "how-far-from-here"


## Notes

    $ npm link
    npm notice created a lockfile as package-lock.json. You should commit this file.
    npm WARN outside-cli@1.0.0 No repository field.

    up to date in 1.156s
    found 0 vulnerabilities

### HTML5 Geolocation 

Visit an arbitrary site and run this example in your browser's console:

	navigator.geolocation.getCurrentPosition(function(position) {
	   var pos = {
	             lat: position.coords.latitude,
	             lng: position.coords.longitude
	           }
	   console.log(pos.lat)
	   console.log(pos.lng)
	})

For more on this see <a href="https://developers.google.com/maps/documentation/javascript/geolocation">developers.google.com</a>
