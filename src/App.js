import React, { Component } from 'react'
import { Button, message } from 'antd'

export default class App extends Component {
  handleClick = () => {
    message.success('哈哈哈哈哈哈...')
  }
  render() {
    return  <Button type='primary' onClick={this.handleClick}>学习</Button>

  }
}
