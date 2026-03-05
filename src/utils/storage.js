'use strict';

/**
 * Utility functions for localStorage operations.
 */

const storageKey = 'piggyAccounting';

/**
 * Load data from localStorage
 * @returns {Object} Parsed data from localStorage
 */
function loadData() {
    const data = localStorage.getItem(storageKey);
    return data ? JSON.parse(data) : {};
}

/**
 * Save data to localStorage
 * @param {Object} data - The data to save
 */
function saveData(data) {
    localStorage.setItem(storageKey, JSON.stringify(data));
}

/**
 * Load transactions from localStorage
 * @returns {Array} The array of transactions
 */
function loadTransactions() {
    const data = loadData();
    return data.transactions || [];
}

/**
 * Save transactions to localStorage
 * @param {Array} transactions - The transactions to save
 */
function saveTransactions(transactions) {
    const data = loadData();
    data.transactions = transactions;
    saveData(data);
}

/**
 * Load categories from localStorage
 * @returns {Array} The array of categories
 */
function loadCategories() {
    const data = loadData();
    return data.categories || [];
}

/**
 * Save categories to localStorage
 * @param {Array} categories - The categories to save
 */
function saveCategories(categories) {
    const data = loadData();
    data.categories = categories;
    saveData(data);
}

/**
 * Load budget from localStorage
 * @returns {number} The budget amount
 */
function loadBudget() {
    const data = loadData();
    return data.budget || 0;
}

/**
 * Save budget to localStorage
 * @param {number} budget - The budget amount to save
 */
function saveBudget(budget) {
    const data = loadData();
    data.budget = budget;
    saveData(data);
}

module.exports = {
    loadTransactions,
    saveTransactions,
    loadCategories,
    saveCategories,
    loadBudget,
    saveBudget,
};