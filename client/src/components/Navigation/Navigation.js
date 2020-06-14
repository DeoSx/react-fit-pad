import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.scss'

import { Wrapper } from '../../styles'

const Navigation = () => {
  return (
    <Wrapper>
      <nav className="nav main-ui">
        <div className="logo">
          <img src="images/logo.png" />
        </div>
        <div className="links">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/history">History</NavLink>
        </div>
      </nav>
    </Wrapper>
  )
}

export default Navigation
