// import React, { useState, useEffect } from 'react';

// const GetLocation = () => {
//   const [latitude, setLatitude] = useState(0);
//   const [longitude, setLongitude] = useState(0);

//   useEffect(() => {
//     if ('geolocation' in navigator) {
//       console.log('Available');
//       if (navigator.geolocation) {
//         console.log(navigator.geolocation);
//         navigator.geolocation.watchPosition((position) => {
//           setLatitude(position.coords.latitude);
//           setLongitude(position.coords.longitude);
//           console.log('Latitude is :', position.coords.latitude);
//           console.log('Longitude is :', position.coords.longitude);
//         });
//       } else {
//         alert('No permisson');
//       }
//     } else {
//       console.log('Not Available');
//     }
//   }, []);
//   return (
//     <div>
//       <div>
//         <h4>Using geolocation is: </h4>
//         <h5>Latitude is : {latitude}</h5>
//         <h5>Longitude is : {longitude}</h5>
//       </div>
//     </div>
//   );
// };

// export default GetLocation;

import React from 'react';

const GetLocation = () => {
  var watchID;
  var geoLoc;

  function showLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    alert('Latitude : ' + latitude + ' Longitude: ' + longitude);
  }

  function errorHandler(err) {
    if (err.code == 1) {
      alert('Error: Access is denied!');
    } else if (err.code == 2) {
      alert('Error: Position is unavailable!');
    }
  }

  function getLocationUpdate() {
    if (navigator.geolocation) {
      // timeout at 60000 milliseconds (60 seconds)
      var options = { timeout: 60000 };
      geoLoc = navigator.geolocation;
      watchID = geoLoc.watchPosition(showLocation, errorHandler, options);
    } else {
      alert('Sorry, browser does not support geolocation!');
    }
  }
  return (
    <div>
      <form>
        <input type='button' onclick={getLocationUpdate} value='Watch Update' />
      </form>
    </div>
  );
};

export default GetLocation;
