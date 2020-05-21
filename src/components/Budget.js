import React from 'react'
import { MyButton } from '../shared/Button'
import { Input, Typography, Grid } from '@material-ui/core'
import CurrentMonth from './CurrentMonth'

class Budget extends React.Component {
  state = {
    totalIncome: 0,
    monthlyFixedCost: 0,
    investmentCost: 0,
    savingsCost: 0,
    guiltFreeSpending: 0,
    transactions: 0,
    date: <CurrentMonth />,
  }

  totalIncomeBreakdown = () => {
    const monthlyFixedCostsPer = 0.6
    const investmentPer = 0.05
    const savingsPer = 0.1
    const guiltFreeSpendingPer = 0.25
    let monthlyFixedCost = this.state.totalIncome * monthlyFixedCostsPer
    let investmentCost = this.state.totalIncome * investmentPer
    let savingsCost = this.state.totalIncome * savingsPer
    let guiltFreeSpending = this.state.totalIncome * guiltFreeSpendingPer

    this.setState({
      monthlyFixedCost,
      investmentCost,
      savingsCost,
      guiltFreeSpending,
    })
  }

  handleChange = (property) => (event) => {
    this.setState({
      [property]: event.target.value,
    })
  }

  render() {
    return (
      <Grid container>
        <Typography variant='h4' gutterBottom>
          {this.state.date}
        </Typography>
        <Grid container item lg={12}>
          <Input onChange={this.handleChange('totalIncome')} />
        </Grid>
        <Grid container item lg={12}>
          <MyButton onClick={this.totalIncomeBreakdown}>Submit</MyButton>
        </Grid>
        <Grid container item lg={12}>
          <Typography color='primary' gutterBottom>
            Total Income: {this.state.totalIncome}
          </Typography>
        </Grid>
        <Grid container item lg={12}>
          <Typography gutterBottom>
            Monthly Fixed Costs: {this.state.monthlyFixedCost}
          </Typography>
        </Grid>
        <Grid container item lg={12}>
          <Typography gutterBottom>
            Investments: {this.state.investmentCost}
          </Typography>
        </Grid>
        <Grid container item lg={12}>
          <Typography gutterBottom>
            Savings: {this.state.savingsCost}
          </Typography>
        </Grid>
        <Grid container item lg={12}>
          <Typography gutterBottom>
            Guilt Free Spending: {this.state.guiltFreeSpending}
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

export default Budget
