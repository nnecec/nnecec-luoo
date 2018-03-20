import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link, NavLink, withRouter } from 'react-router-dom';

class Music extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  renderVolList = () => {
    const { volList = [] } = this.props

    return volList.map((vol, index) => {
      return (<div className="luoo-vol-item" key={index}>
        <div className="luoo-vol-item-desc">
          <p dangerouslySetInnerHTML={{ __html: vol.description }} className="description" />
          <h2>{vol.title}</h2>
          <p className="count">
            <span><span className="icon icon-comment"></span>{vol.comments}</span>
            <span><span className="icon icon-heart"></span>{vol.favs}</span>
          </p>

        </div>
        <figure class="luoo-vol-item-figure" style={{ backgroundImage: `url(${vol.img})` }}></figure>
      </div>)
    })
  }

  render() {

    return (
      <div className="luoo-vol-list">
        {
          this.renderVolList()
        }
      </div>
    );
  }
}

export default Music;