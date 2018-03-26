import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import Header from './Shared/Header'
import Player from './Player/Player'

import Content from './Shared/Content'
import Home from './Home'
import Music from './Music/Music'
import Musician from './Musician'
import Essay from './Essay'
import VolDetail from './Music/VolDetail';

import '../styles/main.scss'

@inject('routing')
@withRouter
@observer
class Root extends Component {

  componentDidMount() {
    const { routing } = this.props
    console.log(routing)
    routing.history.listen((location, action) => {
      console.log(location, action)
      global.scrollTo(0, 0)
    })
  }

  render() {
    const { location } = this.props

    return (
      <div style={{ height: '100%' }} className="font-song luoo">
        <Header></Header>
        <Content>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/music/:tag/:page" component={Music} />
            <Route exact path="/vol/:id" component={VolDetail} />
            <Route path="/musician" component={Musician} />
            <Route path="/essay" component={Essay} />
          </Switch>
        </Content>
        <Player></Player>
      </div>
    )
  }
}

export default Root