import React from 'react';
import { Form, Icon, Input, Button } from 'antd';

import '../style/UserReg.css';

const FormItem = Form.Item;

class UserRegister extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();    // 阻止链接打开新页面的默认行为
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                
                const { form } = this.props;
                const test = form.getFieldsValue();
                console.log(test);
            }
        });
    }
    // validateFields：校验并获取一组输入域的值与error, 若fieldNames参数为空，则校验全部组件。


    render() {
        const { getFieldDecorator } = this.props.form;
        // getFieldDecorator：用于和表单进行双向绑定。getFieldDecorator包装的控件，表单会自动添加value、onChage，
        // 数据同步将被Form接管

        return (
            <div className = "userReg">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入邮箱或手机号！' }]
                        })(
                            <Input prefix={<Icon type="user" style={{ fontsize: 20 }} />} placeholder='邮箱/手机号' />
                            )}
                    </FormItem>

                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }]
                        })(
                            <Input prefix={<Icon type='lock' style={{ fontsize: 20 }} />} type='password' placeholder='密 码' />
                            )}
                    </FormItem>

                    <FormItem>
                        <Button type="primary" htmlType="submit">
                            注 册
                        </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

const UserReg = Form.create()(UserRegister);

export default UserReg;