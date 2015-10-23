/**
 * Created by alexsewell on 10/22/15.
 */
function yelpResults(coordinates) {
  var request = new XMLHttpRequest();
  request.open("GET", "/search/data/" + coordinates, true);
  request.send();
  request.addEventListener('load', function() {
    var getData = JSON.parse(request.responseText);
    var businessesArray = getData.businesses;
    for (var business = 0; business < businessesArray.length; business++) {
      var restaurantName = businessesArray[business].name;
      var restaurantImage = businessesArray[business].image_url;
      var restaurantAddressOne = businessesArray[business].location.display_address[0];
      var restaurantAddressTwo = businessesArray[business].location.display_address[1];
      var restaurantRating = businessesArray[business].rating_img_url_large;

      showResults(restaurantName, restaurantImage, restaurantAddressOne, restaurantAddressTwo, restaurantRating);
    }
  });
}
