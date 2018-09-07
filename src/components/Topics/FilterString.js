import React, { Component } from 'react';

export default class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      names: ['Jake', 'Jason', 'Chad', 'Katie', 'Meghan', 'Jessica', 'Alec'],
      userInput: '',
      filteredNames: []
    }
    // bind
    this.handleChange = this.handleChange.bind(this); 
    this.filterNames = this.filterNames.bind(this);
  }

  handleChange(val) {
    this.setState({ userInput: val })
  }

  filterNames(chars) {
    let arr = this.state.names;
    let newArr = this.state.filteredNames;
    newArr = arr.filter(e => e.includes(chars)); 
    this.setState({ filteredNames: newArr })
  }

  render() { 
    return (
      <div className="puzzleBox filterStringPB">
        <h4 className=""> Filter String </h4>
        <span 
        className="puzzleText"> 
        Names: {JSON.stringify(this.state.names, null, 1)} </span>
        <input 
        className="inputLine"
        onChange={ (e) => this.handleChange(e.target.value) }> 
        </input>
        <button 
        className="confirmationButton"
        onClick={ () => this.filterNames(this.state.userInput) }> 
        Filter </button>
        <span 
        className="resultsBox filterStringRB"
        > Filtered Names: {JSON.stringify(this.state.filteredNames, null, 1)}
        </span>
      </div>
    )
  }
}

