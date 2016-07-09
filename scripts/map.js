var MAPS_KEY = "AIzaSyAbBBW1EKzdtH5S9ugMpBcxmjElV3ciGuk";
var MAP;
var INFO_WINDOW;
var PLACES = [];

function initMap() {
  var defaultLatLng = {lat: 41, lng: -40};

  MAP = new google.maps.Map(document.getElementById('map_canvas'), {
    center: defaultLatLng,
    zoom: 3
  });

  PLACES.forEach(function(val, ind, arr){
    var marker = new google.maps.Marker({
      position: val.latlng,
      map: MAP,
      title: val.location
    });

    INFO_WINDOW = new google.maps.InfoWindow({
    });

    marker.addListener('click', function() {
      INFO_WINDOW.setContent(val.location);
      INFO_WINDOW.open(MAP, marker);
    });
  });
}


function myCallback(spreadsheetdata) {
  // do something with spreadsheet data here
  var entries = spreadsheetdata.feed.entry;
  var entriesLength = entries.length;
  for (var i = 3; i < entriesLength; i+=3){
  	var place = entries[i].content.$t;
    var lat = Number(entries[i+1].content.$t);
    var lng = Number(entries[i+2].content.$t);
    var latLng = {lat: lat, lng: lng};

    PLACES.push({location:place, latlng: latLng})
  }
}