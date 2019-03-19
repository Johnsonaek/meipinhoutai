import React from 'react'
import {Button, Row, Col, Card, Icon, Radio, Dropdown, Menu, message} from 'antd'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'

class ButtonDemo extends React.Component {
  state = {
    size: 'default'
  }
  handleSizeChange = (e) => {
    this.setState({
      size: e.target.value,
      loading: false,
      iconLoading: false
    })
  }

  handleMenuClick(e) {
    message.info(`Click on menu ${e.key} item.`)
  }

  render() {

    return (
      <div>
        hello
      </div>
    )
  }
}

export default ButtonDemo
