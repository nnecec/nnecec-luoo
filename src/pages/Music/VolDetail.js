import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link, NavLink, withRouter } from 'react-router-dom';

import Loading from 'components/Loading'

@inject(stores => ({
  routing: stores.routing,
  volDetail: stores.volStore.volDetail,
  volDetailStyle: stores.volStore.volDetailStyle,
  isLoading: stores.volStore.isLoading,

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
  componentWillUnmount() {
    const { resetVolDetail } = this.props
    resetVolDetail()
  }

  fetchVolDetail = () => {
    const { routing, fetchVolDetail, resetVolDetail } = this.props
    const index = routing.location.hash.match(/\d+/)[0]

    fetchVolDetail({ index })
  }

  render() {
    const { volDetail, volDetailStyle, isLoading } = this.props

    const list = volDetail.musicList

    return (
      <div className="luoo-vol-detail" style={{ backgroundColor: `rgb(${volDetailStyle.bg})`, color: `rgb(${volDetailStyle.color})` }}>
        <Loading show={isLoading} />
        <div className="vol-img" style={{ backgroundImage: `url(${volDetail.img})` }}></div>

        <div className="vol-info">
          <div className="vol-title">
            <h2>{volDetail.title}<span className="title-vol number">vol.{volDetail.id}</span></h2>

            {/*<p className="count">
  <span><span className="icon icon-comment"></span>{volDetail.comments}</span>
  <span><span className="icon icon-heart"></span>{volDetail.favs}</span></p>*/}
          </div>

          <div className="vol-desc">
            <p dangerouslySetInnerHTML={{ __html: volDetail.description }} className="description" />
          </div>

          <div className="music-list">

            <ul className="list">
              {
                list && list.map((music, index) => (<li key={index}>{music.song} - {music.artist}</li>))
              }
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default VolDetail;