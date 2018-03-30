import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ipcRenderer } from 'electron';
import { Play, Pause, ChevronRight, ChevronLeft } from 'react-feather'



@inject(stores => ({
  playing: stores.controllerStore.playing,
  playlist: stores.controllerStore.playlist,

  // function
  pause: stores.controllerStore.pause,
  toggle: stores.controllerStore.toggle,
  cut: stores.controllerStore.cut,
  next: stores.playerStore.next,
}))
@observer
export default class Volume extends Component {


  componentDidMount() {

  }

  render() {
    const { volume, playing, pause, playlist, cut } = this.props

    return (
      <div className="luoo-controller controller">
        <button onClick={() => cut(-1)}><ChevronLeft size={16} /></button>
        {
          playing ? <button onClick={pause}><Pause size={16} /></button> : <button><Play size={16} /></button>
        }
        <button onClick={() => cut(1)}><ChevronRight size={16} /></button>
      </div>
    );
  }
}