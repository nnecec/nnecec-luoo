import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ipcRenderer } from 'electron';

@inject(stores => ({
  music: stores.controllerStore.music,
}))
@observer
export default class AudioPlayer extends Component {
  componentWillReceiveProps(nextProps) {

  }

  componentDidMount() {
    const player = this.refs.player
  }

  progress(currentTime = 0) {
    console.log(arguments)
  }

  buffering() {
    console.log(arguments)
  }

  resetProgress() {

  }

  render() {
    const { music, next } = this.props

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
        onError={e => console.log(e)}
        onProgress={e => this.buffering(e)}
        onSeeked={e => this.resetProgress()}
        onTimeUpdate={e => {
          this.progress(e.target.currentTime);
        }}
        ref="player"
        src={music.src || {}}
        style={{ display: 'none' }} />
    );
  }
}