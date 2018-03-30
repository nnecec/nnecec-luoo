import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ipcRenderer } from 'electron';
import { List } from 'react-feather'

@inject(stores => ({
  playlist: stores.controllerStore.playlist,
  muted: stores.playerStore.muted,

  // function
}))
@observer
export default class Playlist extends Component {

  componentDidMount() {

  }

  render() {
    const { playlist } = this.props

    return (
      <div className="luoo-playlist playlist">
        <button>
          <List size={16} />
          <span className="count number">{playlist.length}</span>
        </button>
        <ul className="list">
          {
            playlist.map(music => (<li key={music.id}>{music.song}</li>))
          }
        </ul>
      </div>
    );
  }
}