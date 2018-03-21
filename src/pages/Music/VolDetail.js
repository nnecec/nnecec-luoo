import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link, NavLink, withRouter } from 'react-router-dom';

class VolDetail extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {

    return (
      <div className="luoo-vol-detail">
        vol detail
      </div>
    );
  }
}

export default VolDetail;