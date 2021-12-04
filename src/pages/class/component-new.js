import React, { Component, PureComponent } from 'react';

export default class componentNew extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // text: 'dome'
      text: {id: 1}
      
    };
    console.log('constructor');
    // this.handleClick = this.handleClick.bind(this);//初始化时绑定
  }
 
  static getDerivedStateFromProps(props, state) {  //组件发生更新的时候 动态更新state的值
    console.log('getDerivedStateFromProps')
    console.log('props, state', props, state)
   return true
  }
   
  getSnapshotBeforeUpdate(){ //获取dom的值
    return 'getSnapshotBeforeUpdate方法'
  }
  componentDidUpdate(props, state, snapshot) {
    console.log('componentDidUpdate:', snapshot)
  }

  handleClick = ()=>{
    console.log('handleClick()')
    this.setState({
      // text: 'dome-new'
      text: {id: 2}
    })
  }

  render() {
    console.log('render');
    return (
      // <div onClick={this.handleClick.bind(this)}>
      // {/* 组件每次rander都会初始化这个方法 */}
      // <div onClick={() => this.handleClick()}>
      <div onClick={this.handleClick}>
        component-new--{this.state.text.id}
      </div>
    )
  }
}