import React from 'react';
import Budget from './Budget'
import NumbersProvider from './NumbersProvider';
import { Container } from '@material-ui/core';

function App() {
  return (
    <NumbersProvider>
      <Container>
        <Budget />
      </Container>
    </NumbersProvider>
  );
}

export default App;
