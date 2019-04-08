import React, { Component } from 'react';
import '../node_modules/normalize.css/normalize.css';
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import Landing from './Components/Landing';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasAccount: false,
      isLoggedIn: false
    }
  }

  render() {
    return (
      <div className="App">

        <div className="section profile-data">

        {
        this.state.hasAccount? <Login />
        : <Register />
        }
          
        </div>

        {
        this.state.isLoggedIn? 

        <div className="main-content-profile">
          <div className="section section-one">
          </div>

          <div className="section section-two">
          </div>

          <div className="section section-three">
          </div>

          <div className="section section-four">
          </div>

          <div className="section section-five">
          </div>

          <div className="section section-six">
          </div>

          <div className="section section-seven">
          </div>
        </div>
        : <Landing />
        }

      </div>
    );
  }
}

export default App;
