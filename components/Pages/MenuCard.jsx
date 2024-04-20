import React from 'react'

export const MenuCard = (props) => {
  return (
    <div>
      <div
        className={props?.item?.card?.info?.isVeg ? 'veg-icon' : 'non-veg-icon'}
      ></div>
      {props?.item?.card?.info?.ratings?.aggregatedRating?.rating}
      <h3>{props?.item?.card?.info?.name}</h3>
      <div className="food-desc">{props?.item?.card?.info?.description}</div>
    </div>
  )
}
