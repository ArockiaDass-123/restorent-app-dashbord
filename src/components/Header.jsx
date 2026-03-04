import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Header = ({ restaurantName, cartCount }) => {
  return (
    <header className="header">
      <h1 className="restaurant-name">{restaurantName}</h1>
      <div className="cart-container">
        <ShoppingCart className="cart-icon" />
        <span className="cart-count">{cartCount}</span>
      </div>
    </header>
  );
};

export default Header;
