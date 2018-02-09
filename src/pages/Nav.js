import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as Components from 'components'

const Item = Components.Nav.Item
const Title = Components.Nav.Title


class Nav extends Component {
  render() {
    return (
      <div className="pane pane-sm sidebar">
        <Components.Nav>
          <Title>落</Title>
          <Item icon="home"><Link to="/">主页</Link></Item>
          <Item icon="music"><Link to="/music">期刊</Link></Item>
          <Item icon="note"><Link to="/musician">单曲</Link></Item>
          <Item icon="doc-text-inv"><Link to="/essay">专栏</Link></Item>
        </Components.Nav>
      </div>
    );
  }
}

export default Nav;