function outputTable(json) {
    let e = document.getElementById("results");
    e.innerHTML = "";
    let f = json.features;
    for(let i=0;i<f.length;i++) {
        let tr = document.createElement("tr");
        e.appendChild(tr);

        let a = f[i].attributes;
        
        tr.dataset.mapeast = a.MAPEAST; // store coords as hidden attributes as users dont need access, but required for path finding later
        tr.dataset.mapnorth = a.MAPNORTH;

        let td = document.createElement("td");
        td.innerHTML = a.TRADING_NAME;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = a.TYPE_OF_PREMISE;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = a.TRADING_ADDRESS;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = a.BUSINESS_CONTACT;
        tr.appendChild(td);
    }
}

function filter(type) { // shows items with direct match to input type
    let enc = encodeURIComponent(type); // used to pass in the input value into the url query
    let url = `https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_leisure_and_culture/MapServer/14/query?where=TYPE_OF_PREMISE%20%3D%20'${enc}'&outFields=MAPEAST,MAPNORTH,TYPE_OF_PREMISE,TRADING_NAME,TRADING_ADDRESS,BUSINESS_CONTACT&outSR=4326&f=json`;
    fetch(url).then(r=>r.json()).then(outputTable)
}

function like(type) { // shows items with partial match to input type
    let enc = encodeURIComponent(type);
    let url = `https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_leisure_and_culture/MapServer/14/query?where=TYPE_OF_PREMISE%20%LIKE%20'${enc}'&outFields=MAPEAST,MAPNORTH,TYPE_OF_PREMISE,TRADING_NAME,TRADING_ADDRESS,BUSINESS_CONTACT&outSR=4326&f=json`;
    fetch(url).then(r=>r.json()).then(outputTable)
}

function query() { // shows all items
    let url = "https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_leisure_and_culture/MapServer/14/query?where=1%3D1&outFields=MAPEAST,MAPNORTH,TYPE_OF_PREMISE,TRADING_NAME,TRADING_ADDRESS,BUSINESS_CONTACT&outSR=4326&f=json"
    fetch(url).then(r=>r.json()).then(outputTable);
    document.querySelectorAll('.nav-bar .nav-button').forEach(btn => btn.classList.remove('active'));
}

function search(searchTerm) { // shows items with partial match to search input
    let enc = encodeURIComponent(searchTerm);
    let url = `https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_leisure_and_culture/MapServer/14/query?where=&text=${enc}&outFields=MAPEAST,MAPNORTH,TYPE_OF_PREMISE,TRADING_NAME,TRADING_ADDRESS,BUSINESS_CONTACT&outSR=4326&f=json`;
    fetch(url).then(r=>r.json()).then(outputTable);
    document.querySelectorAll('.nav-bar .nav-button').forEach(btn => btn.classList.remove('active'));
}

function filterToggle(button, filterType) {
    if (!button.classList.contains('active')) {
        document.querySelectorAll('.nav-bar .nav-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filter(filterType); // if button isnt already active, clear all button states, activate it and then filter of its type
    } else {
        document.querySelectorAll('.nav-bar .nav-button').forEach(btn => btn.classList.remove('active')); // if already active, just clear all buttons of active state as well as filter
        query(); // runs query function, resetting table as the function shows all items
    }

}