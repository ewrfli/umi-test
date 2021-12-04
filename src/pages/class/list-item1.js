import React, { Component } from 'react';
import PropTypes from 'prop-types'
export default class ListItem1 extends Component {
  static defaultProps = {
    name: '子组件默认名字'
  }
  static propsTypes = {
    name: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  handleClick = ()=> {
    this.props.handleItem('子组1件传给父组件的值')
  }
  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>item1--{this.props.name}</h1>
      </div>
    )
  }
}