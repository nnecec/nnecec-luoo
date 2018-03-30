import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Sidebar extends Component {
  render() {
    return (
      <div className="navbar luoo-header">
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
