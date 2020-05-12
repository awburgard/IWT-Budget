import React, { Component } from 'react'
import { NumbersContext } from './NumbersContext'

export default class Budget extends Component {
    render() {
        return (
            <NumbersContext.Consumer>
                {(context) => (
                    <>
                        <input onChange={context.handleChange("totalIncome")} />
                        <button onClick={context.totalIncome}>Submit</button>
                        <p>Total Income: {context.budget.totalIncome}</p>
                        <p>Monthly Fixed Costs: {context.budget.monthlyFixedCost}</p>
                        <p>Investments: {context.budget.investmentCost}</p>
                        <p>Savings: {context.budget.savingsCost}</p>
                        <p>Guilt Free Spending: {context.budget.guiltFreeSpending}</p>
                    </>
                )}
            </NumbersContext.Consumer>
        )
    }
}
