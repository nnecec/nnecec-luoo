import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';

@inject(stores => ({
  routing: stores.routing,
  tagList: stores.tagStore.tagList,

  // function
  fetchTagList: stores.tagStore.fetchTagList
}))
@observer
class Music extends Component {
  componentDidMount() {
    const { match } = this.props
    const { page } = match.params

    this.props.fetchTagList()
  }

  renderTagList = () => {
    const { tagList, location } = this.props

    console.log(location)

    return tagList.map((tag, index) => (
      <NavLink to={`/music/${tag.code}/1`} activeStyle={{ color: 'red' }} key={index}>{tag.name}</NavLink>
    ))
  }




  render() {
    return (
      <div>

        <div className="tag-section">
          {
            this.renderTagList()
          }
        </div>


      </div>
    );
  }
}

export default Music;