// import React from 'react';

// const [latitude, setLatitude] = useState(0);
// const [longitude, setLongitude] = useState(0);

// useEffect(() => {
//   if ('geolocation' in navigator) {
//     console.log('Available');
//     if (navigator.geolocation) {
//       navigator.geolocation.watchPosition(function (position) {
//         setLatitude(position.coords.latitude);
//         setLongitude(position.coords.longitude);
//         console.log('Latitude is :', position.coords.latitude);
//         console.log('Longitude is :', position.coords.longitude);
//       });
//     } else {
//       alert('No permisson');
//     }
//   } else {
//     console.log('Not Available');
//   }
// }, []);

// const GetLocation = () => {
//   return (
//     <div>
//       <div>
//         <h4>Using geolocation is: </h4>
//         <h3>Latitude is : {latitude}</h3>
//         <h3>Longitude is : {longitude}</h3>
//       </div>
//     </div>
//   );
// };

// export default GetLocation;
// import React from 'react';
// import { geolocated } from 'react-geolocated';

// class GetLocation extends React.Component {
//   render() {
//     {
//       console.log('this.props', this.props);
//     }
//     return !this.props.isGeolocationAvailable ? (
//       <div>Your browser does not support Geolocation</div>
//     ) : !this.props.isGeolocationEnabled ? (
//       <div>Geolocation is not enabled</div>
//     ) : this.props.coords ? (
//       <table>
//         <tbody>
//           <tr>
//             <td>latitude</td>
//             <td>{this.props.coords.latitude}</td>
//           </tr>
//           <tr>
//             <td>longitude</td>
//             <td>{this.props.coords.longitude}</td>
//           </tr>
//           <tr>
//             <td>altitude</td>
//             <td>{this.props.coords.altitude}</td>
//           </tr>
//           <tr>
//             <td>heading</td>
//             <td>{this.props.coords.heading}</td>
//           </tr>
//           <tr>
//             <td>speed</td>
//             <td>{this.props.coords.speed}</td>
//           </tr>
//         </tbody>
//       </table>
//     ) : (
//       <div>Getting the location data&hellip; </div>
//     );
//   }
// }

// export default geolocated({
//   positionOptions: {
//     enableHighAccuracy: false,
//   },
//   userDecisionTimeout: 5000,
// })(GetLocation);

import React, { useRef } from 'react';
import { Demo } from './Demo.jsx';

const GetLocation = () => {
  const innerRef = useRef();

  const getLocation = () => {
    innerRef.current && innerRef.current.getLocation();
  };

  return (
    <div>
      <div className='text-slate-900'>
        <Demo onError={(error) => console.log(error)} ref={innerRef} />
      </div>
      <div className='flex items-center space-x-2'>
        <button
          className='bg-sky-600 hover:bg-sky-800 py-2 px-4 rounded-md'
          onClick={getLocation}
          type='button'
        >
          Get location
        </button>
      </div>
    </div>
  );
};

export default GetLocation;
