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
    this.logo = React.createRef()
    this.backButton = React.createRef()
  }

  componentDidMount() {
    var infiniteLoop = anime({
      targets: document.querySelectorAll('.logo .colorful'),
      'border-color': [
        { value: '#F2F2F2' },
        { value: '#D9D9D9' },
        { value: '#A6A6A6' },
        { value: '#595959' },
        { value: '#404040' },
      ],
      'color': [
        { value: '#F2F2F2' },
        { value: '#D9D9D9' },
        { value: '#A6A6A6' },
        { value: '#595959' },
        { value: '#404040' },
      ],
      loop: true,
      easing: 'linear',
      duration: 40000,
      direction: 'alternate',
    });

  }

  /**
   * 打开/关闭 侧边栏
   * 
   * @memberof Sidebar
   */
  handleExpand = () => {
    const { isExpand } = this.state

    if (!isExpand) {
      const sidebarAnime = anime({
        targets: this.sidebar.current,
        translateX: -100,
        easing: 'easeInOutQuart',
        duration: 500,
        begin: () => { this.setState({ isExpand: true }) }
      })

      const sidebarItem = anime({
        targets: '.luoo-sidebar .link span',
        translateX: 60,
        delay: 200,
        easing: 'easeInOutQuart',
        duration: (el, i, l) => 500 + (i * 100)
      })
      return
    }

    const sidebarAnime = anime({
      targets: this.sidebar.current,
      translateX: -400,
      easing: 'easeInOutQuart',
      duration: 400,
      complete: () => { this.setState({ isExpand: false }) }
    })

    const sidebarItem = anime({
      targets: '.luoo-sidebar .link span',
      translateX: 0,
      easing: 'easeInOutQuart',
      duration: (el, i, l) => 500 + (i * 100)
    })
  }

  /**
   * 请求同步最新数据
   * 
   * @memberof Sidebar
   */
  handleSyncLuoo = (e) => {
    e.stopPropagation()

    this.setState({ loading: true })
    Promise.all([syncAPI.syncVolList(), syncAPI.syncTagList()])
      .then(values => {
        if (values) this.setState({ loading: false })
      })
      .catch(err => {
        this.setState({ loading: false })
      })
  }

  render() {
    const { loading, isExpand } = this.state

    return (
      <div className="sidebar luoo-sidebar" onClick={this.handleExpand}>
        <nav className="logo"><span className="box colorful"></span><span className="colorful">落</span></nav>
        <nav
          className="link"
          ref={this.sidebar}
          style={{
            boxShadow: isExpand ? 'rgba(0, 0, 0, 0.2) 4px 0px 16px 0px' : 'none'
          }}
        >
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
