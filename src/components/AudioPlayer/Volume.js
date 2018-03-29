import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ipcRenderer } from 'electron';
import { VolumeX, Volume1, Volume2 } from 'react-feather'

@inject(stores => ({
  volume: stores.playerStore.volume,
  muted: stores.playerStore.muted,

  // function
  setVolume: stores.playerStore.setVolume,
}))
@observer
export default class Volume extends Component {

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
      <div className="luoo-volume volume">
        {
          (volume === 0) && <button><VolumeX size={16} /></button>
        }
        {
          (volume > 0 && volume < 0.5) && <button><Volume1 size={16} /></button>
        }
        {
          (volume >= 0.5) && <button><Volume2 size={16} /></button>
        }
        <input type="range" min="0" max="1" step="0.001" defaultValue={volume} onChange={this.handleVolumeChange} />

      </div>
    );
  }
}