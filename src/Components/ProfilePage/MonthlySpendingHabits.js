import React from 'react';
import Chart from 'react-google-charts';

const MonthlySpendingHabits = () => {
    return (
        <div className="monthly-spending-habits-container">
            <h3>Monthly Spending Habits</h3>
            <Chart
                chartType='LineChart'
                width='100%'
                height='90%'
                loader={<div>Loading Chart...</div>}
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
                        title:'Month',
                        titleTextStyle: {bold: 'true'}
                    },
                    vAxis: {
                        title:'Money Spent',
                        titleTextStyle: {bold: 'true'},
                        format: '$###,###,###'
                    },
                    legend: {position: 'top', alignment: 'center'},
                    chartArea: {height: '60%', width: 'auto'},
                    backgroundColor: {fill: 'none'}
                }}

            />
        </div>
    )
}

export default MonthlySpendingHabits;