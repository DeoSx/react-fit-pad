import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from './store/user/user.api'

import Home from './pages/Home/Home'
import Programs from './pages/Programs/Programs'
import BodySizes from './pages/BodySizes/BodySizes'
import Excercises from './pages/Excercises/Excercises'
import Profile from './pages/Profile/Profile'
import Journal from './pages/Journal'

import Layout from './hoc/Layout/Layout'
import './App.scss'

function App(props) {
  const authRoutes = [
    {
      path: '/journal',
      component: Journal
    },
    {
      path: '/sizes',
      component: BodySizes
    },
    {
      path: '/programs',
      component: Programs
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/excercises',
      component: Excercises
    }
  ]

  const routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      {props.auth.isAuthenticated &&
        authRoutes.map((route, i) => (
          <Route path={route.path} component={route.component} key={i} />
        ))}
    </Switch>
  )
  return (
    <div className="App">
      <Layout>{routes}</Layout>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
