/**
 * Created by alexsewell on 10/22/15.
 */

function showResults(name, image, addressOne, addressTwo, rating) {
  var displayRestaurants = document.getElementById('restaurants');
  //for (var create = 0; create < 4; create++) {

  // Create four columns
  var createCol = document.createElement('div');
  createCol.setAttribute('class', 'col-md-3');
  displayRestaurants.appendChild(createCol);

  // Create restaurant name
  var createHeader = document.createElement('div');
  createHeader.setAttribute('class', 'restaurant-name');
  createCol.appendChild(createHeader);
  var createName = document.createTextNode(name);
  createHeader.appendChild(createName);

  // Create restaurant image
  var createImage = document.createElement('img');
  createImage.setAttribute('class', 'restaurant-image img-circle center-block');
  createImage.setAttribute('src', image);
  createCol.appendChild(createImage);

  // Create restaurant address
  var createAddress = document.createElement('div');
  createCol.appendChild(createAddress);
  var houseNumber = document.createElement('p');
  houseNumber.setAttribute('class', 'restaurant-address');
  createAddress.appendChild(houseNumber);
  var houseNumberText = document.createTextNode(addressOne);
  houseNumber.appendChild(houseNumberText);
  var address = document.createElement('p');
  address.setAttribute('class', 'restaurant-address');
  createAddress.appendChild(address);
  var addressNumberText = document.createTextNode(addressTwo);
  address.appendChild(addressNumberText);

  // Create share link
  var shareLink = document.createElement('a');
  shareLink.setAttribute('class', 'share-location center-block');
  shareLink.setAttribute('href', "mailto:?subject=Let's meet in the middle!&body=Hi, Let's meet in the middle at " + name + ". The address is " + addressOne + " " + addressTwo + "!");
  createCol.appendChild(shareLink);
  var shareText = document.createTextNode('Share with Friend!');
  shareLink.appendChild(shareText);
}