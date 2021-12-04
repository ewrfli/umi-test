import React, { Component, PureComponent } from 'react';

export default class componentOld extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      // text: 'dome'
      text: {id: 1}
      
    };
    console.log('constructor');
    // this.handleClick = this.handleClick.bind(this);//初始化时绑定
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  componentWillUpdate(){
    console.log('componentWillUpdate')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  // shouldComponentUpdate(nextProps, nextState) { //组件更新时触发  //二次封装PureComponent
  //   console.log('shouldComponentUpdate')
  //   console.log(nextProps, nextState)
  //   if( this.state.text === 'dome-new'){ //加一个判断  && this.state.text !== state.text
  //     console.log('组件更新时触发') // 同一个值 不改变也重新触发render
  //     return true
  //   }
  //   return false
  // }
  // handleClick() {
  //   console.log('handleClick()')
  // }

  //二次封装PureComponent 但是是浅比较  text: {id: 2}会重新触发render
  componentWillUnmount() {
    console.log('卸载componentWillUnmount')
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
        component-old--{this.state.text.id}
      </div>
    )
  }
}