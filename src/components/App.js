import React from 'react'
import Budget from './Budget'
import { Container, Typography } from '@material-ui/core'
import Transactions from './Transactions'

function App() {
  return (
    <Container>
      <Typography align="center" display="block" color="error" variant="h6" gutterBottom="true">
        This app is a work in progress. Input your total monthly income and the
        calculator will return set amounts based on different percents for each
        category
      </Typography>
      <Budget />
      {/* <Transactions /> */}
    </Container>
  )
}

export default App
