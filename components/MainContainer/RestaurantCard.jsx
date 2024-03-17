import React from 'react'

export const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mocil3npmwpcdcfaxql1"
        alt="food"
        className="food-image"
      />
      <div className="details">
        <div className="restaurant-name">Restaurant Name</div>
        <div className="ratings">4.0</div>
        <div className="cuisines">Cuisines</div>
      </div>
    </div>
  )
}
