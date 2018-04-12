import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ipcRenderer } from 'electron';
import { List } from 'react-feather'
import anime from 'animejs'

@inject(stores => ({
  playlist: stores.controllerStore.playlist,
  muted: stores.playerStore.muted,

  // function
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

  handleExpand = () => {
    const { isExpand } = this.state

    // this.setState({ isExpand: !isExpand })
    if (!isExpand) {
      const playlistExpand = anime({
        targets: this.playlist,
        scaleY: 1,
        opacity: 1,
        easing: 'easeInOutQuart',
        duration: 400
      })
      playlistExpand.complete = () => { this.setState({ isExpand: true }) }
      return
    }
    const playlistBack = anime({
      targets: this.playlist,
      scaleY: 0,
      opacity: 0,
      easing: 'easeInOutQuart',
      duration: 400
    })
    playlistBack.complete = () => { this.setState({ isExpand: false }) }

  }

  render() {
    const { playlist } = this.props
    const { isExpand } = this.state

    return (
      <div className="luoo-playlist playlist">
        <button onClick={this.handleExpand}><List size={16} /></button>
        <ul className="list" ref={r => this.playlist = r} >
          {
            playlist.map(music => (<li key={music.id}>{music.song}</li>))
          }
        </ul>
      </div>
    );
  }
}