import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link, NavLink, withRouter } from 'react-router-dom';

@inject(stores => ({
  routing: stores.routing,
  volDetail: stores.volStore.volDetail,

  // function
  fetchVolDetail: stores.volStore.fetchVolDetail,
  resetVolDetail: stores.volStore.resetVolDetail,
}))
@withRouter
@observer
class VolDetail extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.fetchVolDetail()
  }

  fetchVolDetail = () => {
    const { routing, fetchVolDetail, resetVolDetail } = this.props
    resetVolDetail()
    const index = routing.location.hash.match(/\d+/)[0]

    fetchVolDetail({ index })
  }

  render() {
    const { volDetail } = this.props
    const bg = volDetail.swatches && (volDetail.swatches.LightVibrant || volDetail.swatches.LightMuted)
    const color = volDetail.swatches && (volDetail.swatches.DarkVibrant || volDetail.swatches.DarkMuted)

    return (
      <div className="luoo-vol-detail" style={{ backgroundColor: `rgb(${bg})` }}>
        <div className="vol-desc" style={{ color: `rgb(${color})` }}>
          <h2>{volDetail.title}<span className="title-vol">vol.{volDetail.id}</span></h2>
          <p dangerouslySetInnerHTML={{ __html: volDetail.description }} className="description" />

          {/*<p className="count">
        <span><span className="icon icon-comment"></span>{volDetail.comments}</span>
        <span><span className="icon icon-heart"></span>{volDetail.favs}</span></p>*/}
        </div>
        <div className="music" style={{ backgroundImage: `url(${volDetail.img})` }}>
        </div>


        <div className="vol-music-list">

        </div>
      </div>
    );
  }
}

export default VolDetail;