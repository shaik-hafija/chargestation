function toggleProfileCard() {
    const profileCard = document.getElementById('profileCard');
    profileCard.style.display = profileCard.style.display === 'none' ? 'block' : 'none';
  }
  function moreinfo() {
    const infoCard = document.getElementById('infocard');
    infoCard.style.display = infoCard.style.display === 'none' ? 'block' : 'none';
  }
  


  
  
//     document.getElementById("getLocation").addEventListener("click", getLocation);

//     function getLocation() {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showMap);
//       } else {
//         alert("Geolocation is not supported by this browser.");
//       }
//     }

//     function showMap(position) {
//       var latitude = position.coords.latitude;
//       var longitude = position.coords.longitude;

//     //   var mapImage = document.getElementById("map-image");
//     //   mapImage.src = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=15&size=600x300&markers=${latitude},${longitude}&key=AIzaSyC8PjrgGpWLl8udbSJ7zBEwoPo9UBurusE`;

      
//       var locationDiv = document.getElementById("location");
//       locationDiv.innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
//     }
// function initMap()
// {
//   var options={
//     zoom:8,
//     center:{lat:16.3067,lng:80.4365}

//   }
//   var map=new 
//   google.maps.Map(document.getElementById('map'),options)
// }

var map;

function initMap() {
  var options = {
    zoom: 8,
    center: { lat: 17.4292992, lng: 78.4531456 }
  };
  map = new google.maps.Map(document.getElementById('map'), options);
}

document.getElementById("getLocation").addEventListener("click", getLocation);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showMap);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showMap(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  
  var options = {
    zoom: 15,
    center: { lat: latitude, lng: longitude }
  };

  map.setCenter(options.center);
  map.setZoom(options.zoom);

  var locationDiv = document.getElementById("location");
  locationDiv.innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
}