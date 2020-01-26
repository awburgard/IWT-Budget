import React from 'react';
import Calc from '../Calc/Calc';
import './App.css';

function App() {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = new Date();
  const currentMonth = months[date.getMonth()];
  return (
    <div className="App">
      <div className="App-header">
        <Calc currentMonth={currentMonth} />
      </div>
    </div>
  );
}

export default App;
