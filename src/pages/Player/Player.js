import React, { Component } from 'react';

import Controller from 'components/AudioPlayer/Controller'
import Progress from 'components/AudioPlayer/Progress'
import Audio from 'components/AudioPlayer/Audio'
import Volume from 'components/AudioPlayer/Volume'
import Playlist from 'components/AudioPlayer/Playlist'

class Player extends Component {
  render() {
    return (
      <div className="luoo-player player">
        <Audio />
        <Controller />
        <Volume />
        <Progress />
        <Playlist />
      </div>
    );
  }
}

export default Player;