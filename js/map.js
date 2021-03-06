/**
 * Created by alexsewell on 10/19/15.
 */

function createMap() {

  //display results div
  var results = document.getElementById('results');
  results.style.display='block';

  // create a new instance of GeoCoder to get users latitude and longitude
  var yourGeoCoder = new google.maps.Geocoder();
  var yourAddress = document.getElementById("yourAddress").value;
  var yourLocation;
  yourGeoCoder.geocode( { 'address': yourAddress}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK)
    {
      yourLocation = results[0].geometry.location;
    }

  // create a new instance of GeoCoder to get user's friend's latitude and longitude
  var friendsGeoCoder = new google.maps.Geocoder();
  var friendsAddress = document.getElementById('friendsAddress').value;
  var friendsLocation;
  friendsGeoCoder.geocode( { 'address': friendsAddress}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK)
    {
      friendsLocation = results[0].geometry.location;
    }

  // set start point to users location; set end point to user's friend's location
  var startPoint = yourLocation;
  var endPoint = friendsLocation;

  // create a new instance of the map
  var map = new google.maps.Map(document.getElementById('map'), {
    center: startPoint,
    scrollwheel: true,
    zoom: 16
  });

  // creates new instance of directions renderer
  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map
  });

  // Set destination, origin and travel mode.
  var request = {
    destination: endPoint,
    origin: startPoint,
    travelMode: google.maps.TravelMode.DRIVING
  };

  // Pass the directions request to the directions service.
  var directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(response, status) {
  // Display the route on the map. Runs createPath function
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
      createPath(response)
    }

  //Gets the directionService response and creates a circle 2 miles in diameter at the midpoint of the path
    function createPath(directionResult) {
      var path = directionResult.routes[0].overview_path;
      var pathMidpoint = Math.round(((path.length)-1) / 2);
      var midpointCoordinates = path[pathMidpoint];

      var midpointCircle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: midpointCoordinates,
        radius: 1609.34
      });

  // Add the marker to the map, call setMap();
      midpointCircle.setMap(map);

  // Get the coordinates of the midpoint and run yelpResults function
      var coordinates = midpointCoordinates.toString().slice(1,30);
      yelpResults(coordinates);
    }
  });
  });
  });
}

function onClick() {
var submit = document.getElementById('submit');
submit.addEventListener('click', createMap, false);
}