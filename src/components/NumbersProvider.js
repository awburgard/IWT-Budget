import React, { Component } from "react";
import { NumbersContext } from './NumbersContext'
import CurrentMonth from './CurrentMonth'

class NumbersProvider extends Component {
  state = {
    totalIncome: 0,
    monthlyFixedCost: 0,
    investmentCost: 0,
    savingsCost: 0,
    guiltFreeSpending: 0,
    transactions: 0,
    date: <CurrentMonth />
  };

  totalIncomeBreakdown = () => {
    const monthlyFixedCostsPer = 0.6;
    const investmentPer = 0.05;
    const savingsPer = 0.1;
    const guiltFreeSpendingPer = 0.25;
    let monthlyFixedCost = this.state.totalIncome * monthlyFixedCostsPer;
    let investmentCost = this.state.totalIncome * investmentPer;
    let savingsCost = this.state.totalIncome * savingsPer;
    let guiltFreeSpending = this.state.totalIncome * guiltFreeSpendingPer;

    this.setState({
      monthlyFixedCost,
      investmentCost,
      savingsCost,
      guiltFreeSpending
    });
  };

  handleChange = property => event => {
    this.setState({
      [property]: event.target.value
    });
  };

  render() {
    return (
      <NumbersContext.Provider value={{
        budget: this.state,
        totalIncome: this.totalIncomeBreakdown,
        handleChange: this.handleChange
      }}>
        {this.props.children}
      </NumbersContext.Provider>
    );
  }
}

export default NumbersProvider;
