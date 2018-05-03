import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'react-feather'

import { Button } from 'components'

import VolList from './VolList'

@inject(stores => ({
  routing: stores.routing,
  tagList: stores.tagStore.tagList,
  volList: stores.volStore.volList,
  page: stores.volStore.page,

  // function
  fetchTagList: stores.tagStore.fetchTagList,
  fetchVolList: stores.volStore.fetchVolList,
}))
@withRouter
@observer
class Music extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchTagList()
    this.fetchVolList()
  }

  // 拉取期刊列表
  fetchVolList = (page = 1, tag = '') => {
    this.props.fetchVolList({ tag, page })
  }

  renderTagList = () => {
    const { tagList, location } = this.props

    return tagList.map((tag, index) => (
      <a className="tag" key={index} onClick={() => this.fetchVolList(1, tag.code)}>{tag.name}</a>
    ))
  }

  // 页脚切换分页
  switchPage = (offset) => {
    const { page } = this.props

    this.fetchVolList(page + offset)
  }

  render() {
    const { location, volList, page } = this.props

    return (
      <div>
        <div className="tag-section">
          <a className="tag" onClick={() => this.fetchVolList(1)}>全部</a>
          {
            this.renderTagList()
          }
        </div>

        <div className="vol-section">
          <VolList volList={volList}></VolList>
        </div>

        <div className="pagination-section">
          <Button disabled={page <= 1} onClick={() => this.switchPage(-1)}>
            <ChevronLeft size={14} ></ChevronLeft>
          </Button>
          <span>{page}</span>
          <Button disabled={page >= 100} onClick={() => this.switchPage(1)}>
            <ChevronRight size={14} ></ChevronRight>
          </Button>
        </div>
      </div>
    );
  }
}

export default Music;