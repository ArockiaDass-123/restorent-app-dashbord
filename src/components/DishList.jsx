import React from 'react';
import DishItem from './DishItem';

const DishList = ({ dishes, cartItems, onUpdateCart }) => {
    return (
        <div className="dish-list">
            {dishes.map((dish) => (
                <DishItem
                    key={dish.dish_id}
                    dish={dish}
                    quantity={cartItems[dish.dish_id] || 0}
                    onUpdateCart={onUpdateCart}
                />
            ))}
        </div>
    );
};

export default DishList;
