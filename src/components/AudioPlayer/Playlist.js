import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ipcRenderer } from 'electron';
import { List } from 'react-feather'
import anime from 'animejs'

@inject(stores => ({
  playlist: stores.controllerStore.playlist,
  music: stores.controllerStore.music,
  muted: stores.playerStore.muted,
  

  // function
  play: stores.controllerStore.play,
  
}))
@observer
export default class Playlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isExpand: false
    }
  }

  componentDidMount() {

  }

  /**
   * 展开播放列表
   * 
   * @memberof Playlist
   */
  handleExpand = () => {
    const { isExpand } = this.state

    // this.setState({ isExpand: !isExpand })
    if (!isExpand) {
      const playlistExpand = anime({
        targets: this.playlist,
        scaleY: 1,
        opacity: 1,
        easing: 'easeInOutQuart',
        duration: 300
      })
      playlistExpand.complete = () => { this.setState({ isExpand: true }) }
      return
    }
    const playlistBack = anime({
      targets: this.playlist,
      scaleY: 0,
      opacity: 0,
      easing: 'easeInOutQuart',
      duration: 300
    })
    playlistBack.complete = () => { this.setState({ isExpand: false }) }

  }

  playVol = (id) => {
    const { play } = this.props

    play(id)
  }

  render() {
    const { playlist, music } = this.props
    const { isExpand } = this.state

    return (
      <div className="luoo-playlist playlist">
        <button onClick={this.handleExpand}><List size={16} /></button>
        <ul className="list" ref={r => this.playlist = r} >
          {
            playlist.map(p => (
              <li onClick={() => this.playVol(p.id)}
                className={p.id === music.id ? 'active' : ''}
                key={p.id}
              >{p.song}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}