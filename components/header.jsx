import React from 'react'

export const Header = () => {
  return (
    <div className="header">
      <img
        src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png"
        alt="logo"
        className="logo"
      />
      <ul className="menu">
        <li>Search</li>
        <li>Help</li>
        <li>Cart</li>
        <li>Sign In</li>
      </ul>
    </div>
  )
}
