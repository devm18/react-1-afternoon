import React, { Component } from 'react';

export default class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      employees:  [ 
        { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, 
        { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" },
        { "name": "Carly Armstrong", "title": "CEO" } 
      ], 
      userInput: '',
      filteredEmployees: []
    }
    this.handleChange = this.handleChange.bind(this); 
    this.filterEmployees = this.filterEmployees.bind(this); 
  }

  handleChange(val) {
    this.setState({ userInput: val })
  }

  filterEmployees(userInput) {
    let employees = this.state.employees;  
    let filteredEmployees = employees.filter(elem => { 
      return elem.hasOwnProperty(userInput)
    });
    this.setState({ filteredEmployees: filteredEmployees })
  }

  // filterEmployees(userInput) {
  //   var employees = this.state.employees;
  //   var filteredEmployees = [];
  //   for ( var i = 0; i < employees.length; i++ ) {
  //     if ( employees[i].hasOwnProperty(userInput) ) {
  //       filteredEmployees.push(employees[i]);
  //     }
  //   }
  //   this.setState({ filteredEmployees: filteredEmployees });
  // }


  render() { 

    let handleChange = (val) => {
      this.setState({ userInput: val })
    }

    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> 
          Original: { JSON.stringify(this.state.employees, null, 10) } </span>
        <input className="inputLine" 
        onChange={(e) => this.handleChange(e.target.value) }></input> 
        <button className="confirmationButton"
        onClick={()=> this.filterEmployees(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"
        > Filtered: {JSON.stringify(this.state.filteredEmployees, null, 10)} </span>
      </div>
    )
  }
}