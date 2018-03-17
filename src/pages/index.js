import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';


import Nav from './Nav'
import Content from './Content'
import Home from './Home'
import Music from './Music'
import Musician from './Musician'
import Essay from './Essay'

import "../styles/main.css";
import "../styles/photon.css";

@inject('routing')
@observer
@withRouter
class Root extends Component {
  render() {
    const { location } = this.props

    return (
      <div>
        <div className="pane-group">
          <Nav></Nav>
          <Content>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/tag/:page" component={Music} />
              <Route exact path="/musician" component={Musician} />
              <Route exact path="/essay" component={Essay} />
            </Switch>
          </Content>
        </div>
      </div>
    );
  }
}

export default Root;

export {
  Nav,
  Content
}