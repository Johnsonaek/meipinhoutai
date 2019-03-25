import React from 'react'
import {notification} from 'antd'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb'
class Assessment extends React.Component{

  render(){
    return (

      <div style={styles.bg}>
        <CustomBreadcrumb arr={['数据管理','评价体系']}/>
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
