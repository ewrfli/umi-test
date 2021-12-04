import React, { Component } from 'react';
import Search from './serach'
import Lists from './lists'
import { connect } from 'dva'
class Dva extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    console.log('indexprops:', this.props)
    return (
      <div>
        <Search {...this.props}></Search>
        <Lists {...this.props}></Lists>
      </div>
    )
  }

}

export default connect(({search})=>({
  search
}))(Dva)