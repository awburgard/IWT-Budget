import React, { useContext } from 'react'
import { NumbersContext } from './NumbersContext'
import { TransactionContext } from './TransactionsContext'

function HandleBudgetChange() {
    const budget = useContext(NumbersContext)
    const transaction = useContext(TransactionContext)

    console.log(transaction)

    const subtractTransaction = () => {
        transaction.transactions.transactions.map((item) => {
            let newTotal = budget.budget.totalIncome - item.cost
            console.log(newTotal)
        })
    }

    return (
        <div>
            <h1 onClick={subtractTransaction}>Hi</h1>
        </div>
    )

}

export default HandleBudgetChange
