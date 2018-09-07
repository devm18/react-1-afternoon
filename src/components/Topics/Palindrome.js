import React, { Component } from 'react'; 

export default class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      palindrome: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.isPalindrome = this.isPalindrome.bind(this);
  }

  handleChange(val) {
    this.setState({userInput: val})
  }  

  isPalindrome(str) {
    let string = str.toLowerCase().replace(/\W/g, ''); // clean up
    let reverse = string.split('').reverse().join(''); // reverse 
    let result = string === reverse; 
    result = JSON.stringify(result); 
    this.setState({ palindrome: result }); 
  }

  // isPalindrome(str) {
  //   let string = str.toLowerCase().replace(/\W/g, ''); // clean up
  //   let result = string.every((e,i) => e === str[string.length-1 -i ]); 
  //   result = JSON.stringify(result);
  //   this.setState({ palindrome: result }); 
  // }

  render() { 
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Palindrome Component </h4>
        <input 
        className="inputLine" 
        onChange={e=>this.handleChange(e.target.value)}
        ></input>
        <button 
        className="confirmationButton" 
        onClick={()=> this.isPalindrome(this.state.userInput)}
        >Check</button>
        <span 
        className="resultsBox"
        > Palindrome: { this.state.palindrome }</span>
      </div>
    )
  }
}