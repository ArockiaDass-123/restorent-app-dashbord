import React from 'react';

const MenuTabs = ({ categories, activeCategoryId, onSelectCategory }) => {
    return (
        <nav className="tabs-container">
            {categories.map((category) => (
                <div
                    key={category.menu_category_id}
                    className={`tab ${category.menu_category_id === activeCategoryId ? 'active' : ''}`}
                    onClick={() => onSelectCategory(category.menu_category_id)}
                >
                    {category.menu_category}
                </div>
            ))}
        </nav>
    );
};

export default MenuTabs;
