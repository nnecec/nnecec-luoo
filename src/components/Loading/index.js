import React, { Component } from 'react';
import PropTypes from 'prop-types'

import styleObject from './styles.scss'

class Loading extends Component {
  render() {
    const { show, color } = this.props;
    return (
      <div className="luoo-loading" style={{ display: show ? 'block' : 'none' }}>
        <div className="loading-inner">
          <div className="svg-wrapper" style={styleObject}>
            <svg width="1em" height="1em" >
              <circle style={{ stroke: color }} cx="0.5em" cy="0.5em" r="0.45em" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading