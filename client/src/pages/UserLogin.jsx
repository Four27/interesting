import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import baseUrl from '../config.jsx';
import '../style/UserLogin.css';

const FormItem = Form.Item;
// 一个Form.Item 建议只放一个被 getFieldDecorator 装饰过的 child

class UserLog extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                let request = new Request(`${baseUrl}/userLogin`, {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json'},
                    mode: "cors",
                    body: JSON.stringify(values)
                });

                fetch(request).then(
                    (res) => {
                        return res.json();
                    }
                ).then (
                    (data) => {
                        console.log(data);
                    }
                ).catch (
                    (err) => {
                        console.log(err);
                    }
                )
            }
        });
    }
    // validateFields：校验并获取一组输入域的值与error, 若fieldNames参数为空，则校验全部组件。


    render() {
        const { getFieldDecorator } = this.props.form;
        // getFieldDecorator：用于和表单进行双向绑定。getFieldDecorator包装的控件，表单会自动添加value、onChage，
        // 数据同步将被Form接管

        return (
            <div className="userLogin">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: '邮箱格式不正确!',
                            },{ 
                                required: true, message: '请输入邮箱号！' 
                            }]
                        })(
                            <Input prefix={<Icon type="user" style={{ fontsize: 20 }} />} placeholder='用户邮箱' />
                            )}
                    </FormItem>

                    <FormItem>
                        {getFieldDecorator('userPwd', {
                            rules: [{ required: true, message: '请输入密码!' }]
                        })(
                            <Input prefix={<Icon type='lock' style={{ fontsize: 20 }} />} type='password' placeholder='密 码' />
                            )}
                    </FormItem>

                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登 录
                        </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

const UserLogin = Form.create()(UserLog);   // 经过 Form.create 包装的组件将会自带 this.props.form 属性

export default UserLogin;

// getFieldDecorator中的rules，即校验规则：required（是否必选即是否必须填写，默认为false），message（校验文案，即错误提示）