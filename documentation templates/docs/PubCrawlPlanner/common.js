function navToggle(button) {
    if (!button.classList.contains('active')) {
        document.querySelectorAll('.nav-column .nav-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    } else {
        document.querySelectorAll('.nav-column .nav-button').forEach(btn => btn.classList.remove('active'));
        location.href = 'index.html';
    }

}

// Request user geolocation and callback with lat, lon
function getLocation(page) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( // permission granted, denied - location defaults to central Bristol
            loc => window.location.href=`${page}?lat=${loc.coords.latitude}&lon=${loc.coords.longitude}`,
            () => window.location.href=`${page}?lat=51.454514&lon=-2.587910`
        )
    }
    else { // if unsupported feature, location defaults to central Bristol
        window.alert("Geolocation is not supported by this browser.");
        window.location.href=`${page}?lat=51.454514&lon=-2.587910`;
    }
}