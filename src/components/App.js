import React from 'react';
import Budget from './Budget'
import NumbersProvider from './NumbersProvider';
import { Container } from '@material-ui/core';
import TransactionsProvider from './TransactionsProvider';
import Transactions from './Transactions';
import HandleBudgetChange from './HandleBudgetChange'
import Users from './test'

function App() {
  return (
    <TransactionsProvider>
      <NumbersProvider>
        <Container>
          <Budget />
          <Transactions />
          <HandleBudgetChange />
          <Users />
        </Container>
      </NumbersProvider>
    </TransactionsProvider>
  );
}

export default App;
