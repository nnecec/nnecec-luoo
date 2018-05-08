import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ipcRenderer } from 'electron';

import * as format from 'utils/format'

@inject(stores => ({
  playing: stores.controllerStore.playing,
  music: stores.controllerStore.music,
  progress: stores.playerStore.progress,
  duration: stores.playerStore.duration,
  currentTime: stores.playerStore.currentTime,

  // function
  setProgress: stores.playerStore.setProgress,
}))
@observer
export default class Progress extends Component {
  componentDidMount() {

  }

  handleProgressChange = (e) => {
    const { setProgress, playing } = this.props
    const value = e.target.value
    setProgress(value)
  }

  handleProgressMouseUp = (e) => {
    const { setProgress, playing } = this.props
    const value = e.target.value

    setProgress(value, playing)
  }

  render() {
    const { progress, music = {}, currentTime, duration } = this.props

    console.log(currentTime, duration);

    return (
      <div className="luoo-progress progress">
        <input
          type="range"
          min="0"
          max="1"
          step="0.001"
          value={progress || 0}
          onChange={this.handleProgressChange}
          onMouseUp={this.handleProgressMouseUp}
          disabled={!music.src} />
        <div className="time number">
          <span>{format.progressTime(currentTime)}</span>/<span>{format.progressTime(duration)}</span>
        </div>
      </div>
    );
  }
}