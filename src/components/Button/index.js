import React from 'react'
import styled from 'styled-components';

class Button extends React.Component {

  handleMouseEnter = () => {
    
  }

  render() {
    const SCButton = styled.button`
      background: transparent;
      outline: none;
      border: none;
    `

    return (
      <SCButton>{this.props.children}</SCButton>
    )
  }
}
export default Button;