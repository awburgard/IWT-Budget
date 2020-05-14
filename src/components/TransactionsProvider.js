import React, { Component } from 'react'
import { TransactionContext } from './TransactionsContext'

export default class TransactionsProvider extends Component {
    state = {
        transactions: [
            {
                cost: 100,
                place: 'costco',
            }
        ]
    }

    addTransaction = ({ cost, place }) => {
        this.setState({
            transactions: [...this.state.transactions, { cost, place }]
        })
    }

    render() {
        return (
            <TransactionContext.Provider value={{
                transactions: this.state,
                addTransaction: this.addTransaction,
            }}>
                {this.props.children}
            </TransactionContext.Provider>
        )
    }
}
