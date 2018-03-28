import React, { Component } from 'react';

import Controller from 'components/AudioPlayer/Controller'
import Progress from 'components/AudioPlayer/Progress'
import Audio from 'components/AudioPlayer/Audio'
import Volume from 'components/AudioPlayer/Volume'

class Player extends Component {
  render() {
    return (
      <div className="luoo-player player">
        <Controller />
        <Progress />
        <Audio />
        <Volume />
      </div>
    );
  }
}

export default Player;