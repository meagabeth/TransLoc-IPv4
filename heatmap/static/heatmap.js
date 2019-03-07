let heat;

let myMap = L.map('mapid').setView([35.99, -78.89], 10);
// map will load on Durham, NC

let initialLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWVhZ2FiZXRoIiwiYSI6ImNqc2t1azZjZzFjdnU0M3FvZjQ1N25oYm4ifQ.qwR8s8TFSdU349SShBi0sw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(myMap);



// Returns the geographical bounds visible in the current map view
function getMapBounds() {
  let bounds = myMap.getBounds()

  return {
    north: bounds.getNorth(),
    south: bounds.getSouth(),
    east: bounds.getEast(), 
    west: bounds.getWest()
  }
}


// Retrieve data from API, using the reponse to call addHeat function
function getIPLocations() {
  let coordinates = getMapBounds();
  console.log(coordinates)
  $.ajax({
    method: 'GET',
    url: '/api/locations'
  }).then(function (response) {
    addHeat(response)
    console.log(response[4].latitude, response[4].longitude, response[4].frequency)

  })
}


// Using the response from the 'GET' request to the API, create the heat layer and add to map
function addHeat(data) {
  let addresses = [];

  if (data) {
    data.forEach(function(coordinate) {
      addresses.push([
        parseFloat(coordinate.latitude),
        parseFloat(coordinate.longitude),
        Math.log10(coordinate.frequency)/10
      ]
      )
      
    });
  }
  // If heat layer already exists, remove it before creating again
  if (heat) {
    heat.remove();
  }

  // Uses data from list of addresses to plot heat points based on gradient scale.
  heat = L.heatLayer(addresses, {
    radius: 25,
    blur: 15, 
    minOpacity: .2,
    gradient: {
      .1: 'cyan',
      .2: 'green',
      .4: 'yellow',
      .6: 'orange',
      .8: 'red',
    }}).addTo(myMap)
}

// Will update map when zoom (in or out) occurs or the user drags the map to a different view
myMap.on('zoom', getIPLocations)
myMap.on('moveend', getIPLocations)

getIPLocations()
