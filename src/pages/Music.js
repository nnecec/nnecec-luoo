import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('routing')
@observer
class Music extends Component {
  componentDidMount() {
    const { match } = this.props
    const { page } = match.params

    
  }
  render() {
    return (
      <div>
        Music
      </div>
    );
  }
}

export default Music;