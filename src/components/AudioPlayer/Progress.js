import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ipcRenderer } from 'electron';

@inject(stores => ({
  music: stores.controllerStore.music,
  progress: stores.playerStore.progress,
  currentTime: stores.playerStore.currentTime,
  duration: stores.playerStore.duration,

  // function
  setProgress: stores.playerStore.setProgress,
}))
@observer
export default class Progress extends Component {
  componentDidMount() {

  }

  handleProgressChange = (e) => {
    const { setProgress } = this.props
    const value = e.target.value
    ipcRenderer.send('player-progress-change', {
      percent: value
    })
  }

  render() {
    const { progress, music = {}, currentTime, duration } = this.props

    return (
      <div className="luoo-progress progress">
        <input type="range" min="0" max="1" step="0.001" value={progress || 0} onChange={this.handleProgressChange} disabled={!music.src} />
        <div>
          <span>{currentTime}</span>/<span>{duration}</span>
        </div>
      </div>
    );
  }
}