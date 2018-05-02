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

  fetchVolList = (tag = '', page = 1) => {
    // const { match } = this.props
    // const { page } = match.params

    this.props.fetchVolList({ tag, page })
  }

  renderTagList = () => {
    const { tagList, location } = this.props

    return tagList.map((tag, index) => (
      <a className="tag" key={index} onClick={() => this.fetchVolList(tag.code)}>{tag.name}</a>
    ))
  }

  switchPage = () => {
    const { page } = this.props
    this.props.fetchVolList({ page: page + 1 })
  }

  render() {
    const { location, volList } = this.props

    return (
      <div>
        <div className="tag-section">
          {
            this.renderTagList()
          }
        </div>

        <div className="vol-section">
          <VolList volList={volList}></VolList>
        </div>

        <div className="pagination-section">
          <Button>
            <ChevronLeft size={14} onClick={this.switchPage}></ChevronLeft>
          </Button>
          <Button>
            <ChevronRight size={14} onClick={this.switchPage}></ChevronRight>
          </Button>
        </div>
      </div>
    );
  }
}

export default Music;