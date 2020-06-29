import React, { useEffect, useCallback } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from './store/user/user.api'

import Home from './pages/Home/Home'
import History from './pages/History/History'
import Programs from './pages/Programs/Programs'
import BodySizes from './pages/BodySizes/BodySizes'
import Excercises from './pages/Excercises/Excercises'

import Layout from './hoc/Layout/Layout'
import './App.scss'

function App(props) {

  const getUserInfo = useCallback(() => {
    props.getUser()
  }, [])

  useEffect(() => {
    getUserInfo()
  }, [])

  const authRoutes = [
    {
      path: '/history',
      component: History,
      id: 1
    },
    {
      path: '/sizes',
      component: BodySizes,
      id: 2
    },
    {
      path: '/programs',
      component: Programs,
      id: 3
    }
  ]

  const routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/excercises" component={Excercises} />
      {props.auth.isAuthenticated &&
        authRoutes.map((route) => (
          <Route path={route.path} component={route.component} key={route.id} />
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

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
