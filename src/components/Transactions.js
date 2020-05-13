import React, { Component } from 'react'
import { TransactionContext } from './TransactionsContext'

export default class Transactions extends Component {
    render() {
        return (
            <TransactionContext.Consumer>
                {(context) => (
                    <div>
                        <input onChange={context.handleChange(`${context.transactions.transactions}`)} placeholder='cost'></input>
                        <input onChange={context.handleChange("place")} placeholder='place'></input>
                        <button onClick={context.addTransaction}>Click me</button>
                    </div>
                )}

            </TransactionContext.Consumer>
        )
    }
}
