import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs'

export default class Sidebar extends Component {

  componentDidMount() {

  }

  handleExpand = () => {
    
  }

  render() {
    return (
      <div className="navbar luoo-sidebar" ref={r => this.sidebar = r}>
        <nav className="link">
          <Link to="/">主页</Link>
          <Link to="/music/tag/1">期刊</Link>
          <Link to="/musician">单曲</Link>
          <Link to="/essay">专栏</Link>
        </nav>
      </div>
    );
  }
}
