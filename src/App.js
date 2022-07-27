import React from 'react';
import Heade from './component/header';
import Tes from './component/module/tes'
import {Button, Input} from './component/named'
import './style/style.css'



function App() {
  return ( 
    <React.Fragment>
      <h1>
        Hello
      </h1>
      <Heade/>
      <Input/>
      <Button/>
      {/* <Tes/> */}
    </React.Fragment>
   );
}

export default App;