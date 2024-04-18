import React from 'react'
import './main.css'
import { Header } from './header'
import { Outlet } from 'react-router-dom'
import { Footer } from './footer'

export const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="body">
        <Outlet />
      </div>
      <Footer />
    </React.Fragment>
  )
}
