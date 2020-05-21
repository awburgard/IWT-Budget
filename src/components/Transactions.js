import React, { Component } from 'react'
import { Input, Button, List, ListItem } from '@material-ui/core'

export default class Transactions extends Component {
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
      <div>
        <Input onChange={this.handleChange('cost')} placeholder='cost' />
        <Input onChange={this.handleChange('place')} placeholder='place' />
        <Button onClick={this.submitTransaction}>Add</Button>
        <List>{transactions}</List>
      </div>
    )
  }
}
