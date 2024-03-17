import React from 'react'
import './main.css'
import { Header } from './header'
import { Main } from './main'
import { Footer } from './footer'

export const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  )
}
