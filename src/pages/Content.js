import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div className="pane">
        {this.props.children}
      </div>
    );
  }
}

export default Content;