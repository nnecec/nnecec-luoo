import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { ChevronLeft } from 'react-feather'

@inject('routing')
@withRouter
@observer
class BackButton extends Component {

  handleBack = () => {
    const { history } = this.props

    history.goBack()
  }

  render() {
    const Button = styled.button`
      position: absolute;
      top: 80px;
      left: 20px;
      width: 40px;
      height: 40px;
      background: transparent;
      outline: none;
      border: none;
    `

    return (
      <Button onClick={this.handleBack}><ChevronLeft size={14}></ChevronLeft></Button>
    );
  }
}

export default BackButton