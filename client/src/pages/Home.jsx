import React from 'react';
import { Menu, Layout, Breadcrumb } from 'antd';

import '../style/Home.css';

const { Header, Content, Footer } = Layout;

class Home extends React.Component {
    render() {
        return (
            <Layout>
                <Header style={{ position: 'fixed', width: '100%' }}>
                    <div className="logo">interesting</div>
                    <Menu
                        theme="dark"
                        mode='horizontal'
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1" className="item">首页</Menu.Item>
                        <Menu.Item key="2" className="item">摄影</Menu.Item>
                        <Menu.Item key="3" className="item">音乐</Menu.Item>
                    </Menu>
                </Header>

                <Content style={{ padding: '0 50px', marginTop: 64 }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 450 }}>Content</div>
                </Content>

                <Footer style={{ textAlign: 'center' }}>
                    interesting ©2017 Created by Shirley
                </Footer>
            </Layout>
        )
    }
}

export default Home;