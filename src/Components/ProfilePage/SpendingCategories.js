import React from 'react';
import {Chart} from 'react-google-charts';

const options = {
    title: "Monthly Spending By Category",

}

const SpendingCategories = () => {
    return (
        <div className="spending-categories-container">
            <h3>Spending Categories</h3>
            <Chart
                chartType='PieChart'
                height='90%'
                width='100%'
                loader={<div>Loading Chart...</div>}
                data={[
                    ['Category', 'Income Allocated'],
                    ['Item 1', 10],
                    ['Item 2', 40],
                    ['Item 3', 20],
                    ['Item 4', 10],
                    ['Item 5', 20]
                ]}
                options={{
                    chartArea: {width: '90%', height: '90%'},
                    backgroundColor: {fill: 'transparent'},
                    enableInteractivity: false,
                    pieSliceBorderColor: 'none',
                    legend: {position: 'labeled'},
                }}
            />
        </div>
    )
}

export default SpendingCategories;