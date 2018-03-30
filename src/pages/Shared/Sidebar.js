import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs'
import { spring, styler, easing } from 'popmotion'
import pose from 'popmotion-pose'
export default class Sidebar extends Component {

  componentDidMount() {
    this.side = styler(this.sidebar)


  }

  handleExpand = () => {
    const sidebarAnime = anime({
      targets: this.sidebar,
      translateX: -100,
      boxShadow: 'rgba(34, 48, 64, 0.8) 0px 8px 80px 0px',
      easing: 'easeInOutQuart',
      duration: 600
    });
  }
  handleNarrow = () => {
    const sidebarAnime = anime({
      targets: this.sidebar,
      translateX: -400,
      boxShadow: null,
      easing: 'easeInOutQuart',
      duration: 600
    });

  }

  render() {
    return (
      <div className="sidebar luoo-sidebar" onMouseLeave={this.handleNarrow}>
        <nav className="logo" onMouseEnter={this.handleExpand}><Link to="/">落</Link></nav>
        <nav className="link" ref={r => this.sidebar = r}>
          <span><Link to="/">主页</Link></span>
          <span><Link to="/music/tag/1">期刊</Link></span>
          <span><Link to="/musician">单曲</Link></span>
          <span><Link to="/essay">专栏</Link></span>
        </nav>
      </div>
    );
  }
}
