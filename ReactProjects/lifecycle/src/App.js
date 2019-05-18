import React, { Component } from 'react';
import './App.css';


class App extends Component{

  constructor(props){
    console.log('constructor');
    super(props)
    this.state = {count: 0};
  }

  componentDidMount(){
    console.log("componentDidMount")
  }

  componentDidUpdate(){
    console.log("componentDidUpdate")
  }

  shouldComponentUpdate(props, newState){
    if (newState.count%3 === 0){
      return true;
    }
    else{
      return false;
    }
  }

  handleClick(event){
    this.setState((state) => ({
      count: state.count + 1
    }));
  }

  render(){ 
    return  <div className="App">
      <button onClick = {e => this.handleClick(e)}>Click Me</button>
      <br/>{this.state.count}
  </div>
  }
}

// export default App;
export default App;