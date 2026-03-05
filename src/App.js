import React from 'react';

const App = () => {
    const income = 1000; // Example income
    const expenses = 500; // Example expenses

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Piggy-Themed Finance Dashboard</h1>
            <div style={{ background: '#ffcccb', padding: '20px', borderRadius: '10px' }}>
                <h2>Income:</h2>
                <h3>${income}</h3>
            </div>
            <div style={{ background: '#ccffcc', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
                <h2>Expenses:</h2>
                <h3>${expenses}</h3>
            </div>
        </div>
    );
};

export default App;