import React from 'react'
import {
  Input,
  Button,
  List,
  ListItem,
  Grid,
  Typography,
} from '@material-ui/core'

class Transactions extends React.Component {
  state = {
    cost: null,
    place: null,
    listOfTransactions: [],
  }

  addTransaction = ({ cost, place }) => {
    this.setState({
      listOfTransactions: [...this.state.listOfTransactions, { cost, place }],
    })
  }

  handleChange = (property) => (event) => {
    this.setState({
      [property]: event.target.value,
    })
  }

  submitTransaction = () => {
    this.addTransaction({ cost: this.state.cost, place: this.state.place })
  }

  render() {
    const transactions = this.state.listOfTransactions.map(
      ({ place, cost }) => (
        <ListItem>
          {place} {cost}
        </ListItem>
      )
    )
    return (
      <>
        <Grid>
          <Typography variant='h5' align='center'>
            Add Your Purchases Here
          </Typography>
        </Grid>
        <Grid container justify='center'>
          <Input onChange={this.handleChange('cost')} placeholder='cost' />
          <Input onChange={this.handleChange('place')} placeholder='place' />
          <Button onClick={this.submitTransaction}>Add Transaction</Button>
          <List>{transactions}</List>
        </Grid>
      </>
    )
  }
}

export default Transactions
