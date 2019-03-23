import React from 'react'
import CustomMenu from "../CustomMenu/index";

const menus = [
  {
    title: '合伙人管理',
    icon: 'user',
    key: '/home',
    subs: [
      {key: '/home/Partner/PartnerList', title: '合伙人列表', icon: '',},

    ]
  },
  {
    title: '数据管理',
    icon: 'bar-chart',
    key: '/home/general',
    subs: [
      {key: '/home/data/situation', title: '实时概况', icon: '',},
      {key: '/home/data/target', title: '核心指标', icon: '',},
      {key: '/home/data/flux', title: '流量看板', icon: '',},
      {key: '/home/data/user', title: '客户看板', icon: '',},
      {key: '/home/data/assessment', title: '评价体系', icon: '',},
    ]
  },
  {
    title: '会员',
    icon: 'star',
    key: '/home/navigation',
    subs: [
      {key: '/home/vip/inquiry', title: '客户管理', icon: ''},
      {key: '/home/vip/manage', title: '客户查询', icon: ''},
      {key: '/home/vip/tag', title: '标签管理', icon: ''},
      {key: '/home/vip/operation', title: '客户运营', icon: ''},
    ]
  },
  {
    title: '商品管理',
    icon: 'pay-circle',
    key: '/home/entry',
    subs: [
      {key: '/home/goods/audit', title: '上架审核', icon: ''},
      {key: '/home/goods/list', title: '商品列表', icon: ''}
    ]
  },
  {
    title: '店铺管理',
    icon: 'environment',
    key: '/home/display',
    subs: [
      {key: '/home/shop/listshop', title: '店铺列表', icon: ''},
      {key: '/home/shop/auditshop', title: '开店备案', icon: ''},
      {key: '/home/shop/recordshop', title: '开店审核', icon: ''},
    ]
  },
  {
    title: '订单管理',
    icon: 'mail',
    key: '/home/feedback',
    subs: [
      {key: '/home/feedback/modal', title: '订单处理', icon: '',},
      {key: '/home/feedback/notification', title: '配送服务', icon: ''},
    ]
  },
  {
    title: '活动管理',
    icon: 'tag',
    key: '/home/other',
    subs:[
      {key: '/home/other/animation', title: '平台发起', icon: '',},
      {key: '/home/other/gallery', title: '店铺发起', icon: '',},
    ]
  },
  {
    title: '运营支持',
    icon: 'solution',
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
