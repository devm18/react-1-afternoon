/* 
re: react-1-afternoon/src/components/TopicBrowser/TopicBrowser.js

Note: 
I added the styling to <p> in step 1 for extra learning (step 2 replaces <p> with new stuff).
1. css style sheets files (main.css) - uses normal css rules. 
2. css inline variables - use the = sign and the property names are camelCase, not hyphen-case
3. css inline style - use {{ }} sign and the property names are camelCase, not hyphen-case

      const pStyle = { color: 'blue' }       
      render() { 
        return ( 
        <p style={{ fontSize: '48px' }}> Hello What! </p> 
        <p style={pStyle}>~ Bertie Wooster </p> 
        )
      }
Note: 
return can only return one html tag, since there are two p tags, you must wrap them within a single div tag. 

Note: 
App.js fails if an imported component does not render an html tag.

MEMORIZE: 
onChange={(e) => this.handleChange(e.target.value)}
onClick={() => this.assignEvensAndOdds(this.state.userInput)}

completed up to step 5 
Resume filterString 


*/
