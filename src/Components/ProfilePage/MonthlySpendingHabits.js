import React from 'react';
import Chart from 'react-google-charts';

const MonthlySpendingHabits = () => {
    return (
        <div className="monthly-spending-habits-container">
            <h3>Monthly Spending Habits</h3>
            <Chart
                chartType='LineChart'
                loader={<div>Loading Chart</div>}
                data={[
                    ['x', 'You Spent', 'Your Limit'],
                    ['January', 100, 200],
                    ['February', 150, 200],
                    ['March', 90, 200],
                    ['April', 120, 200],
                    ['May', 130, 200],
                    ['June', 50, 200],
                    ['July', 90, 200],
                    ['August', 160, 200],
                    ['September', 125, 200],
                    ['October', 85, 200],
                    ['November', 135, 200],
                    ['December', 240, 200]
                ]}

                options={{
                    hAxis: {
                        title:'Month'
                    },
                    vAxis: {
                        title:'Money Spent'
                    },
                    chartArea: {height: '100%'},
                    backgroundColor: {fill: 'none'}
                }}

            />
        </div>
    )
}

export default MonthlySpendingHabits;