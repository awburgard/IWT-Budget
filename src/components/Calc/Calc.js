import React, { Component } from "react";
import './Calc.css';

class Calc extends Component {
  constructor(props){
    super(props);
    this.state = {
      totalIncome: 0,
      monthlyFixedCost: 0,
      investmentCost: 0,
      savingsCost: 0,
      guiltFreeSpending: 0,
      date: this.props.currentMonth 
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
        <div>
          <h1>{this.state.date}</h1>
        </div>
        <h3>Percentage Breakdown</h3>
        <input onChange={this.handleIncomeChange('totalIncome')}/>
        <button className="button" onClick={this.totalIncomeBreakdown}>Click</button>
        <p>Total Monthly Income: {this.state.totalIncome}</p>
        <p>Total Fixed Costs: {this.state.monthlyFixedCost}</p>
        <p>Total Investments: {this.state.investmentCost}</p>
        <p>Total Savings: {this.state.savingsCost}</p>
        <p>Guilt Free Spending: {this.state.guiltFreeSpending}</p>
      </div>
    );
  }
}

export default Calc;
