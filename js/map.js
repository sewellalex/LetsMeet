/**
 * Created by alexsewell on 10/19/15.
 */

function getResults() {
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

  // creates rendering of direction
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
    if (status == google.maps.DirectionsStatus.OK) {
      // Display the route on the map.
      directionsDisplay.setDirections(response);
      console.log(directionsService);
    }
  });
  });
  });
}

var submit = document.getElementById('submit');
submit.addEventListener('click', getResults, false);
