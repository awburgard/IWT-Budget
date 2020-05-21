import React from 'react'
import Budget from './Budget'
import { Container } from '@material-ui/core'
import Transactions from './Transactions'

function App() {
  return (
    <Container>
      <Budget />
      <Transactions />
    </Container>
  )
}

export default App
