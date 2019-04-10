import React, { Component } from 'react';
import '../node_modules/normalize.css/normalize.css';
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import Landing from './Components/Landing';
import UserInfo from './Components/ProfilePage/UserInfo';
import AddRecentPurchase from './Components/ProfilePage/AddRecentPurchase';
import RecentPurchases from './Components/ProfilePage/RecentPurchases';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasAccount: true,
      isLoggedIn: true
    }
  }

  render() {
    return (
      <div className="App">

        <div className="section profile-data">

        {
        this.state.isLoggedIn?
          <UserInfo />
        :
          this.state.hasAccount? <Login />
          : <Register />
        }
          
        </div>

        {
        this.state.isLoggedIn? 

        <div className="main-content-profile">
          <div className="section section-one">
          </div>

          <div className="section add-recent-purchase">
            <AddRecentPurchase />
          </div>

          <div className="section recent-purchases">
            <RecentPurchases />
          </div>

          <div className="section section-three">
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
