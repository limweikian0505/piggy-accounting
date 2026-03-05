import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('income');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount > 0 && category) {
            const transaction = { amount, category, type, date: new Date() };
            onAddTransaction(transaction);
            setAmount(0);
            setCategory('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Amount:
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Category:
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Type:
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </label>
            </div>
            <button type="submit">Add Transaction</button>
        </form>
    );
};

export default TransactionForm;