import React from 'react'
import {notification} from 'antd'

class Assessment extends React.Component{

  render(){
    return (
      <div style={styles.bg}>
        hello,Assessment
      </div>
    )
  }
}
const styles = {
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 'calc(100vh - 64px)',
  },
}
export default Assessment
