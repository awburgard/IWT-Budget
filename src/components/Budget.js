import React, { Component } from 'react'
import { NumbersContext } from './NumbersContext'
import { MyButton } from '../shared/Button'
import { Input, Typography, Grid } from '@material-ui/core'

export default class Budget extends Component {
    render() {
        return (
            <NumbersContext.Consumer>
                {(context) => (
                    <Grid container>
                        <Typography variant="h4" gutterBottom>{context.budget.date}</Typography>
                        <Grid container item lg={12}>
                            <Input onChange={context.handleChange("totalIncome")} />
                        </Grid>
                        <Grid container item lg={12}>
                            <MyButton onClick={context.totalIncome}>Submit</MyButton>
                        </Grid>
                        <Grid container item lg={12}>
                            <Typography>Total Income: {context.budget.totalIncome}</Typography>
                        </Grid>
                        <Grid container item lg={12}>
                            <Typography>Monthly Fixed Costs: {context.budget.monthlyFixedCost}</Typography>
                        </Grid>
                        <Grid container item lg={12}>
                            <Typography>Investments: {context.budget.investmentCost}</Typography>
                        </Grid>
                        <Grid container item lg={12}>
                            <Typography>Savings: {context.budget.savingsCost}</Typography>
                        </Grid>
                        <Grid container item lg={12}>
                            <Typography>Guilt Free Spending: {context.budget.guiltFreeSpending}</Typography>
                        </Grid>
                    </Grid>
                )}
            </NumbersContext.Consumer>
        )
    }
}
