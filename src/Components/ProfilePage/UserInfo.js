import React from 'react';

const UserInfo = () => {
    return (
        <div className="user-info">
            <h3 className="user-name">fName, lName</h3>
            <div className="user-photo"></div>
            <h3 className="user-data-header">Monthly Income</h3>
            <div className="user-data">
                <p>Primary Income: $4000</p>
                <p>Secondary Income: $1000</p>
            </div>
            <h3 className="user-data-header">Monthly Savings</h3>
            <div className="user-data">
                <p>Primary Savings: $800</p>
                <p>Emergency Savings: $200</p>
            </div>
            <h3 className="user-data-header">Excess Funds</h3>
            <div className="user-data">
                <p>Total Excess Funds: $800</p>
                <p>Remaining Excess Funds: $200</p> <br />
            </div>
            <h3 className="user-data-header">Your Top Spending</h3>
            <div className="user-data">
                <p>Housing</p>
                <div className="top-spending-one">
                    <div className="top-spending-one-bar"></div>
                </div>
                <p>Food</p>
                <div className="top-spending-two">
                    <div className="top-spending-two-bar"></div>
                </div>
                <p>Loans</p>
                <div className="top-spending-three">
                    <div className="top-spending-three-bar"></div>
                </div>
            </div>
            <a href="#">Log out</a>
        </div>
    )
}

export default UserInfo;