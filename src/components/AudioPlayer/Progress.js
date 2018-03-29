import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ipcRenderer } from 'electron';

@inject(stores => ({
  progress: stores.playerStore.progress,

  // function
  setProgress: stores.playerStore.setProgress,
}))
@observer
export default class Progress extends Component {
  componentWillReceiveProps(nextProps) {

  }

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
    const { progress } = this.props

    return (
      <input type="range" min="0" max="1" step="0.001" value={progress || 0} onChange={this.handleProgressChange} />
    );
  }
}