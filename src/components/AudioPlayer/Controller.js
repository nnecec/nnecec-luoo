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
  componentWillReceiveProps(nextProps) {

  }

  componentDidMount() {

  }

  render() {
    const { volume, playing, pause, playlist, cut } = this.props

    return (
      <div>
        <button onClick={() => cut(-1)}><ChevronLeft /></button>
        {
          playing ? <button onClick={pause}><Pause /></button> : <button><Play /></button>
        }
        <button onClick={() => cut(1)}><ChevronRight /></button>
      </div>
    );
  }
}