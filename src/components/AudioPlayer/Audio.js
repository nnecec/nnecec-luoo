import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ipcRenderer } from 'electron';

@inject(stores => ({
  music: stores.controllerStore.music,

  volume: stores.playerStore.volume,
  setVolume: stores.playerStore.setVolume,
  setProgress: stores.playerStore.setProgress,
}))
@observer
export default class AudioPlayer extends Component {

  componentDidMount() {
    const { music, next, volume, setVolume, setProgress } = this.props

    const audio = this.refs.audio


    ipcRenderer.on('player-volume-change', (event, arg) => {
      const _volume = parseFloat(arg.volume)

      setVolume(_volume);
      audio.volume = _volume
    })
    ipcRenderer.on('player-progress-change', (event, arg) => {
      const _percent = parseFloat(arg.percent)
      const duration = audio.duration
      const currentTime = _percent * duration
      setProgress(currentTime, duration);
      audio.currentTime = currentTime
    })
    audio.volume = volume
  }

  progress(currentTime = 0) {
    const { music, setProgress } = this.props
    const duration = this.refs.audio.duration || 0

    // if (currentTime * 1000 - this.passed < 1000) {
    //   return;
    // }
    
    setProgress(currentTime, duration)

    // this.passed = currentTime * 1000;
  }

  buffering() {
    // console.log(arguments)
  }

  resetProgress() {

  }

  render() {
    const { music, next, volume } = this.props

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
        ref="audio"
        src={music && music.src ? music.src : ''}
        style={{ display: 'none' }} />
    );
  }
}