/*
function initMap() {
    // The location of Uluru
    const oakland = { lat: 37.8044, lng: -122.2712 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: oakland,
    });

    const break_in = {lat: 37.806286, lng: -122.287785};
    const break_in2 = {lat: 37.816508, lng: -122.258541};
    const break_in3 = {lat: 37.801272, lng: -122.250902};

    const marker = new google.maps.Marker({
      position: break_in,
      map: map,
    });

    const marker2 = new google.maps.Marker({
      position: break_in2,
      map: map,
    });
    const marker3 = new google.maps.Marker({
      position: break_in3,
      map: map,
    });
    
  
  }


  */
  /*
  function initMap(){
    var options = {
      zoom: 13,
      center: { lat: 37.8044, lng: -122.2712 }
    }
    var map = new 
    google.maps.Map(document.getElementById('map'),options);

    var marker = new google.maps.Marker ({
      position: {lat: 37.801272, lng: -122.250902},
      map: map
    });

  }

  */
  
  var key = "addy";
  var locations = [];
  var counter = 0;
  
  
 function initMap(){
  var options = {
    zoom: 13,
    center: { lat: 37.8044, lng: -122.2712 },
    mapTypeControl: false,
    streetViewcontrol: false,
    
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#3454e2" }] }, //brown to blue distrct names 
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#7ce635" }], //green city names
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#7ce635" }], // orange change to green location names
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }], //gray
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }], //dark blue
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#dd3f3f" }], //white street names to red
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#99a12e" }], //yellow highway names
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],

  }
  var map = new 
  google.maps.Map(document.getElementById('map'),options);


  const geocoder = new google.maps.Geocoder();
  
  if(localStorage.length > 1){ //checks to see if anyting in local storage
    geocodeAddressLocal(geocoder,map);
  
  } 

  document.getElementById("submit").addEventListener("click",() =>{ //listens for click submit button
    const address = document.getElementById("address").value;
    /*locations.push(address)
    localStorage.setItem(key, locations )
    */
    setJSON(key, address);
    geocodeAddress(geocoder,map);
    });
  
  document.getElementById("address").addEventListener('keypress', function(event) { //listens for enter key in text box
    if(event.key === "Enter"){
      const address = document.getElementById("address").value;
      /*locations.push(address)
      localStorage.setItem(key,locations )
      */
      setJSON(key, address);

      geocodeAddress(geocoder,map);
    }
  });

  //ends if else

}

  function geocodeAddress(geocoder, resultsMap){
    const address = document.getElementById("address").value; /* gets html address value */
    
    geocoder.geocode({address:address},(results, status)=> {
      if(status === "OK"){
        resultsMap.setCenter(results[0].geometry.location);
          new google.maps.Marker({
            map: resultsMap,
            position: results[0].geometry.location,
            mapTypeControl: false,
            streetViewcontrol: false,
            styles: [
              { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
              { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
              { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
              {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
              },
              {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
              },
              {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }],
              },
              {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
              },
              {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }],
              },
              {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }],
              },
              {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }],
              },
              {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
              },
              {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
              },
              {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
              },
              {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }],
              },
              {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
              },
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }],
              },
              {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
              },
              {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }],
              },
            ]
          });
        } else {
          alert("geocode was not sucecessful for following reason" + status);
        }
      });
  }


  function geocodeAddressLocal(geocoder, resultsMap){ //

    for(var i = 0; i < localStorage.length; i++){
      locations.push(localStorage.getItem(localStorage.key(i)));
      console.log(locations[i]);
    
    geocoder.geocode({address:locations[i]},(results, status)=> {
      if(status === "OK"){
        resultsMap.setCenter(results[0].geometry.location);
          new google.maps.Marker({
            map: resultsMap,
            position: results[0].geometry.location,
            mapTypeControl: false,
            streetViewcontrol: false,
            styles: [
              { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
              { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
              { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
              {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
              },
              {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
              },
              {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }],
              },
              {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
              },
              {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }],
              },
              {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }],
              },
              {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }],
              },
              {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
              },
              {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
              },
              {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
              },
              {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }],
              },
              {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
              },
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }],
              },
              {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
              },
              {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }],
              },
            ]

          });
        } else {
          alert("geocode was not sucecessful for following reason" + status);
        }
      });
    }
  }

/*
function log_location(){ //saves properties of objects in local storage
  for(var i = 0; i < localStorage.length; i++){
  locations.push(localStorage.getItem(localStorage.key(i)));
  console.log(locations[i]);
  }
};

log_location(); 
*/


  function setJSON(customCoords, coordinates) {
    customCoords = 'customCoords' + counter;
    counter++;
      window.localStorage.setItem(customCoords, 
      JSON.stringify(coordinates));
  };

