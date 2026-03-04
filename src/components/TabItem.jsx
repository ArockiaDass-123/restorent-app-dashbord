import React from 'react';

const TabItem = ({ category, isActive, onSelectCategory }) => {
    const { menu_category, menu_category_id } = category;
    return (
        <button
            type="button"
            className={`tab ${isActive ? 'active' : ''}`}
            onClick={() => onSelectCategory(menu_category_id)}
        >
            {menu_category}
        </button>
    );
};

export default TabItem;
