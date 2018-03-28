import React, { Component } from 'react';

import Audio from 'components/AudioPlayer/Audio'
import Volume from 'components/AudioPlayer/Volume'

class Player extends Component {
  render() {
    return (
      <div className="luoo-player player">
        <Audio />
        <Volume />
      </div>
    );
  }
}

export default Player;