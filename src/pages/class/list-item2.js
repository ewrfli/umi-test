import React, { Component } from 'react';
import PropTypes from 'prop-types'
export default class ListItem2 extends Component {
  static defaultProps = {
    name: 'item默认'
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
    this.props.handleItem('子组件2传给父组件的值')
  }
  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>item2--{this.props.name}</h1>
      </div>
    )
  }
}