import React from 'react'
import {Icon, message,Radio ,Select, Card, DatePicker, Input, Upload, Button} from 'antd'
import mycss from './index.less'

const RadioGroup = Radio.Group;
const Option = Select.Option;





function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
const selectBefore = (
    <Select defaultValue="Http://" style={{ width: 90 }}>
      <Option value="Http://">Http://</Option>
      <Option value="Https://">Https://</Option>
    </Select>
);
const selectAfter = (
    <Select defaultValue=".com" style={{ width: 80 }}>
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
);

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}


class PartnerListAdd extends React.Component{
  state = {
    loading: false,
    value2: 1,
    value:1,
    imageUrl :'',
  };
  onChange = (e)=> {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    })
  }
  onChange2 = (e)=> {
    console.log('radio checked', e.target.value);
    this.setState({
      value2: e.target.value,
    })
  }
  submitdata = ()=>{
    let formData = new FormData();
    formData.append("username", "222");
    formData.append("password", 123456);

    fetch("http://test1001.meipinsuda.com/partner/communal/doLogin",{
      method: "POST",
      headers: {
        "Content-Type": "form-data"
      },
      body:JSON.stringify(formData),
    }).then((respone)=>{
      console.log("respone ==>",respone)
    }).catch((err)=>{
      console.error(err);
    })
  }
  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  }
  render(){
    const uploadButton = (
        <div>
          <Icon type={this.state.loading ? 'loading' : 'plus'} />
          <div className="ant-upload-text">Upload</div>
        </div>
    );

    const imageUrl = this.state.imageUrl;
    this.handleChange = (info) => {
      if (info.file.status === 'uploading') {
        this.setState({ loading: true });
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => this.setState({
          imageUrl,
          loading: false,
        }));
      }
    }


    return (
      <div style={styles.bg} className={"box"}>
        <h1>会员列表/添加</h1>
        <Card bordered={false} title='基本信息' style={{marginBottom: 10, minHeight: 440}} id='editTable'>
          <div className={'info info1'}>电话：<Input type="text"placeholder=' 请输入关键字'/></div>
          <div className={'info info2'}>用户名：<Input type="text"placeholder=' 请输入关键字'/></div>
          <div className={'info inf3'}>姓名：<Input type="text"placeholder=' 请输入用户姓名'/></div>
          <div className={'info inf4'}>密码：<Input type="text"placeholder=' 请输入登陆手机密码'/></div>
          <div className={'info inf5'}>
              身份证：
              <div className={'picbox'}>
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="//jsonplaceholder.typicode.com/posts/"
                    beforeUpload={beforeUpload}
                    onChange={this.handleChange}
                >
                  {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
                </Upload>
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="//jsonplaceholder.typicode.com/posts/"
                    beforeUpload={beforeUpload}
                    onChange={this.handleChange}
                >
                  {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
                </Upload>
              </div>
          </div>
          <div className={'info info6'}>状态：
              <RadioGroup onChange={this.onChange} value={this.state.value}>
              <Radio value ={1} className={'AAA'}>可用</Radio>
              <Radio value ={2} className={'AAA'}>不可用</Radio>
            </RadioGroup>
          </div>
        </Card>
        <Card  bordered={false} title='会员权限' style={{marginBottom: 10, minHeight: 440}} id='editTable'>
          <div className="root">
            <p>省/市/区：</p>
            <div className="content">
              <Select defaultValue={'省'}></Select>
              <Select defaultValue={'市'}></Select>
              <Select defaultValue={'区'}></Select>
            </div>
          </div>
          <div className="root">
            <p>地址：</p>
            <Input type="请输入详细地址"/>
          </div>
          <div className="root">
            <p>权限：</p>
            <Select defaultValue={'一级合作/500店'}></Select>
          </div>
          <div className="root">
            <p>期限: </p>
            <Select defaultValue={'12个月'}></Select>
          </div>
          <div className="root">
            <p>缴费: </p>
            <RadioGroup onChange={this.onChange2} value={this.state.value2}>
              <Radio value={1}>已缴费</Radio>
              <Radio value={2}>未缴费</Radio>
            </RadioGroup>
          </div>
          <div className="root">
            <Button onClick={this.submitdata}>保存</Button>
          </div>
        </Card>
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
export default PartnerListAdd
