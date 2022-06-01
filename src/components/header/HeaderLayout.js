import React, { Component, useEffect, useState } from 'react';
import './Header.css'
import { MenuOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Drawer, Image, Menu, Layout, Row, Col, Space } from 'antd';
import { Link } from 'react-router-dom';
import logout_icon from '../../assets/images/logout_icon.svg';
import notify_icon from '../../assets/images/notify_icon.svg';
import logoPic from '../../assets/images/Quick Lookup - Logo.svg';
import logoPic_header from '../../assets/images/Quick Lookup - Logo-header.svg';

const { Header } = Layout;
const data = [
    {
        path: '/available-data',
        name: 'Available Data',
    },
    {
        path: '/features',
        name: 'Features',
    },
    {
        path: '/pricing',
        name: 'Pricing',
    },
    {
        path: '/about-us',
        name: 'About Us',
    },
];
const LOGO_URL = "https://assets.quicklookup.info/assets/logo/QuickLookup/QL-Logo-size%3Dmedium%2C%20type%3Dlogo%2C%20version%3Dpreview%2C%20font%3Dblack.svg";

const HeaderLayout = () => {
    const [current, setCurrent] = useState("");
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setCurrent(window.location.pathname)
    }, [window.location.pathname])

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    const handleClick = e => {
        setCurrent(e.key);
    };
   
        return (
            <>
                <div className='header-custom-container'>
                    <Header>
                        <Row align="middle">
                            <Col xs={20} sm={21} md={4} >
                                <Link to="/" className='logo-wrapper'><Image preview={false} max-width={145} src={LOGO_URL} alt="Quick Lookup" /></Link>
                            </Col>
                            <Col xs={0} sm={0} md={17}>
                                <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className="header-menu-items" >
                                {/*<Menu.Item><Typography.Link href="https://countries.quicklookup.info">Best Country API</Typography.Link></Menu.Item>*/}
                                    {
                                        data &&
                                        data.map((item) => (
                                            <Menu.Item key={item.path}>
                                                <Link to={item.path}>{item.name}</Link>
                                            </Menu.Item>
                                        ))
                                    }                                
                                </Menu>
                            </Col>
                            {/* <Col xs={0} sm={0} md={2} >
                                <Space align="center" size={16} >
                                    <Link to="/">
                                        <Badge count={2}>
                                            <Avatar src={notify_icon} shape="square" size="small" />
                                        </Badge>
                                    </Link>
                                    <Link to="/">
                                        <Avatar src={logout_icon} shape="square" size="small" className='back-arrow-button' /> */}
                                        {/* <Image preview={false} src={logout_icon} className="logout-icon" alt="notification" /> */}
                                    {/* </Link>
                                </Space>                                                       
                            </Col> */}
                            <Col sm={3} xs={4} md={0}>
                                <Button className="menubtn" type="primary" shape="circle" icon={<MenuOutlined />} onClick={showDrawer} />
                                {/* <Link to="/">
                                    <Badge count={2}>
                                        <Avatar src={notify_icon} size="medium" />
                                    </Badge>
                                </Link> */}
                                <Drawer title={<Image src={LOGO_URL} alt="logo" />} placement="right" onClose={onClose} visible={visible}>
                                    <Menu selectedKeys={[current]} mode="inline" >
                                        {
                                            data &&
                                            data.map((item) => (
                                                <Menu.Item key={item.path}>
                                                    <Link to={item.path}>{item.name}</Link>
                                                </Menu.Item>
                                            ))
                                        }                                
                                    </Menu>
                                </Drawer>
                            </Col>
                        </Row>
                    </Header>
                </div>
            </>
        )
    
}

export default HeaderLayout;