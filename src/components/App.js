import React from 'react';
import Budget from './Budget'
import NumbersProvider from './NumbersProvider';
import { Container } from '@material-ui/core';
import TransactionsProvider from './TransactionsProvider';
import Transactions from './Transactions';

function App() {
  return (
    <TransactionsProvider>
      <NumbersProvider>
        <Container>
          <Budget />
          <Transactions />
        </Container>
      </NumbersProvider>
    </TransactionsProvider>
  );
}

export default App;
