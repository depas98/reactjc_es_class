import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleClick(event){
    const axios = require('axios');

    axios.get("https://restcountries.eu/rest/v2/all")
    .then(res => {
      console.log(res.data);
    }).catch(error => {
      console.error('Error', error)
    })
  }

  handlePostClick(event){
    const axios = require('axios');

    axios.post("http://test-routes.herokuapp.com/test/uppercase", {message: "This is an uppercase test"})
    .then(res => {
      console.log(res.data);
    }).catch(error => {
      console.error('Error', error)
    })
  }

  render() {
    return (
      <div className="App">
      <button onClick={e => this.handleClick(e)}>Get Countries</button>
      <button onClick={e => this.handlePostClick(e)}>Convert to UpperCase</button>  
      </div>
    );
  }

}

export default App;
