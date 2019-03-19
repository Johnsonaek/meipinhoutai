import React from 'react'
import {Carousel} from 'antd'
import './style.css'


class Home extends React.Component {
  render() {
    return (
      <div style={styles.bg} className='home'>

      </div>
    )
  }
}

const styles = {
  bg:{
    position:'absolute',
    top:0,
    left:0,
    width:'100%',
    height:'calc(100vh - 64px)'
  }
}

export default Home
