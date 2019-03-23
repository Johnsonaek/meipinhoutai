import React from 'react'
import { withRouter, Switch, Redirect } from 'react-router-dom'
import LoadableComponent from '../../utils/LoadableComponent'
import PrivateRoute from '../PrivateRoute'

const Home = LoadableComponent(()=>import('../../routes/Home/index'))  //参数一定要是函数，否则不会懒加载，只会代码拆分

//由组件关联到路由的文件

//基本组件Demo
const ButtonDemo = LoadableComponent(()=>import('../../routes/General/ButtonDemo/index'))
const IconDemo = LoadableComponent(()=>import('../../routes/General/IconDemo/index'))


//合伙人组件Demo
const PartnerListDemo = LoadableComponent(()=>import('../../routes/Partner/PartnerList'))
const PartnerListAddDemo = LoadableComponent(()=>import('../../routes/Partner/PartnerList/PartnerListAdd'))


//数据管理demo
const SituationDemo = LoadableComponent(()=>import('../../routes/Data/Situation'))
const FluxDemo = LoadableComponent(()=>import('../../routes/Data/Flux'))
const TargetDemo = LoadableComponent(()=>import('../../routes/Data/Target'))
const UserDemo = LoadableComponent(()=>import('../../routes/Data/User'))
const AssessmentDemo = LoadableComponent(()=>import('../../routes/Data/Assessment'))


//会员
const IquiryDemo = LoadableComponent(()=>import('../../routes/Vip/Inquiry'))
const ManageDemo = LoadableComponent(()=>import('../../routes/Vip/Manage'))
const OperationDemo = LoadableComponent(()=>import('../../routes/Vip/Operation'))
const TagDemo = LoadableComponent(()=>import('../../routes/Vip/Tag'))


//商品列表
const ListDemo = LoadableComponent(()=>import('../../routes/Goods/List'))
const AuditDemo = LoadableComponent(()=>import('../../routes/Goods/Audit'))

/*
//店铺管理
const AuditShop = LoadableComponent(()=>import('../../routes/shop/auditshop'))
const ListShop = LoadableComponent(()=>import('../../routes/shop/listshop'))
const RecordShop = LoadableComponent(()=>import('../../routes/shop/recordshop'))
*/



//导航组件Demo
const DropdownDemo = LoadableComponent(()=>import('../../routes/Navigation/DropdownDemo/index'))
const MenuDemo = LoadableComponent(()=>import('../../routes/Navigation/MenuDemo/index'))
const StepsDemo = LoadableComponent(()=>import('../../routes/Navigation/StepsDemo/index'))

//输入组件Demo
const FormDemo1 = LoadableComponent(()=>import('../../routes/Entry/FormDemo/FormDemo1'))
const FormDemo2 = LoadableComponent(()=>import('../../routes/Entry/FormDemo/FormDemo2'))
const UploadDemo = LoadableComponent(()=>import('../../routes/Entry/UploadDemo/index'))

//显示组件Demo
const CarouselDemo = LoadableComponent(()=>import('../../routes/Display/CarouselDemo/index'))
const CollapseDemo = LoadableComponent(()=>import('../../routes/Display/CollapseDemo/index'))
const ListDemo_goods = LoadableComponent(()=>import('../../routes/Display/ListDemo/index'))
const TableDemo = LoadableComponent(()=>import('../../routes/Display/TableDemo/index'))
const TabsDemo = LoadableComponent(()=>import('../../routes/Display/TabsDemo/index'))

//反馈组件Demo
const SpinDemo = LoadableComponent(()=>import('../../routes/Feedback/SpinDemo/index'))
const ModalDemo = LoadableComponent(()=>import('../../routes/Feedback/ModalDemo/index'))
const NotificationDemo = LoadableComponent(()=>import('../../routes/Feedback/NotificationDemo/index'))

//其它
const AnimationDemo = LoadableComponent(()=>import('../../routes/Other/AnimationDemo/index'))
const GalleryDemo = LoadableComponent(()=>import('../../routes/Other/GalleryDemo/index'))
const DraftDemo = LoadableComponent(()=>import('../../routes/Other/DraftDemo/index'))
const ChartDemo = LoadableComponent(()=>import('../../routes/Other/ChartDemo/index'))
const LoadingDemo = LoadableComponent(()=>import('../../routes/Other/LoadingDemo/index'))
const ErrorPage = LoadableComponent(()=>import('../../routes/Other/ErrorPage/index'))
const SpringText = LoadableComponent(()=>import('../../routes/Other/SpringText/index'))

//关于
const About = LoadableComponent(()=>import('../../routes/About/index'))

@withRouter
class ContentMain extends React.Component {
  render () {
    return (
      <div style={{padding: 16, position: 'relative'}}>
        <Switch>
          <PrivateRoute exact path='/home' component={Home}/>

          <PrivateRoute exact path='/home/general/button' component={ButtonDemo}/>

          //由打开的网址关联到组件
          //代理人路由
          <PrivateRoute exact path='/home/partner/partnerlist' component={PartnerListDemo}/>
          <PrivateRoute exact path='/home/partner/partnerlist/partnerlistadd' component={PartnerListAddDemo}/>

          //数据管理路由
          <PrivateRoute exact path='/home/data/situation' component={SituationDemo}/>
          <PrivateRoute exact path='/home/data/target' component={TargetDemo}/>
          <PrivateRoute exact path='/home/data/flux/' component={FluxDemo}/>
          <PrivateRoute exact path='/home/data/user' component={UserDemo}/>
          <PrivateRoute exact path='/home/data/' component={PartnerListDemo}/>
          <PrivateRoute exact path='/home/data/assessment' component={AssessmentDemo}/>

          //会员路由
          <PrivateRoute exact path='/home/vip/inquiry' component={IquiryDemo}/>
          <PrivateRoute exact path='/home/vip/manage/' component={ManageDemo}/>
          <PrivateRoute exact path='/home/vip/operation' component={OperationDemo}/>
          <PrivateRoute exact path='/home/vip/tag' component={TagDemo}/>

          //商品
          <PrivateRoute exact path='/home/goods/list' component={ListDemo}/>
          <PrivateRoute exact path='/home/goods/audit' component={AuditDemo}/>

{/*
          //店铺
          <PrivateRoute exact path='/home/shop/auditshop' component={AuditShop}/>
          <PrivateRoute exact path='/home/shop/listshop' component={ListShop}/>
          <PrivateRoute exact path='/home/shop/recordshop' component={RecordShop}/>

*/}




          <PrivateRoute exact path='/home/general/icon' component={IconDemo}/>

          <PrivateRoute exact path='/home/navigation/dropdown' component={DropdownDemo}/>
          <PrivateRoute exact path='/home/navigation/menu' component={MenuDemo}/>
          <PrivateRoute exact path='/home/navigation/steps' component={StepsDemo}/>

          <PrivateRoute exact path='/home/entry/form/basic-form' component={FormDemo1}/>
          <PrivateRoute exact path='/home/entry/form/step-form' component={FormDemo2}/>
          <PrivateRoute exact path='/home/entry/upload' component={UploadDemo}/>

          <PrivateRoute exact path='/home/display/carousel' component={CarouselDemo}/>
          <PrivateRoute exact path='/home/display/collapse' component={CollapseDemo}/>
          <PrivateRoute exact path='/home/display/list' component={ListDemo}/>
          <PrivateRoute exact path='/home/display/table' component={TableDemo}/>
          <PrivateRoute exact path='/home/display/tabs' component={TabsDemo}/>

          <PrivateRoute exact path='/home/feedback/modal' component={ModalDemo}/>
          <PrivateRoute exact path='/home/feedback/notification' component={NotificationDemo}/>
          <PrivateRoute exact path='/home/feedback/spin' component={SpinDemo}/>

          <PrivateRoute exact path='/home/other/animation' component={AnimationDemo}/>
          <PrivateRoute exact path='/home/other/gallery' component={GalleryDemo}/>
          <PrivateRoute exact path='/home/other/draft' component={DraftDemo}/>
          <PrivateRoute exact path='/home/other/chart' component={ChartDemo}/>
          <PrivateRoute exact path='/home/other/loading' component={LoadingDemo}/>
          <PrivateRoute exact path='/home/other/404' component={ErrorPage}/>
          <PrivateRoute exact path='/home/other/springText' component={SpringText}/>

          <PrivateRoute exact path='/home/about' component={About}/>

          <Redirect exact from='/' to='/home'/>
        </Switch>
      </div>
    )
  }
}

export default ContentMain
