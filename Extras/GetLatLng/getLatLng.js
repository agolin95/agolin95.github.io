// Your Client ID can be retrieved from your project in the Google
// Developer Console, https://console.developers.google.com
var CLIENT_ID = '103712145428-sm5ffpffe22dk4s6ps84e28an6fim9qf.apps.googleusercontent.com';

var SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];

var MAPS_KEY = "AIzaSyAbBBW1EKzdtH5S9ugMpBcxmjElV3ciGuk";
var MAP;
var INFO_WINDOW;
var LATLNG = "";

/**
 * Check if current user has authorized this application.
 */
function checkAuth() {
  gapi.auth.authorize(
    {
      'client_id': CLIENT_ID,
      'scope': SCOPES.join(' '),
      'immediate': true
    }, handleAuthResult);
}

/**
 * Handle response from authorization server.
 *
 * @param {Object} authResult Authorization result.
 */
function handleAuthResult(authResult) {
  var authorizeDiv = document.getElementById('authorize-div');
  if (authResult && !authResult.error) {
    // Hide auth UI, then load client library.
    authorizeDiv.style.display = 'none';
    loadSheetsApi();
  } else {
    // Show auth UI, allowing the user to initiate authorization by
    // clicking authorize button.
    authorizeDiv.style.display = 'inline';
  }
}

/**
 * Initiate auth flow in response to user clicking authorize button.
 *
 * @param {Event} event Button click event.
 */
function handleAuthClick(event) {
  gapi.auth.authorize(
    {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
    handleAuthResult);
  return false;
}

/**
 * Load Sheets API client library.
 */
function loadSheetsApi() {
  var discoveryUrl =
      'https://sheets.googleapis.com/$discovery/rest?version=v4';
  gapi.client.load(discoveryUrl).then(listMajors);
}

/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
function listMajors() {
  initMap();
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: '17caI8ICBPxc7J7gQ3tdKalEps3iltywNruesM27m97U',
    range: 'Sheet1!A:C',
  }).then(function(response) {
    var range = response.result;
    if (range.values.length > 0) {
      for (i = 1; i < range.values.length; i++) {
        var row = range.values[i];
        if (row[1] == undefined) {
          var address = row[0];
          var key = MAPS_KEY;
          var parameters = "address=" + address + "&key=" + key;
          var geoUrl = "https://maps.googleapis.com/maps/api/geocode/json?" + parameters;
          
          httpGetAsync(geoUrl, getGeocoordinates);

        }
      }
    } else {
      //TODO
      appendPre('No data found.');
    }
  }, function(response) {
    //TODO
    //appendPre('Error: ' + response.result.error.message);
  });
}

/**
 * Append a pre element to the body containing the given message
 * as its text node.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('output');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////


function initMap() {
  var myLatLng = {lat: 40.748817, lng: -73.985428};

  MAP = new google.maps.Map(document.getElementById('map_canvas'), {
      center: myLatLng,
    zoom: 13
  });
}

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function getGeocoordinates(response) {
  var parsed = JSON.parse(response);
  //console.log(parsed);
  var lat = parsed.results[0].geometry.location.lat;
  var lng = parsed.results[0].geometry.location.lng;
  //console.log(lat);
  LATLNG += lat + "," + lng + "\n";
  console.log("CSV:" + LATLNG);

  var myLatLng = {lat: parsed.results[0].geometry.location.lat, lng: parsed.results[0].geometry.location.lng};
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: MAP,
    title: 'Hello World!'
  });

  var contentString = "<h1>" + parsed.results[0].formatted_address + "</h1>";

  INFO_WINDOW = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('click', function() {
    INFO_WINDOW.setContent("teehee");
    INFO_WINDOW.open(MAP, marker);
  });
}