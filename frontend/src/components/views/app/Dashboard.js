import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, { useState, useEffect, Fragment } from 'react';
import ButtonAppBar from '../../layout/ButtonAppBar';

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];


const Dashboard = () => {
    const [userEmail, setUserEmail] = useState('');
    const [loading, setLoading] = useState(true);
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    useEffect(() => {
        if (localStorage.getItem('token') === null) {
            window.location.replace('http://localhost:3000/login');
        } else {
            fetch('http://127.0.0.1:8000/api/v1/users/auth/user/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setUserEmail(data.email);
                    setLoading(false);
                });
        }
    }, []);

    return (
        <div>
            {loading === false && (
                <Fragment>
                    <Layout
                        style={{
                            minHeight: '100vh',
                        }}
                    >
                        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                            <div
                                style={{
                                    height: 32,
                                    margin: 16,
                                    background: 'rgba(255, 255, 255, 0.2)',
                                }}
                            />
                            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                        </Sider>
                        <Layout className="site-layout">
                            {/* <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                /> */}
                            {/* <ButtonAppBar /> */}
                            <Content
                                style={{
                                    margin: '0 16px',
                                }}
                            >
                                <div
                                    style={{
                                        padding: 24,
                                        minHeight: 360,
                                        background: colorBgContainer,
                                    }}
                                >
                                    Bill is a cat.
                                </div>
                            </Content>
                            <Footer
                                style={{
                                    textAlign: 'center',
                                }}
                            >
                                Ant Design ©2023 Created by Ant UED
                            </Footer>
                        </Layout>
                    </Layout>
                </Fragment>
            )}
        </div>

    );
};
export default Dashboard;