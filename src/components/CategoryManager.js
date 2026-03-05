import React from 'react';
import PropTypes from 'prop-types';
import './CategoryManager.css';

const CategoryManager = ({ categories, onCategoryChange }) => {
    return (
        <div className="category-manager">
            <h2>Manage Categories</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category.name} className={`category-item ${category.type}`}>  
                        <span className="category-icon">{category.icon}</span>
                        <span className="category-name">{category.name}</span>
                    </li>
                ))}
            </ul>
            <button onClick={onCategoryChange}>Add Category</button>
        </div>
    );
};

CategoryManager.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            icon: PropTypes.node.isRequired,
            type: PropTypes.oneOf(['income', 'expense']).isRequired
        })
    ).isRequired,
    onCategoryChange: PropTypes.func.isRequired
};

export default CategoryManager;