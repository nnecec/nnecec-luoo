import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'


import Header from './Header/index'
import Nav from './Nav'
import Content from './Content'
import Home from './Home'
import Music from './Music/Music'
import Musician from './Musician'
import Essay from './Essay'
import VolDetail from './Music/VolDetail';

import '../styles/photon.css'
import '../styles/main.scss'

@inject('routing')
@withRouter
@observer
class Root extends Component {

  render() {
    const { location } = this.props

    return (
      <div style={{ height: '100%' }}>

        <div style={{ position: 'relative', height: '100%' }}>
          <div className="pane-group">
            <Nav></Nav>
            <Content>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/music/:tag/:page" component={Music} />
                <Route exact path="/vol/:id" component={VolDetail} />
                <Route path="/musician" component={Musician} />
                <Route path="/essay" component={Essay} />
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