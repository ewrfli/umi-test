import React, { Component } from 'react';
import { SearchBar} from 'antd-mobile'
export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  handleChange = (value) => {
    this.setState({
      // value: value 简写
      value
    })
  }
  handleSubmit = () => {
    // alert(this.state.value)
    this.props.dispatch({
      type: 'search/getLists', //命名空间 方法名getListsAsync
      // type: 'search/getListsAsync',
      payload: this.state.value   //payload自定义
    })
  }
  render() {
    return (
      <div>
        <SearchBar
          autoFocus
          value={this.state.value}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}