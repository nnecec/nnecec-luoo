import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link, NavLink, withRouter } from 'react-router-dom';


@inject(stores => ({
  routing: stores.routing,
}))
@observer
class VolList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  renderVolList = () => {
    const { volList = [] } = this.props

    return volList.map((vol, index) => {
      return (
        <Link to={`/vol/${vol.index}`} key={index} >
          <div className="luoo-vol-item">
            <div className="luoo-vol-item-desc">
              <h2>{vol.title} <span className="title-vol">vol.{vol.id}</span></h2>
              <p className="count">
                <span><span className="icon icon-comment"></span>{vol.comments}</span>
                <span><span className="icon icon-heart"></span>{vol.favs}</span>
              </p>
            </div>
            <figure className="luoo-vol-item-figure" style={{ backgroundImage: `url(${vol.img})` }}></figure>
          </div>
        </Link>
      )
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

export default VolList;