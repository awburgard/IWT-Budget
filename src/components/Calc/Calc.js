import React, { Component } from "react";
import "./Calc.css";
import CurrentMonth from "../CurrentMonth/CurrentMonth";

class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalIncome: 0,
      monthlyFixedCost: 0,
      investmentCost: 0,
      savingsCost: 0,
      guiltFreeSpending: 0,
      transactions: 0,
      date: <CurrentMonth />
    };
  }

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
      <div>
        <div>{this.state.date}</div>
        <h3>Percentage Breakdown</h3>
        <input onChange={this.handleChange("totalIncome")} />
        <button className="button" onClick={this.totalIncomeBreakdown}>
          Click
        </button>
        <p>Total Monthly Income: {this.state.totalIncome}</p>
        <p>Total Fixed Costs: {this.state.monthlyFixedCost}</p>
        <p>Total Investments: {this.state.investmentCost}</p>
        <p>Total Savings: {this.state.savingsCost}</p>
        <p>Guilt Free Spending: {this.state.guiltFreeSpending}</p>
        <p>Transactions: {this.state.transactions}</p>
        <input onChange={this.handleChange("transactions")}></input>
        <button>Add</button>
      </div>
    );
  }
}

export default Calc;
