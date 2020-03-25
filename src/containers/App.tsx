import React, { useState, useEffect } from 'react';

import { Restaurant } from '../components/Restaurant.component'
const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [ascOrder, setAscOrder] = useState(true);

  useEffect(() => {
    fetch('./restaurants.JSON')
      .then(res => res.json())
      .then(data =>
        setRestaurants(data['restaurants'])
      )
  }, []);

  const renderedRestaurants = restaurants.map((restaurant: any, key: number) => {
    return <Restaurant key={key} imageUrl={restaurant.image} name={restaurant.name} />
  })



  const sortData = () => {
    let sortedRestaurants = []
    if (ascOrder) {
      // ascending order
      sortedRestaurants = restaurants.sort((restaurant_1: any, restaurant_2: any) =>
        (restaurant_1.name > restaurant_2.name) ? 1 : ((restaurant_2.name > restaurant_1.name) ? -1 : 0)
      );
    } else {
      // descending order
      sortedRestaurants = restaurants.sort((restaurant_1: any, restaurant_2: any) =>
        (restaurant_2.name > restaurant_1.name) ? 1 : ((restaurant_1.name > restaurant_2.name) ? -1 : 0)
      );
    }
    setRestaurants(sortedRestaurants)
    setAscOrder(!ascOrder)

  }

  return (
    <div>
      <button onClick={sortData}>Sort Restaurants Alphabetically </button>
      {renderedRestaurants}
    </div>
  );
}

export default App;
