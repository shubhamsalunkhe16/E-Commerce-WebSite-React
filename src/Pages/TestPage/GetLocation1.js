import React, { useRef } from 'react';
import { Demo } from './Demo.jsx';

const GetLocation1 = () => {
  const innerRef = useRef();

  const getLocation = () => {
    innerRef.current && innerRef.current.getLocation();
  };

  return (
    <div>
      <div className='text-slate-900'>
        <Demo onError={(error) => console.log(error)} ref={innerRef} />
      </div>
    </div>
  );
};

export default GetLocation1;
