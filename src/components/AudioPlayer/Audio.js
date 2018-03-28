import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ipcRenderer } from 'electron';

@inject(stores => ({
  music: stores.controllerStore.music,

  volume: stores.playerStore.volume,
  setVolume: stores.playerStore.setVolume,
}))
@observer
export default class AudioPlayer extends Component {
  componentWillReceiveProps(nextProps) {

  }

  componentDidMount() {
    const { music, next, volume, setVolume } = this.props

    const player = this.refs.player


    ipcRenderer.on('player-volume-change', (event, arg) => {
      const _volume = parseFloat(arg.volume)

      setVolume(_volume);
      player.volume = _volume
    })
    player.volume = volume
  }

  progress(currentTime = 0) {
    console.log(currentTime)
  }

  buffering() {
    // console.log(arguments)
  }

  resetProgress() {

  }

  render() {
    const { music, next, volume } = this.props
    console.log(music)

    return (
      <audio
        autoPlay={true}
        onAbort={e => {
          this.passed = 0, this.progress();
        }}
        onEnded={e => {
          this.passed = 0
          next(true)
        }}
        // onError={e => console.log(e)}
        onProgress={e => this.buffering(e)}
        onSeeked={e => this.resetProgress()}
        onTimeUpdate={e => {
          this.progress(e.target.currentTime);
        }}
        ref="player"
        src={music && music.src ? music.src : ''}
        style={{ display: 'none' }} />
    );
  }
}