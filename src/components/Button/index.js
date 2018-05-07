import React from 'react'
import styled from 'styled-components';

class Button extends React.Component {

  handleMouseEnter = () => {

  }

  render() {
    const { disabled, children, onClick, style } = this.props

    const SCButton = styled.button`
      background: transparent;
      outline: none;
      border: none;
    `

    return (
      <SCButton
        disabled={disabled}
        onClick={onClick}
        style={style}
      >{children}</SCButton>
    )
  }
}
export default Button;