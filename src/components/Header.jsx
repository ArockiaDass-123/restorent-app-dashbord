import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Header = ({ restaurantName, cartCount }) => {
  return (
    <header className="header">
      <h1 className="restaurant-name">{restaurantName}</h1>
      <div className="header-right">
        <p className="my-orders">My Orders</p>
        <div className="cart-container">
          <ShoppingCart className="cart-icon" />
          <span className="cart-count-badge">{cartCount}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
