import React from 'react';

const TopSpending = () => {
    return (
        <div className="top-spending-container">
            <h3 className="top-spending-header">Your Top Spending</h3>
            <div className="top-spending-data">
                <p>Housing (57%)</p>
                <div className="top-spending-one">
                    <div className="top-spending-one-bar"></div>
                </div>
                <p>Food (33%)</p>
                <div className="top-spending-two">
                    <div className="top-spending-two-bar"></div>
                </div>
                <p>Loans (22%)</p>
                <div className="top-spending-three">
                    <div className="top-spending-three-bar"></div>
                </div>
            </div>
        </div>
    )
}

export default TopSpending;