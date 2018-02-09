import React, { Component } from 'react';
import Item from './item'
import Title from './title'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeKey: undefined
    }
  }

  renderChildren = () => {
    return React.Children.map(this.props.children, (child, index) => {
      const active = this.state.activeKey === index;
      return React.cloneElement(child, {
        active,
        key: `nav-group-item-${index}`,
        onClick: () => {
          this.setState({
            activeKey: index
          });
        }
      })
    })
  }

  render() {
    return (
      <nav className="nav-group">
        {this.renderChildren()}
      </nav>
    );
  }
}

Nav.Item = Item
Nav.Title = Title



export default Nav;