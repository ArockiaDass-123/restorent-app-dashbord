import React from 'react';

const DishItem = ({ dish, quantity, onUpdateCart }) => {
    const {
        dish_name,
        dish_price,
        dish_image,
        dish_currency,
        dish_calories,
        dish_description,
        dish_Availability,
        dish_Type,
        addonCat,
        dish_id
    } = dish;

    const isVeg = dish_Type === 2;

    return (
        <div className="dish-card">
            <div className="dish-details">
                {/* Type Indicator */}
                <div className={`dish-type-indicator ${isVeg ? 'veg' : 'non-veg'}`}>
                    <div className="dot"></div>
                </div>

                {/* Info */}
                <h1 className="dish-name">{dish_name}</h1>
                <p className="dish-price">{dish_currency} {dish_price}</p>
                <p className="dish-description">{dish_description}</p>

                {/* Meta */}
                <div className="dish-meta">
                    {dish_Availability ? (
                        <div className="quantity-controller">
                            <button
                                type="button"
                                className="quantity-btn"
                                onClick={() => onUpdateCart(dish_id, -1)}
                            >
                                -
                            </button>
                            <p className="quantity-value">{quantity}</p>
                            <button
                                type="button"
                                className="quantity-btn"
                                onClick={() => onUpdateCart(dish_id, 1)}
                            >
                                +
                            </button>
                        </div>
                    ) : (
                        <p className="availability-text">Not available</p>
                    )}

                    {addonCat && addonCat.length > 0 && (
                        <p className="customization-text">Customizations available</p>
                    )}
                </div>
            </div>

            <div className="dish-image-container">
                <p className="calories">{dish_calories} calories</p>
                <img src={dish_image} alt={dish_name} className="dish-image" />
            </div>
        </div>
    );
};

export default DishItem;
