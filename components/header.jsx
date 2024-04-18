import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="header">
      <img
        src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png"
        alt="logo"
        className="logo"
      />
      <ul className="menu">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
        <Link to="sign-in">
          <li>Sign In</li>
        </Link>
      </ul>
    </div>
  )
}
