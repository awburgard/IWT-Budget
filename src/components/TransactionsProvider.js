import React, { Component } from 'react'
import { TransactionContext } from './TransactionsContext'

export default class TransactionsProvider extends Component {
    state = {
        transactions: [
            {
                cost: 0,
                name: 'bread',
            }
        ]
    }

    addTransaction = ({ name, cost }) => {
        this.state.transactions.push({ name, cost })
        this.setState({
            ...this.state,
        })
        console.log(this.state)
    }

    handleChange = property => event => {
        const transaction = { [property]: event.target.value }
        return this.addTransaction(transaction)
    };


    render() {
        return (
            <TransactionContext.Provider value={{
                transactions: this.state,
                addTransaction: this.addTransaction,
                handleChange: this.handleChange
            }}>
                {this.props.children}
            </TransactionContext.Provider>
        )
    }
}
