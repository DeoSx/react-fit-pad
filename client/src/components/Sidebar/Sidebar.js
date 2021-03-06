import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div className="sidebar main-ui">
      <NavLink exact to="/journal">
        Журнал
      </NavLink>
      <NavLink exact to="/programs">
        Тренировочные программы
      </NavLink>
      <NavLink exact to="/sizes">
        Замеры тела
      </NavLink>
      <NavLink exact to="/excercises">
        Упражнения
      </NavLink>
    </div>
  )
}
export default Sidebar
