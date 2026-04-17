function outputMarkers(json) {
    let f = json.features;
    for(let i=0;i<f.length;i++) {
        let a = f[i].attributes;
        let lon = f[i].geometry.x;
        let lat = f[i].geometry.y;
        let marker = L.marker([lat,lon]).addTo(map);
        marker.bindPopup(`<b>${a.TRADING_NAME}</b><br>${a.TYPE_OF_PREMISE}`);
    }
}

function mapQuery() {
    let url = "https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_leisure_and_culture/MapServer/14/query?where=1%3D1&outFields=MAPEAST,MAPNORTH,TYPE_OF_PREMISE,TRADING_NAME,TRADING_ADDRESS,BUSINESS_CONTACT&outSR=4326&f=json"
    fetch(url).then(r=>r.json()).then(outputMarkers);
}

var urlParams = new URLSearchParams(location.search);
var lat = urlParams.get('lat') || 51.4545;
var lon = urlParams.get('lon') || -2.5879;

// see: https://leafletjs.com/examples/quick-start/

// L for Leaflet - initialize the map centred on user or Bristol, zoom level 13
    var map = L.map('map').setView([lat,lon], 13);

    // attribution legally required by the OpenStreetMap license
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

mapQuery();