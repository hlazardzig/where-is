# where-is
How to create a real-world Node CLI app with Node; Tutorial by https://github.com/timberio

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

### Axios and ora

	npm install --save axios ora
		
- **<a href='https://github.com/axios/axios' target='_new'>axios/axios</a>:** Promise based HTTP client for the browser and node.js
- **<a href='https://github.com/sindresorhus/ora' target='_new'>sindresorhus/ora</a>:** Elegant terminal spinner

### ipstack, Ipdata and Maxmind
- <a href="https://www.maxmind.com/en/locate-my-ip-address">Maxmind</a>: Detect Online Fraud and Locate Online Visitors
- <a href='https://ipdata.co/index.html' target='_new'>Ipdata.co</a>: IP Geolocation and Threat Data API 
(1.500 free requests per day)
- <a href='https://ipstack.com/' target='_new'>ipstack.com</a>: Locate and identify website visitors by IP address 
(10.000 free requests per month)

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