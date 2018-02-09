import React, { Component } from 'react';

class Item extends Component {
  render() {

    const { icon, active, onClick } = this.props
    return (
      <span className={active ? 'nav-group-item active' : 'nav-group-item'} onClick={onClick}>
        {
          icon && <span className={`icon icon-${icon}`}></span>
        }
        &nbsp;{this.props.children}
      </span>
    );
  }
}

export default Item;