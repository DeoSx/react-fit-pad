import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div className="sidebar main-ui">
      <NavLink exact to="/history">
        History
      </NavLink>
      <NavLink exact to="/programs">
        Training programs
      </NavLink>
      <NavLink exact to="/sizes">
        Body sizes
      </NavLink>
      <NavLink exact to="/excercises">
        Excercises
      </NavLink>
    </div>
  )
}
export default Sidebar
