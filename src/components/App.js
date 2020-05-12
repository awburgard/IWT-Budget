import React from 'react';
import Budget from './Budget'
import NumbersProvider from './NumbersProvider';

function App() {
  return (
    <NumbersProvider>
      <Budget />
    </NumbersProvider>
  );
}

export default App;
