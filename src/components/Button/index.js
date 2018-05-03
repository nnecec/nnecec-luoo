import React from 'react'
import styled from 'styled-components';

class Button extends React.Component {

  handleMouseEnter = () => {

  }

  render() {
    const { disabled, children, onClick } = this.props

    const SCButton = styled.button`
      background: transparent;
      outline: none;
      border: none;
    `

    return (
      <SCButton disabled={disabled} onClick={onClick}>{children}</SCButton>
    )
  }
}
export default Button;