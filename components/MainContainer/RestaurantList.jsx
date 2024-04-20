import React, { useEffect, useState } from 'react'
import './list.css'
import { RestaurantCard } from './RestaurantCard'
import { Link } from 'react-router-dom'

export const RestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await fetch(
      'https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',
    )
    const data = await response.json()
    setRestaurantList(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    )
  }

  return (
    <div className="restaurant-list">
      {restaurantList?.map((restaurant) => (
        <Link to={`/restaurant/menu/${restaurant.info.id}`}>
          <RestaurantCard restaurant={restaurant} />
        </Link>
      ))}
    </div>
  )
}
