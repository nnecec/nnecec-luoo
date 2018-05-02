import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import { Link, withRouter } from 'react-router-dom'
import anime from 'animejs'
import { RefreshCw, Settings, ArrowLeft } from 'react-feather'
import * as syncAPI from 'api/syncAPI'

@inject(stores => ({
  routing: stores.routing,
}))
@withRouter
@observer
export default class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isExpand: false,
      loading: false
    }
    this.sidebar = React.createRef()
    this.backButton = React.createRef()
  }

  componentDidMount() {

  }

  handleExpand = () => {
    const { isExpand } = this.state

    if (!isExpand) {
      const sidebarAnime = anime({
        targets: this.sidebar.current,
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
      targets: this.sidebar.current,
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

  handleSyncLuoo = (e) => {

    e.stopPropagation()

    this.setState({ loading: true })

    Promise.all([syncAPI.syncVolList(), syncAPI.syncTagList()])
      .then(values => {
        console.log(values)
        if (values) this.setState({ loading: false })
      })
      .catch(err => {
        console.log(err)
        this.setState({ loading: false })
      })
  }

  render() {
    const { loading } = this.state

    return (
      <div className="sidebar luoo-sidebar" onClick={this.handleExpand}>
        <nav className="logo">落</nav>
        <nav className="link" ref={this.sidebar}>
          <span><Link to="/">主页</Link></span>
          <span><Link to="/music/tag/1">期刊</Link></span>
          <span><Link to="/musician">单曲</Link></span>
          <span><Link to="/essay">专栏</Link></span>
          <div className="setting">
            <span className="hover" onClick={this.handleSyncLuoo}>
              <RefreshCw size={14} className={loading ? 'loading' : ''} ></RefreshCw>
            </span>
            <span className="hover"><Settings size={14}></Settings></span>
          </div>
        </nav>
      </div>
    )
  }
}
