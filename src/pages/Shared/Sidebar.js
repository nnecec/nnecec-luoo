import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import anime from 'animejs'
import { RefreshCw, Settings } from 'react-feather'

export default class Sidebar extends Component {

  componentDidMount() {
    this.state = {
      isExpand: false
    }
  }

  handleExpand = () => {
    const { isExpand } = this.state

    if (!isExpand) {
      const sidebarAnime = anime({
        targets: this.sidebar,
        translateX: -100,
        easing: 'easeInOutQuart',
        duration: 500
      })
      sidebarAnime.complete = () => { this.setState({ isExpand: true }) }

      const sidebarItem = anime({
        targets: '.luoo-sidebar .link span',
        translateX: 60,
        delay: 200,
        easing: 'easeInOutQuart',
        duration: function (el, i, l) {
          return 500 + (i * 100)
        }
      })
      return
    }

    const sidebarAnime = anime({
      targets: this.sidebar,
      translateX: -400,
      easing: 'easeInOutQuart',
      duration: 400
    })
    sidebarAnime.complete = () => { this.setState({ isExpand: false }) }

    const sidebarItem = anime({
      targets: '.luoo-sidebar .link span',
      translateX: 0,
      easing: 'easeInOutQuart',
      duration: function (el, i, l) {
        return 500 + (i * 100)
      }
    })
  }

  render() {
    return (
      <div className="sidebar luoo-sidebar" onClick={this.handleExpand}>
        <nav className="logo">落</nav>
        <nav className="link" ref={r => this.sidebar = r}>
          <span><Link to="/">主页</Link></span>
          <span><Link to="/music/tag/1">期刊</Link></span>
          <span><Link to="/musician">单曲</Link></span>
          <span><Link to="/essay">专栏</Link></span>
          <div className="setting">
            <span className="hover"><RefreshCw size={14}></RefreshCw></span>
            <span className="hover"><Settings size={14}></Settings></span>
          </div>
        </nav>
      </div>
    )
  }
}
