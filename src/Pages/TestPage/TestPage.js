import React from 'react';
import GetImage from './GetImage';
import GetLocation from './GetLocation';

const TestPage = () => {
  return (
    <div style={{ textAlign: 'center', paddingTop: '25px' }}>
      <h4>
        Test to access <span style={{ color: '#faaf00' }}>Files</span> from your
        Device
      </h4>
      <br />
      <input type='file' name='testFile' id='testFile' />
      <br />
      <br />
      <br />
      <h4>
        Test to access <span style={{ color: '#faaf00' }}>Camera</span> of your
        Device
      </h4>
      <GetImage />
      <br />
      <h4>
        Test to access <span style={{ color: '#faaf00' }}>Location</span> of
        your Device
      </h4>
      <GetLocation />
    </div>
  );
};

export default TestPage;
