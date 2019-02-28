let heat;

let myMap = L.map('mapid').setView([35.99, -78.89], 13);
// map will load on Durham, NC

let initialLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWVhZ2FiZXRoIiwiYSI6ImNqc2t1azZjZzFjdnU0M3FvZjQ1N25oYm4ifQ.qwR8s8TFSdU349SShBi0sw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(myMap);


// let heat = L.heatLayer([[35.99, -78.89, .8], [37, -76, .2]] {
//   radius: 25,
//   blur: 15, 
//   minOpacity: .1,
//   gradient: {
//     0.1: 'navy',
//     0.2: 'cyan',
//     0.4: 'lime',
//     0.6: 'yellow',
//     0.8: 'orange',
//     1.0: 'red'
//   }}).addTo(myMap)


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


// Retrieve data from API to establish heat layer on map
function getIPLocations() {
  let coordinates = getMapBounds();
  console.log(coordinates)
  $.ajax({
    method: 'GET',
    url: '/api/'
  }).then(function (response) {
    addHeat(response)
    console.log(response[4].latitude, response[4].longitude, response[4].frequency)

  })
}
    // }).done(function(response) {
  //   console.log(response[4])
  //   heat.setLatLngs(response.latitude, response.longitude, response.frequency)
  //   console.log('What happened?')
  // })




function addHeat(data) {
  let addresses = [];

  if (data) {
    data.forEach(function(coordinate) {
      addresses.push(Object.values(coordinate))
      
    });
  }
  if (heat) {
    heat.remove();
  }

  heat = L.heatLayer([[36, -79, 1.0], [35.9, -78.9, .1]], {
    radius: 100,
    blur: 15, 
    minOpacity: .2,
    gradient: {
      0.1: 'navy',
      0.2: 'cyan',
      0.4: 'lime',
      0.6: 'yellow',
      0.8: 'orange',
      1.0: 'red'
    }}).addTo(myMap)
}

// highest frequency should be 1.0 for gradient, lowest should be .1

// Will update map when zoom (in or out) occurs or the user drags the map to a different view
myMap.on('zoom', getIPLocations)
myMap.on('moveend', getIPLocations)

getIPLocations()
