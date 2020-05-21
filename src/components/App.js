import React from 'react';
import Budget from './Budget'
import NumbersProvider from './NumbersProvider';
import { Container } from '@material-ui/core';
import Transactions from './Transactions';

function App() {
  return (
      <NumbersProvider>
        <Container>
          <Budget />
          <Transactions />
        </Container>
      </NumbersProvider>
  );
}

export default App;
