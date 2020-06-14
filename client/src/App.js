import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import History from './pages/History/History'
import Programs from './pages/Programs/Programs'
import BodySizes from './pages/BodySizes/BodySizes'
import Excercises from './pages/Excercises/Excercises'

import Layout from './hoc/Layout/Layout'
import './App.scss'

function App() {
  const routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/history" component={History} />
      <Route path="/programs" component={Programs} />
      <Route path="/sizes" component={BodySizes} />
      <Route path="/excercises" component={Excercises} />
    </Switch>
  )
  return (
    <div className="App">
      <Layout>{routes}</Layout>
    </div>
  )
}

export default App
