import React from 'react';
import { Container } from '@material-ui/core';

import Budget from './Budget'
import NumbersProvider from './NumbersProvider';
import TransactionsProvider from './TransactionsProvider';
import Transactions from './Transactions';
import HandleBudgetChange from './HandleBudgetChange'

const App = () => {
  return (
    <TransactionsProvider>
      <NumbersProvider>
        <Container>
          <Budget />
          <Transactions />
          <HandleBudgetChange />
        </Container>
      </NumbersProvider>
    </TransactionsProvider>
  );
}

export default App;
