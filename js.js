var map;
var ejboparken = {
    lat: 55.629022,
    lng: 12.062774
};

function initMap() {
    var myLatLng = {
        lat: 55.629022,
        lng: 12.062774
    };


    map = new google.maps.Map(document.getElementById('map'), {
        center: ejboparken,

        zoom: 14,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}
