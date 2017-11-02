import React from 'react';
import { Form, Input, Icon, Row, Col, Button } from 'antd';

import baseUrl from '../config.jsx';
import '../style/UserReg.css'

const FormItem = Form.Item;

class UserRegister extends React.Component {
    state = {
        confirmDirty: false,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                let request = new Request(`${baseUrl}/userRegister`, {
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
    }   // 数据验证成功后提交表单

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('userPwd')) {
            callback('两次密码不匹配!');    // 回调函数
        } else {
            callback();
        }
    }

    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 6 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 14 },
                sm: { span: 14 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 12,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 1,
                },
            },
        };

        // label:输入框名称
        // type:内建正则校验   validator：自定义校验

        return (
            <div className="userReg">
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label="邮箱"
                        hasFeedback
                    >
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: '邮箱格式不正确!',
                            }, {
                                required: true, message: '请输入邮箱!',
                            }],
                        })(
                            <Input />
                            )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="用户名"
                        hasFeedback
                    >
                        {getFieldDecorator('userName', {
                            rules: [{
                                required: true, message: '请输入用户名!',
                            }],
                        })(
                            <Input />
                            )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="密码"
                        hasFeedback
                    >
                        {getFieldDecorator('userPwd', {
                            rules: [{
                                required: true, message: '请输入密码!',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Input type="password" />
                            )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="确认密码"
                        hasFeedback
                    >
                        {getFieldDecorator('confirm', {
                            rules: [{
                                required: true, message: '请再次确认你的密码!',
                            }, {
                                validator: this.checkPassword,
                            }],
                        })(
                            <Input type="password" onBlur={this.handleConfirmBlur} />
                            )}
                    </FormItem>

                    {/*<FormItem
                        {...formItemLayout}
                        label="验证码"
                    >
                        <Row gutter={8}>
                            <Col span={12}>
                                {getFieldDecorator('captcha', {
                                    rules: [{ required: true, message: '请输入邮箱获取到的验证码!' }],
                                })(
                                    <Input size="large" />
                                    )}
                            </Col>
                            <Col span={12}>
                                <Button size="large">获取验证码</Button>
                            </Col>
                        </Row>
                    </FormItem>*/}

                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" className="reg-form-button">注 册</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const UserReg = Form.create()(UserRegister);

export default UserReg;