/**
 * Created by alexsewell on 10/22/15.
 */
function yelpResults(address) {
  var request = new XMLHttpRequest();
  request.open("GET", "/search/data/" + address, true);
  request.send();
  request.addEventListener('load', function() {
    var getData = JSON.parse(request.responseText);
    console.log(getData);
    var businessesArray = getData.businesses;
    console.log(businessesArray);
    for (var business = 0; business < businessesArray.length; business++) {
      var restaurantName = businessesArray[business].name;
      console.log(restaurantName);
      var restaurantImage = businessesArray[business].image_url;
      console.log(restaurantImage);
      for (var address = 0; address < businessesArray[business].location.display_address.length; address++) {
        var restaurantAddress = businessesArray[business].location.display_address[address];
        console.log(restaurantAddress);
      }
      var restaurantRating = businessesArray[business].rating_img_url_large;
      console.log(restaurantRating);
    }
    //showResults(restaurantName, restaurantImage, restaurantAddress, restaurantRating);
  });
}
