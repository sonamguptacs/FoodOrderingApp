import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className="footer">
      <ul className="menu">
        <Link to="/about">
          <li>About Us</li>
        </Link>
        <Link to="/contact">
          <li>Contact Us</li>
        </Link>
      </ul>
    </div>
  )
}
