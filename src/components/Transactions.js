import React, { Component } from 'react'
import { Input, Button } from '@material-ui/core'
import { TransactionContext } from './TransactionsContext'

export default class Transactions extends Component {

    state = {
        cost: null,
        place: null
    }

    handleChange = property => event => {
        this.setState({
            [property]: event.target.value
        });
    };

    submitTransaction = (context) => () => {
        context.addTransaction(this.state)
    }


    render() {
        return (
            <TransactionContext.Consumer>
                {(context) => (
                    <div>
                        <Input onChange={this.handleChange("cost")} placeholder='cost' />
                        <Input onChange={this.handleChange("place")} placeholder='place' />
                        <Button onClick={this.submitTransaction(context)}>Add</Button>
                    </div>
                )}

            </TransactionContext.Consumer>
        )
    }
}
