let mymap = L.map('mapid').setView([35.99, -78.89], 13);
// map will load on Durham, NC

let initialLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWVhZ2FiZXRoIiwiYSI6ImNqc2t1azZjZzFjdnU0M3FvZjQ1N25oYm4ifQ.qwR8s8TFSdU349SShBi0sw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

let heat = L.heatLayer([
	[50.5, 30.5, 0.2], // lat, lng, intensity
	[50.6, 30.4, 0.5],
], {radius: 25}).addTo(map)