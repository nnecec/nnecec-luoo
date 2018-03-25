import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { MessageCircle, Heart } from 'react-feather'

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
              <h2>{vol.title} <span className="title-vol number">vol.{vol.id}</span></h2>
              <p className="count">
                <span className="number"><MessageCircle size={12} />{vol.comments}</span>
                <span className="number"><Heart size={12} />{vol.favs}</span>
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