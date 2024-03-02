import React from 'react';
import Luuletus from './Raamat';
import RaamatImage from "./Raamat.jpg";

function App() {
  return (
    <div className="App">
      <h1>"Rehepapp Ehk November"</h1>
      <img src={RaamatImage} alt="Raamat" />
      <br />
      <Luuletus />
    </div>
  );
}

export default App;