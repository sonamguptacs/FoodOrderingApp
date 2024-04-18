import React from 'react'

export const RestaurantCard = (props) => {
  return (
    <div className="restaurant-card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.restaurant.info.cloudinaryImageId}`}
        alt="food"
        className="food-image"
      />
      <div className="details">
        <div className="restaurant-name">{props.restaurant.info.name}</div>
        <div className="ratings">{props.restaurant.info.avgRating}</div>
        <div className="cuisines">
          {props.restaurant.info.cuisines.join(', ')}
        </div>
      </div>
    </div>
  )
}
