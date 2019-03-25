import React from 'react'
import {Layout,Breadcrumb} from 'antd'
import SiderNav from '../../components/SiderNav'
import ContentMain from '../../components/ContentMain'
import HeaderBar from '../../components/HeaderBar'

const {Sider, Header, Content, Footer} = Layout


class Index extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }
  }

  componentWillMount() {
    document.title = '美品苏打商家后台'
  }


  toggle = () => {
    // console.log(this)  状态提升后，到底是谁调用的它
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    // 设置Sider的minHeight可以使左右自适应对齐
    return (
      <div id='page'>
        <Layout >
          <Sider collapsible
                 trigger={null}
                 collapsed={this.state.collapsed}
                 >
            <SiderNav/>
          </Sider>
          <Layout>
            <Header style={{background: '#fff', padding: '0 16px'}}>
              <HeaderBar collapsed={this.state.collapsed} onToggle={this.toggle}/>

            </Header>
            <Content >
              <ContentMain/>
            </Content>
            <Footer style={{textAlign: 'center'}}> <a target='_blank' href='https://github.com/zhangZhiHao1996/react-admin-master'>玛姿宝科技有限公司</a></Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default Index
