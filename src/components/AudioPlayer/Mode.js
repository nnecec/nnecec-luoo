import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ipcRenderer } from 'electron';
import { RotateCw, Repeat } from 'react-feather'

@inject(stores => ({
  mode: stores.controllerStore.mode,
  // function
}))
@observer
export default class Mode extends Component {

  componentDidMount() {

  }

  render() {
    const { playlist } = this.props

    return (
      <div className="luoo-mode mode">
        {
          <button><RotateCw size={16} /></button>
        }
        {
          <button><Repeat size={16} /></button>
        }
      </div>
    );
  }
}