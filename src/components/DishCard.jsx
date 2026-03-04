import React from 'react';

const DishCard = ({ dish, quantity, onUpdateCart }) => {
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

    const isVeg = dish_Type === 2; // Based on image: Spinach salad (veg) is 2, Chicken soup (non-veg) is 1. Double check API.
    // Actually, standard is 1: non-veg, 2: veg. Let me check the API data I read earlier.
    // "Spinach Salad" dish_Type: 2 (veg)
    // "Traditional New England Seafood Chowder" dish_Type: 1 (non-veg)
    // This confirms 1 is non-veg, 2 is veg.

    return (
        <div className="dish-card">
            <div className="dish-details">
                {/* Type Indicator */}
                <div className={`dish-type-indicator ${isVeg ? 'veg' : 'non-veg'}`}>
                    <div className="dot"></div>
                </div>

                {/* Info */}
                <h2 className="dish-name">{dish_name}</h2>
                <p className="dish-price">{dish_currency} {dish_price}</p>
                <p className="dish-description">{dish_description}</p>

                {/* Meta */}
                <div className="dish-meta">
                    {dish_Availability && (
                        <div className="quantity-controller">
                            <button
                                type="button"
                                className="quantity-btn"
                                onClick={() => onUpdateCart(dish_id, -1)}
                                disabled={quantity === 0}
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
                    )}

                    {!dish_Availability && (
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

export default DishCard;
