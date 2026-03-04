import React from 'react';

const MenuTabs = ({ categories, activeCategoryId, onSelectCategory }) => {
    return (
        <nav className="tabs-container">
            {categories.map((category) => (
                <button
                    key={category.menu_category_id}
                    type="button"
                    className={`tab ${category.menu_category_id === activeCategoryId ? 'active' : ''}`}
                    onClick={() => onSelectCategory(category.menu_category_id)}
                >
                    {category.menu_category}
                </button>
            ))}
        </nav>
    );
};

export default MenuTabs;
