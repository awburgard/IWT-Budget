import React from 'react';
import Budget from './Budget'
import NumbersProvider from './NumbersProvider';
import Test from './test'

function App() {
  return (
    <NumbersProvider>
      <Test />
      <Budget />
    </NumbersProvider>
  );
}

export default App;
