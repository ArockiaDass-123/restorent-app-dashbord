import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TabItem from './components/TabItem';
import DishList from './components/DishList';
import './index.css';

const API_URL = 'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details';

const App = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [cartItems, setCartItems] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const restaurant = data[0];
        setRestaurantData(restaurant);
        if (restaurant.table_menu_list?.length > 0) {
          setActiveCategoryId(restaurant.table_menu_list[0].menu_category_id);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching menu details:', error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const totalCartCount = Object.values(cartItems).reduce((acc, count) => acc + count, 0);

  const updateCartCount = (dishId, delta) => {
    setCartItems((prev) => {
      const newCount = Math.max(0, (prev[dishId] || 0) + delta);
      return { ...prev, [dishId]: newCount };
    });
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading menu...</p>
      </div>
    );
  }

  const activeCategory = restaurantData.table_menu_list.find(
    (cat) => cat.menu_category_id === activeCategoryId
  );

  return (
    <div className="container">
      <Header
        restaurantName={restaurantData.restaurant_name}
        cartCount={totalCartCount}
      />
      <nav className="tabs-container">
        {restaurantData.table_menu_list.map((category) => (
          <TabItem
            key={category.menu_category_id}
            category={category}
            isActive={category.menu_category_id === activeCategoryId}
            onSelectCategory={setActiveCategoryId}
          />
        ))}
      </nav>
      <DishList
        dishes={activeCategory?.category_dishes || []}
        cartItems={cartItems}
        onUpdateCart={updateCartCount}
      />
    </div>
  );
};

export default App;
