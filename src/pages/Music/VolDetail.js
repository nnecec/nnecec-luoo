import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link, NavLink, withRouter } from 'react-router-dom';

import Loading from 'components/Loading'

@inject(stores => ({
  routing: stores.routing,
  volDetail: stores.volStore.volDetail,
  volDetailStyle: stores.volStore.volDetailStyle,
  isLoading: stores.volStore.isLoading,

  // Player
  setPlayList: stores.controllerStore.setPlayList,
  play: stores.controllerStore.play,

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

  // 获取期刊详情
  fetchVolDetail = () => {
    const { routing, fetchVolDetail, resetVolDetail } = this.props
    const index = routing.location.hash.match(/\d+/)[0]

    fetchVolDetail({ index })
  }

  // 播放期刊列表
  playVol = (id) => {
    const { volDetail, setPlayList, play } = this.props

    setPlayList(volDetail.musicList.slice())
    
    play(id)
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

          <div className="music-list font-hei">

            <ul className="list">
              {
                list && list.map((music, index) => (
                  <li className="music" key={index} onClick={() => this.playVol(music.id)}>
                    {music.song}
                    <span className="artist">{music.artist}</span>
                  </li>)
                )
              }
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default VolDetail;