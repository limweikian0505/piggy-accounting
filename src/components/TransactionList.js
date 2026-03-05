import React, { useState } from 'react';

const TransactionList = ({ transactions }) => {
    const [filter, setFilter] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    const filteredTransactions = transactions.filter(transaction => 
        transaction.description.toLowerCase().includes(filter.toLowerCase())
    );

    const sortedTransactions = filteredTransactions.sort((a, b) => {
        const aValue = sortOrder === 'asc' ? a.amount : b.amount;
        const bValue = sortOrder === 'asc' ? b.amount : a.amount;
        return aValue - bValue;
    });

    return (
        <div>
            <input
                type="text"
                placeholder="Filter by description"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <select onChange={(e) => setSortOrder(e.target.value)}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            <ul>
                {sortedTransactions.map(transaction => (
                    <li key={transaction.id}>{transaction.description}: ${transaction.amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;