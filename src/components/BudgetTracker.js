import React, { useState } from 'react';

const BudgetTracker = () => {
    const [budgets, setBudgets] = useState({});

    const handleBudgetChange = (category, value) => {
        setBudgets(prev => ({ ...prev, [category]: value }));
    };

    return (
        <div>
            <h2>Budget Tracker</h2>
            <form>
                {['Food', 'Transport', 'Entertainment', 'Groceries'].map((category) => (
                    <div key={category}>
                        <label>{category} Budget:</label>
                        <input
                            type="number"
                            onChange={(e) => handleBudgetChange(category, e.target.value)}
                        />
                    </div>
                ))}
            </form>
            <div>
                <h3>Current Budgets</h3>
                <ul>
                    {Object.entries(budgets).map(([category, amount]) => (
                        <li key={category}>{category}: ${amount}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BudgetTracker;