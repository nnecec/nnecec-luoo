import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <h5 className="nav-group-title">
        {this.props.children}
      </h5>
    );
  }
}

export default Title;