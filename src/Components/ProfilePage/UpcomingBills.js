import React from 'react';
import Bill from './Bill';

const UpcomingBills = (props) => {
    return (
        <div className="upcoming-bills-container">
            <h3>Upcoming Bills</h3>
            <table className="upcoming-bills-table">
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Avg. Cost</th>
                </tr>
            <Bill date="05/22/19" memo="Water Bill" price="$50" />
            <Bill date="05/24/19" memo="Auto Insurance" price="$40" />
            <Bill date="06/05/19" memo="Gas Bill" price="$100" />
            <Bill date="06/09/19" memo="Electric Bill" price="$120" />
            <Bill date="06/10/19" memo="Health Insurance" price="$200" />
            <Bill date="06/12/19" memo="Mortgage" price="$400" />
            <Bill date="06/17/19" memo="Cable/Internet" price="$70" />
            </table>
        </div>
    )
}

export default UpcomingBills;