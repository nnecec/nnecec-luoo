import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ipcRenderer } from 'electron';
import { VolumeX, Volume2 } from 'react-feather'

@inject(stores => ({
  volume: stores.playerStore.volume,
  muted: stores.playerStore.muted,

  // function
  setVolume: stores.playerStore.setVolume,
}))
@observer
export default class Volume extends Component {
  componentWillReceiveProps(nextProps) {

  }

  componentDidMount() {

  }

  handleVolumeChange = (e) => {
    const { setVolume } = this.props
    const value = e.target.value
    setVolume(value)
    ipcRenderer.send('player-volume-change', {
      volume: value
    })
  }

  render() {
    const { volume, muted } = this.props

    return (
      <div>
        {
          (volume === 0) && <button><VolumeX /></button>
        }
        {
          (volume !== 0) && <button><Volume2 /></button>
        }
        <input type="range" min="0" max="1" step="0.001" defaultValue={volume} onChange={this.handleVolumeChange} />

      </div>
    );
  }
}