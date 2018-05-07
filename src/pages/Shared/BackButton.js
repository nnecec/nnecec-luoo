import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { ArrowLeftCircle } from 'react-feather'

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
      left: 20px;
      width: 40px;
      height: 40px;
      background: transparent;
      outline: none;
      border: none;
      position: fixed;
      top: 80px
    `

    return (
      <Button onClick={this.handleBack}>
        <ArrowLeftCircle size={14} color={`#444`}></ArrowLeftCircle>
      </Button>
    );
  }
}

export default BackButton