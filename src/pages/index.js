import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import 'normalize.css'


import Header from './Header/index'
import Nav from './Nav'
import Content from './Content'
import Home from './Home'
import Music from './Music/Music'
import Musician from './Musician'
import Essay from './Essay'

import '../styles/photon.css'
import '../styles/main.scss'

@inject('routing')
@observer
@withRouter
class Root extends Component {
  render() {
    const { location } = this.props

    return (
      <div style={{ height: '100%' }}>
        <Header></Header>
        <div style={{ position: 'relative', height: '100%' }}>
          <div className="pane-group">
            <Nav></Nav>
            <Content>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/music/:tag/:page" component={Music} />
                <Route exact path="/musician" component={Musician} />
                <Route exact path="/essay" component={Essay} />
              </Switch>
            </Content>
          </div>
        </div>

      </div>
    )
  }
}

export default Root

export {
  Nav,
  Content
}