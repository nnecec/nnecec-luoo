import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ipcRenderer } from 'electron';
import { VolumeX, Volume1, Volume2 } from 'react-feather'

@inject(stores => ({
  volume: stores.playerStore.volume,
  muted: stores.playerStore.muted,

  // function
  init: stores.playerStore.init,
  setVolume: stores.playerStore.setVolume,
}))
@observer
export default class Volume extends Component {

  componentDidMount() {
    this.props.init()
  }

  handleVolumeChange = (e) => {
    const { setVolume } = this.props
    const value = e.target.value
    setVolume(value)
  }

  render() {
    const { volume, muted } = this.props
    
    return (
      <div className="luoo-volume volume">
        {
          volume == 0 && <button><VolumeX size={16} /></button>
        }
        {
          (volume > 0 && volume < 0.5) && <button><Volume1 size={16} /></button>
        }
        {
          (volume >= 0.5) && <button><Volume2 size={16} /></button>
        }
        <input type="range" min="0" max="1" step="0.001" value={volume} onChange={this.handleVolumeChange} />

      </div>
    );
  }
}