import React from 'react';
import Purchase from './Purchase';

const RecentPurchases = (props) => {
    return (
        <div className="recent-purchases-container">
            <h3>Recent Purchases</h3>
            <table className="recent-purchases-table">
                <tr>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Date</th>
                </tr>
            <Purchase price="$5" memo="Sonic Milkshake" date="04/10/19" />
            <Purchase price="$10" memo="Mcdonalds Meal" date="04/09/19" />
            <Purchase price="$60" memo="New Shoes from FootLocker" date="04/05/19" />
            <Purchase price="$30" memo="Dinner date with Claire" date="04/02/19" />
            <Purchase price="$10" memo="Movie Night" date="03/25/19" />
            <Purchase price="$100" memo="New Pennyboard" date="03/22/19" />
            <Purchase price="$5" memo="Tacos from Taco Bell" date="03/17/19" />
            </table>
        </div>
    )
}


export default RecentPurchases;