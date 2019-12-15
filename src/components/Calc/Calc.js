import React, { Component } from "react";

class Calc extends Component {
  state = {
    totalIncome: 0,
    monthlyFixedCost: 0,
    investmentCost: 0,
    savingsCost: 0,
    guiltFreeSpending: 0
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
      monthlyFixedCost:  monthlyFixedCost,
      investmentCost: investmentCost,
      savingsCost: savingsCost,
      guiltFreeSpending: guiltFreeSpending,
    });

    return({
      monthlyFixedCost,
      investmentCost,
      savingsCost,
      guiltFreeSpending,
    });
  };

  handleIncomeChange = totalIncome => (event) => {
    this.setState({
      [totalIncome]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Percentage Breakdown</h1>
        <input onChange={this.handleIncomeChange}/>
        <button onClick={this.totalIncomeBreakdown}>Click</button>
        <p>Total Income: {this.state.totalIncome}</p>
        <p>Total Monthly Fixed Costs: {this.state.monthlyFixedCost}</p>
        <p>Total Investments: {this.state.investmentCost}</p>
        <p>Total Savings: {this.state.savingsCost}</p>
        <p>Guilt Free Spending: {this.state.guiltFreeSpending}</p>
      </div>
    );
  }
}

export default Calc;
