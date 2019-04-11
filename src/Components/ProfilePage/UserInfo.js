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
            <a href="#">Log out</a>
        </div>
    )
}

export default UserInfo;