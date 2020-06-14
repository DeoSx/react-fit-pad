import React, { Component } from 'react'
import { Wrapper } from '../../styles'

import Navigation from '../../components/Navigation/Navigation'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Layout.scss'

class Layout extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Wrapper>
          <main className="layout-main">
            <Sidebar />
            {this.props.children}
          </main>
        </Wrapper>
      </div>
    )
  }
}
export default Layout
