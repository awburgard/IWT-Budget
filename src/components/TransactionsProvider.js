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
        console.log(cost)
        console.log(place)
        this.setState({
            transactions: [...this.state.transactions, { cost, place }]
        })
    }

    handleChange = property => event => {
        console.log(property)
        this.setState({
            transactions:[...this.state.transactions, { [property]: event.target.value }]
        })
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
