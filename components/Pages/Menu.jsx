import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { RestaurantCard } from '../MainContainer/RestaurantCard'
import { MenuCard } from './MenuCard'

const Menu = () => {
  const { id } = useParams()
  const [data, setData] = useState()
  const [menu, setMenu] = useState()
  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`,
      )
      const json = await response.json()
      console.log(json.data.cards[2]?.card?.card)
      setData(json.data.cards[2]?.card?.card)
      setMenu(
        json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card
          ?.card?.itemCards,
      )
    } catch {
      console.error('failed to fetch')
    }
  }
  console.log(data)
  useEffect(() => {
    fetchMenu()
  }, [])

  return data ? (
    <React.Fragment>
      <div className="menupage-card">
        <RestaurantCard restaurant={data} />
      </div>
      <div className="menu-list">
        {menu.map((item) => (
          <MenuCard item={item} />
        ))}
      </div>
    </React.Fragment>
  ) : null
}

export default Menu
