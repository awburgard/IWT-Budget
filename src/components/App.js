import React from 'react';
import Budget from './Budget'
import NumbersProvider from './NumbersProvider';
import { Container } from '@material-ui/core';
import TransactionsProvider from './TransactionsProvider';
import Transactions from './Transactions';
import LoadCurrentBudget from './LoadCurrentBudget';

function App() {
  return (
    <TransactionsProvider>
      <NumbersProvider>
        <Container>
          <Budget />
          <Transactions />
          <h5>Current Budget</h5>
          <LoadCurrentBudget />
        </Container>
      </NumbersProvider>
    </TransactionsProvider>
  );
}

export default App;
