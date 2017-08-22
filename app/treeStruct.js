import React,{Component} from 'react';
import styles from '../styles/header';
import { Button ,List,NavBar,Icon} from 'antd-mobile';

class TreeStruct extends Component{
  render(){
    return(
      <div >
        <NavBar leftContent="back"
        mode="dark"
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >NavBar</NavBar>
      </div>
    )
  }
}
export default TreeStruct;