import React from 'react'
import {Card, Popconfirm, Button,Select, Table, Divider, BackTop, DatePicker, Form, InputNumber, Input} from 'antd'
import axios from 'axios'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'
import './index.css'
const Option = Select.Option;

const data8 = [];
for (let i = 0; i < 100; i++) {
  data8.push({
    key: i.toString(),
    user: `Edward King ${i+1}`,
    name: `爱德华 ${i+1}`,
    phone: 13752201254,
    maker:'李四',
    time:'创建时间',
    status:'可用',
  });
}
const FormItem = Form.Item;
const EditableContext = React.createContext();
const EditableRow = ({form, index, ...props}) => (
    <EditableContext.Provider value={form}>
      <tr {...props} />
    </EditableContext.Provider>
);
const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === 'number') {
      return <InputNumber/>;
    }
    return <Input/>;
  };

  render() {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      ...restProps
    } = this.props;
    return (
        <EditableContext.Consumer>
          {(form) => {
            const {getFieldDecorator} = form;
            return (
                <td {...restProps}>
                  {editing ? (
                      <FormItem style={{margin: 0}}>
                        {getFieldDecorator(dataIndex, {
                          rules: [{
                            required: true,
                            message: `Please Input ${title}!`,
                          }],
                          initialValue: record[dataIndex],
                        })(this.getInput())}
                      </FormItem>
                  ) : restProps.children}
                </td>
            );
          }}
        </EditableContext.Consumer>
    );
  }
}

class PartnerList extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    loading: false,
    data4: [],
    pagination: {
      pageSize: 8
    },

    count: 2,
    data8,
    editingKey: '',
  }

  componentDidMount() {
    this.getRemoteData()
  }


  columns8 = [
    {
      title: 'ID',
      dataIndex: 'key',
      width: '15%',
      editable: true,
    },
    {
      title: '账户',
      dataIndex: 'user',
      width: '15%',
      editable: true,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: '15%',
      editable: true,
    },
    {
      title: '创建时间',
      dataIndex: 'time',
      width: '15%',
      editable: true,
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      width: '15%',
      editable: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: '15%',
      editable: true,
    },
    {
      title: '创建人',
      dataIndex: 'maker',
      width: '15%',
      editable: true,
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => {
        const editable = this.isEditing(record);
        return (
            <div>
              {editable ? (
                  <span>
                  <EditableContext.Consumer>
                    {form => (
                        <a

                            onClick={() => this.save(form, record.key)}
                            style={{marginRight: 8}}
                        >
                          Save
                        </a>
                    )}
                  </EditableContext.Consumer>
                  <Popconfirm
                      title="Sure to cancel?"
                      onConfirm={() => this.cancel(record.key)}
                  >
                    <a>Cancel</a>
                  </Popconfirm>
                </span>
              ) : (
                  <a onClick={() => this.edit(record.key)}>Edit</a>
              )}
            </div>
        );
      },
    },
  ]

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    })
  }
  clearFilters = () => {
    this.setState({filteredInfo: null})
  }
  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    })
  }
  setSort = (type) => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: type,
      },
    })
  }

  getRemoteData(params) {
    this.setState({
      loading: true
    })
    axios.get('https://randomuser.me/api', {
      params: {
        results: 10,
        size: 200,
        ...params
      }
    }).then(res => {
      const pagination = {...this.state.pagination};
      pagination.total = 200
      this.setState({
        loading: false,
        data4: res.data.results,
        pagination
      })
    })
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = {...this.state.pagination};
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.getRemoteData({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    })
  }
  addPartner(){
    fetch('http://test1001.meipinsuda.com/partner/communal/doLogin',
        {
          method:"POST",
          username:'222',
          password:"123456",
          captcha:'1111'
        }).then(res=>{
          console.log(res)
    }).catch(err =>{
      console.log(err)
    })
  }
  onDelete = (key) => {
    const arr = this.state.data7.slice()
    this.setState({
      data7: arr.filter(item => item.key !== key)
    })
  }
  handleAdd = () => {
    const {data8, count} = this.state //本来想用data7的length来代替count，但是删除行后，length会-1
    const newData = {
      key: count,
      name: ``,
      age: '',
      address: ``,
    };
    this.setState({
      data8: [...data8, newData],
      count: count + 1
    })
  }
  isEditing = (record) => {
    return record.key === this.state.editingKey;
  };

  edit(key) {
    this.setState({editingKey: key});
  }

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data8];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({data8: newData, editingKey: ''});
      } else {
        newData.push(data8);
        this.setState({data8: newData, editingKey: ''});
      }
    });
  }

  cancel = () => {
    this.setState({editingKey: ''});
  };

  render() {
    const rowSelection = {
      selections: true
    }
    let {sortedInfo, filteredInfo} = this.state
    sortedInfo = sortedInfo || {}
    filteredInfo = filteredInfo || {}
    const columns3 = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filters: [
          {text: 'Joe', value: 'Joe'},
          {text: 'Jim', value: 'Jim'},
        ],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
        sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
      }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        filters: [
          {text: 'London', value: 'London'},
          {text: 'New York', value: 'New York'},
        ],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
      }]
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns8 = this.columns8.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === 'age' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    });
      function handleChange(value) {
          console.log(`selected ${value}`);
      }
      function handleChange2(value) {
          console.log(`selected ${value}`);
      }
    return (
        <div>
          <Card bordered={false} title='合伙人列表' style={{marginBottom: 10, minHeight: 440}} id='editTable'>
            <div className="header1">
                <div className='box'>
                    <p style={{width:54}}>地区：</p><Select defaultValue="省/市/区" style={{ width: 120 }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
                </div>
                <div className='box'>
                  <p style={{width:54}}>电话： </p><Input type="text" placeholder=' 请输入电话号码'/>
                </div>
                <div className='box'>
                    <p style={{width:54}}>姓名： </p><Input type="text"  placeholder=' 请输入姓名'/>
                </div>
            </div>
            <div className="header2">
              <div className='box'>
                创建时间：<DatePicker />
              </div>
              <div className='box'>
                  状态：<Select defaultValue="全部" style={{ width: 120 }} onChange={handleChange2}>
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled" disabled>Disabled</Option>
                      <Option value="Yiminghe">yiminghe</Option>
                  </Select>
              </div>
              <div className='box'>
                <Button>搜索</Button>
                <Button>导出数据</Button>
              </div>
            </div>

            <p>
              <Button onClick={this.addPartner}><a href="./partnerlist/partnerlistadd">添加合伙人</a></Button>
            </p>
            <Table style={styles.tableStyle} components={components} bordered dataSource={this.state.data8}
                   columns={columns8}/>
          </Card>
          <BackTop visibilityHeight={200} style={{right: 50}}/>
        </div>
    )
  }
}

const styles = {
  tableStyle: {
    width: '80%'
  },
  affixBox: {
    position: 'absolute',
    top: 100,
    right: 50,
    with: 170
  }
}

export default PartnerList
