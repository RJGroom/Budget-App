import React, { Component } from 'react';
import '../node_modules/normalize.css/normalize.css';
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import Landing from './Components/Landing';
import UserInfo from './Components/ProfilePage/UserInfo';
import SpendingLimit from './Components/ProfilePage/SpendingLimit';
import SpendingCategories from './Components/ProfilePage/SpendingCategories';
import TopSpending from './Components/ProfilePage/TopSpending';
import AddRecentPurchase from './Components/ProfilePage/AddRecentPurchase';
import RecentPurchases from './Components/ProfilePage/RecentPurchases';
import EmergencyFunds from './Components/ProfilePage/EmergencyFunds';
import Suggestions from './Components/ProfilePage/Suggestions';
import MonthlySpendingHabits from './Components/ProfilePage/MonthlySpendingHabits';
import UpcomingBills from './Components/ProfilePage/UpcomingBills';

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

          <div className="section emergency-funds">
            <EmergencyFunds />
          </div>

          <div className="section spending-categories">
            <SpendingCategories />
          </div>

          <div className="section top-spending">
            <TopSpending />
          </div>

          <div className="section monthly-spending-habits">
            <MonthlySpendingHabits />
          </div>

          <div className="section suggestions">
            <Suggestions />
          </div>

          <div className="section untitled-section-one">
          </div>

          <div className="section add-recent-purchase">
            <AddRecentPurchase />
          </div>

          <div className="section recent-purchases">
            <RecentPurchases />
          </div>

          <div className="section spending-limit">
            <SpendingLimit />
          </div>

          <div className="section upcoming-bills">
            <UpcomingBills />
          </div>

          <div className="section untitled-section-two">
          </div>
        </div>
        : <Landing />
        }

      </div>
    );
  }
}

export default App;
