/**
 * Created by alexsewell on 10/19/15.
 */

var url = window.location.href;
var urlSplit = url.split('/');
console.log(urlSplit);

var startLong = parseFloat(urlSplit[4]);
var startLat = parseFloat(urlSplit[5]);
var endLong = parseFloat(urlSplit[6]);
var endLat = parseFloat(urlSplit[7]);

function getResults() {
  var startPoint = {
                    lat: startLong,
                    lng: startLat
                    };
  var endPoint = {
                  lat: endLong,
                  lng: endLat
                  };

  var map = new google.maps.Map(document.getElementById('map'), {
    center: startPoint,
    scrollwheel: true,
    zoom: 16
  });

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
    }
  });
}