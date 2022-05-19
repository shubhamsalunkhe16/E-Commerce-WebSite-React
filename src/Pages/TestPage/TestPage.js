import React from 'react';
import GetImage from './GetImage';
import GetLocation from './GetLocation';
import GetLocation1 from './GetLocation1';

const TestPage = () => {
  return (
    <div style={{ textAlign: 'center', paddingTop: '25px' }}>
      <h4>Test to access Files from your device</h4>
      <br />
      <input type='file' name='testFile' id='testFile' />
      <br />
      <br />
      <br />
      <h4>Test to access Camera of your device</h4>
      <GetImage />
      <br />
      <br />
      <br />
      <h4>Test to access Location of your device</h4>
      <GetLocation />
    </div>
  );
};

export default TestPage;
