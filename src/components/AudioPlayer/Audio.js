import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ipcRenderer } from 'electron';

@inject(stores => ({
  music: stores.controllerStore.music,

  volume: stores.playerStore.volume,

  // function
  cut: stores.controllerStore.cut,
  setVolume: stores.playerStore.setVolume,
  setProgress: stores.playerStore.setProgress,
}))
@observer
export default class AudioPlayer extends Component {

  constructor(props) {
    super(props)
    this.interval = 0
  }

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

    // 每间隔一秒
    if (currentTime * 1000 - this.interval < 1000) {
      return;
    }
    const { music, setProgress } = this.props
    const duration = this.refs.audio.duration || 0
    setProgress(currentTime, duration)

    this.interval = currentTime * 1000
  }

  buffering(e) {
    console.log(arguments)
  }

  resetProgress = (e) => {
    this.interval = 0
  }


  render() {
    const { music, cut, volume } = this.props

    return (
      <audio
        autoPlay={true}
        onAbort={e => {
          this.interval = 0, this.progress();
        }}
        onEnded={e => {
          this.interval = 0
          cut(1)
        }}
        onError={e => console.log(e)}
        onProgress={this.buffering}
        onSeeked={this.resetProgress}
        onTimeUpdate={e => {
          this.progress(e.target.currentTime);
        }}
        ref="audio"
        src={music && music.src ? music.src : ''}
        style={{ display: 'none' }} />
    );
  }
}