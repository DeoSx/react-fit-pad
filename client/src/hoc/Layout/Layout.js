import React, { Component } from 'react'
import { Wrapper } from '../../styles'
import { connect } from 'react-redux'

import Navigation from '../../components/Navigation/Navigation'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Layout.scss'

class Layout extends Component {

  render() {
    const isAuthenticated = this.props.auth.isAuthenticated
    return (
      <>
        <Navigation />
        <Wrapper>
          <main className="layout-main">
            { isAuthenticated && <Sidebar /> }
            {this.props.children}
          </main>
        </Wrapper>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Layout)
