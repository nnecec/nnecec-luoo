import React, { Component } from 'react';

import Audio from 'components/AudioPlayer/Audio'

class Player extends Component {
  render() {
    return (
      <div className="luoo-player player">
        <Audio />
      </div>
    );
  }
}

export default Player;