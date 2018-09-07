import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
  constructor() {
    super()
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.assignEvenAndOdds = this.assignEvenAndOdds.bind(this);
  }

  handleChange(val) {
    this.setState({ userInput: val })
  }

  assignEvenAndOdds(userInput) {
    let arr = userInput.split(',');
    let evens = []; 
    let odds = [];

    arr.forEach((e,i,a) => {
      if(e%2===0) {
        evens.push(parseInt(e,10))
      } else {
        odds.push(parseInt(e, 10))
      }
    })
    this.setState({
      evenArray: evens,
      oddArray: odds
    });
  }

  render() { 
  return (
    <div className="puzzleBox evenAndOddPB">
      <h4 className=""> Evens And Odds </h4>
      <input className="inputLine" 
      onChange={(e) => this.handleChange(e.target.value)}
      /> 
      <button className="confirmationButton" 
      onClick={() => this.assignEvenAndOdds(this.state.userInput)} 
      > Submit </button>
      <span className="resultsBox"> 
        Evens: {JSON.stringify(this.state.evenArray)} </span>
      <span className="resultsBox"> 
        Odds: {JSON.stringify(this.state.oddArray)} </span>
    </div>
  )}
}