import React, { Component } from 'react';
import ListItem1 from './list-item1';
import ListItem2 from './list-item2';
export default class Lists extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name1: '子组件名字1',
      name2: '子组件名字2'
    };
  }
  handleChild = (msg) => {
    this.setState({
      name2: msg
    })
  }

  render() {
    return (
      <div>
        <ListItem1 handleItem={this.handleChild} name={this.state.name1}></ListItem1> 
        {/* 点击子组件1 把1的值传给2 */}
        <ListItem2 handleItem={this.handleChild} name={this.state.name2}></ListItem2>
      </div>
    )
  }
}