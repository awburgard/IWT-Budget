import React, { Component } from 'react'
import { TransactionContext } from './TransactionsContext'

export default class Transactions extends Component {
    render() {
        return (
            <TransactionContext.Consumer>
                {(context) => (
                    <div>
                        <input onChange={context.handleChange('cost')}></input>
                        <input onChange={context.handleChange('name')}></input>
                        <button onClick={context.addTransaction}>Click me</button>
                        <p>{context.transactions.transactions[0].cost}</p>
                    </div>
                )}

            </TransactionContext.Consumer>
        )
    }
}
