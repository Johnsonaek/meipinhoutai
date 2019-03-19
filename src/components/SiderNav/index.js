import React from 'react'
import CustomMenu from "../CustomMenu/index";

const menus = [
  {
    title: '合伙人管理',
    icon: 'home',
    key: '/home',
    subs: [
      {key: '/home/general/button', title: '合伙人列表', icon: '',},

    ]
  },
  {
    title: '数据管理',
    icon: 'laptop',
    key: '/home/general',
    subs: [
      {key: '/home/general/button', title: '实时概况', icon: '',},
      {key: '/home/general/icon', title: '核心指标', icon: '',},
      {key: '/home/general/button', title: '流量看板', icon: '',},
      {key: '/home/general/icon', title: '客户看板', icon: '',},
      {key: '/home/general/icon', title: '评价体系', icon: '',},
    ]
  },
  {
    title: '会员',
    icon: 'bars',
    key: '/home/navigation',
    subs: [
      {key: '/home/navigation/dropdown', title: '客户管理', icon: ''},
      {key: '/home/navigation/menu', title: '客户查询', icon: ''},
      {key: '/home/navigation/steps', title: '标签管理', icon: ''},
      {key: '/home/navigation/steps', title: '客户运营', icon: ''},
    ]
  },
  {
    title: '商品管理',
    icon: 'edit',
    key: '/home/entry',
    subs: [
      {
        key: '/home/entry/form',
        title: '表单',
        icon: '',
        subs: [
          {key: '/home/entry/form/basic-form', title: '商品列表', icon: ''},
          {key: '/home/entry/form/step-form', title: '上架审核', icon: ''}
        ]
      },
      {key: '/home/entry/upload', title: '上传', icon: ''},
    ]
  },
  {
    title: '店铺管理',
    icon: 'desktop',
    key: '/home/display',
    subs: [
      {key: '/home/display/carousel', title: '店铺列表', icon: ''},
      {key: '/home/display/collapse', title: '开店备案', icon: ''},
      {key: '/home/display/list', title: '开店审核', icon: ''},
    ]
  },
  {
    title: '订单管理',
    icon: 'message',
    key: '/home/feedback',
    subs: [
      {key: '/home/feedback/modal', title: '订单处理', icon: '',},
      {key: '/home/feedback/notification', title: '配送服务', icon: ''},
    ]
  },
  {
    title: '活动管理',
    icon: 'bulb',
    key: '/home/other',
    subs:[
      {key: '/home/other/animation', title: '平台发起', icon: '',},
      {key: '/home/other/gallery', title: '店铺发起', icon: '',},
    ]
  },
  {
    title: '运营支持',
    icon: 'info-circle-o',
    key: '/home/about',
    subs:[
      {key: '/home/other/animation', title: '宣传素材下载', icon: '',},
      {key: '/home/other/gallery', title: '商学院', icon: '',},
    ]
  }
]


class SiderNav extends React.Component {
  render() {

    return (
      <div style={{height: '100vh',overflowY:'scroll'}}>
        <div style={styles.logo}></div>
        <CustomMenu menus={menus}/>
      </div>
    )
  }
}

const styles = {
  logo: {
    height: '32px',
    background: 'rgba(255, 255, 255, .2)',
    margin: '16px'
  }
}

export default SiderNav
