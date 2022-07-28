import React from 'react';
import Heade from './component/header';
import Tes from './component/module/tes'
import {Button, Input} from './component/named'

import './style/style.css'



function App() {
  return ( 
    <React.Fragment>
      <h1 className='typeOne'>
        Hello
      </h1>
    </React.Fragment>
   );
}

function App2() {
  return ( 
    <div style={{
      background:'#FFFFFF',
      padding:'10px'
    }}>
      <h1>
        Hello
      </h1>
      <button onClick={start()}>Start</button>
    </div>
   );
}

export default App;

export {App, App2}