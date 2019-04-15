import React from 'react';
import Bill from './Bill';

const UpcomingBills = (props) => {
    return (
        <div className="upcoming-bills-container">
            <h3>Upcoming Bills</h3>
            <table className="upcoming-bills-table">
                <tr>
                    <th>Avg. Cost</th>
                    <th>Description</th>
                    <th>Date</th>
                </tr>
            <Bill price="$50" memo="Water Bill" date="05/22/19" />
            <Bill price="$40" memo="Auto Insurance" date="05/24/19" />
            <Bill price="$100" memo="Gas Bill" date="06/05/19" />
            <Bill price="$120" memo="Electric Bill" date="06/09/19" />
            <Bill price="$200" memo="Health Insurance" date="06/10/19" />
            <Bill price="$400" memo="Mortgage" date="06/12/19" />
            <Bill price="$70" memo="Cable/Internet" date="06/17/19" />
            </table>
        </div>
    )
}

export default UpcomingBills;