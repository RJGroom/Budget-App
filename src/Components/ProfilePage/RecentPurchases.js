import React from 'react';
import Purchase from './Purchase';

const RecentPurchases = (props) => {
    return (
        <div className="recent-purchases-container">
            <h3>Recent Purchases</h3>
            <table className="recent-purchases-table">
                <Purchase price="$5" memo="Sonic Milkshake" date="04/10/19" />
                <Purchase price="$10" memo="Mcdonald's Meal" date="04/09/19" />
                <Purchase price="$60" memo="New Shoes from Foot Locker" date="04/05/19" />
                <Purchase price="$30" memo="Dinner date with Claire" date="04/02/19" />
            </table>
        </div>
    )
}


export default RecentPurchases;