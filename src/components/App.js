import React, { Component } from 'react';
import Nav from './Nav';
import '../css/App.css';
import logo from '../img/jonathan_logo.png'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      test: ""
    }
  }

    render() {
      return (
        <div className="home-container">
          <Nav/>
          <div className="home-header">
            <h1>Home</h1>
          </div>
          <div className="home-body">
            <div className="profile">
              <h3>Jonathan Guzman</h3>
              <img src={logo} alt="Self Portait"></img>
            </div>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla eget erat velit. Nulla tempus condimentum elit vitae aliquam. 
                Donec at consectetur tortor, vitae laoreet libero. 
                Etiam mauris ipsum, egestas quis arcu ac, sagittis efficitur erat. 
                Nunc id leo nec ipsum ullamcorper pellentesque quis sed risus. 
                Maecenas rutrum sem id nisl consectetur, id consequat dui bibendum. 
                Integer scelerisque tincidunt varius. Ut congue non elit ac dapibus. 
                Praesent eu enim neque.
              </p>
              <p>
                Aliquam ullamcorper ultrices ultricies. 
                Curabitur venenatis malesuada ante, eu vehicula tortor malesuada a. 
                Suspendisse vel molestie dui. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nunc euismod tortor vel libero malesuada, sit amet viverra diam fringilla. 
                Ut lobortis quam sit amet sodales feugiat. 
                Sed lacinia, neque at sodales ornare, nunc dolor posuere lacus, sit amet suscipit leo augue ac augue. 
                Curabitur porta orci at ipsum lacinia, vel rhoncus nunc placerat. 
                Fusce dui lorem, vulputate eu libero id, ultricies tincidunt mi.
              </p>
            </div>
          </div>
        </div>      
      )
    }
}

export default App;
