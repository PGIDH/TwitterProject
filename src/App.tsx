import React from 'react';
import './App.css';
import LeftPanel from './components/LeftPanel';
import MiddlePanel from './components/MiddlePanel';
import RightPanel from './components/RightPanel';
import { useState, useEffect } from 'react';
import { PageResponse } from './components/models/Models';

function App() {
  const [applData, setApplData] = useState();
  useEffect(() => {
    fetch("https://sandbox.nextleap.app/page/fetch")
      .then(res => res.json())
      .then(data => setApplData(data));
  }, []);

  return (
    <div className={`App`}>
      { 
        applData ? <LeftPanel data={applData!} /> : <></>
      }
      {
        applData ? <MiddlePanel data={applData!} /> : <></>
      }
      {
        applData ? <RightPanel data={applData} /> : <></>
      }
    </div>
  );
}

export default App;


