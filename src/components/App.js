import React, { Component } from 'react';
import Nav from './Nav';
import '../css/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      test: ""
    }
  }

    render() {
      return (
        <div>
          <Nav/>
          <h1>Home</h1>
        </div>      
      )
    }
}

export default App;
