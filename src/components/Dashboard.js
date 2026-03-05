import React from 'react';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
    const data = {
        labels: ['Income', 'Expenses'],
        datasets: [
            {
                label: 'Overview',
                data: [5000, 2000],
                backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }
        ]
    };

    return (
        <div>
            <h2>Income and Expenses Overview</h2>
            <Bar data={data} />
            <div>
                <h3>Summary</h3>
                <p>Total Income: $5000</p>
                <p>Total Expenses: $2000</p>
                <p>Net Income: $3000</p>
            </div>
        </div>
    );
};

export default Dashboard;
