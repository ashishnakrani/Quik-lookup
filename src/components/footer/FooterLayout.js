import React, { Component } from 'react';
import './Footer.css'
import {Col, List, Row, Layout, Popover, Tag, Form, Input, Button, Image} from 'antd'
import { Link } from 'react-router-dom';
import logoPic from '../../assets/images/Quick Lookup - Logo.svg';
import { FacebookFilled, LinkedinFilled, TwitterSquareFilled } from '@ant-design/icons';
import startupSupernova from '../../assets/images/brands/Supernova-logo.svg';
import Nvidia from '../../assets/images/brands/nvidia-inception.svg';
import Supernova from '../../assets/images/cluster/Supernova.svg';
import TthsLogo from '../../assets/images/brands/Tths-logo.svg';
import TthsLogoFull from '../../assets/images/brands/Tths-logo-full.svg';
import groska from '../../assets/images/brands/groska.svg';
import request from '../../assets/images/request.svg';
import GitIcon from '../../assets/images/git.svg';
import Text from 'antd/lib/typography/Text';
import TextArea from 'antd/lib/input/TextArea';

const { Footer } = Layout;
const brand_icon = [
    {
        logo_full: TthsLogoFull,
        logo: TthsLogo,
        url: 'https://www.rannis.is/sjodir/rannsoknir/taeknithrounarsjodur/'
    },
    {
        logo: Nvidia,
        logo_full: Nvidia,
        url: 'https://www.nvidia.com/en-us/startups/'
    },
    {
        logo_full: Supernova,
        logo: startupSupernova,
        url: 'https://www.nova.is/hradleid/startupsupernova'
    },
    {
        logo_full: groska,
        logo: groska,
        url: 'https://groska.is'
    },
];
export default class FooterLayout extends Component {
    render() {
        return (
            <>
                <Footer>
                    <div className="container">
                        <div className='footer__container'>
                            <Row>
                                <Col lg={{span:4, offset:0}} md={{span:4, offset:0}}  xs={{span:20, offset:2}} className="bottom-logo-box" >
                                    <img src={logoPic} alt="" />
                                    <img src={request} alt="" className="request-img hidden-xl hidden-lg hidden-md" />
                                </Col>
                                <Col lg={{span:5, offset:0}} md={{span:5, offset:0}} xs={{span:13, offset:2}}>
                                    <List>
                                        <List.Item>
                                            <List.Item.Meta title="Quick Lookup" />
                                        </List.Item>
                                        <List.Item>
                                            <Link to="/available-data">
                                            <List.Item.Meta title="Available Data" />
                                            {/*<span className="hightlight-link">Achtung!</span>*/}
                                            </Link>
                                        </List.Item>
                                        <List.Item>
                                            <Link to="/features">
                                            <List.Item.Meta title="Features" />
                                            </Link>
                                        </List.Item>
                                        <List.Item>
                                            <Link to="/pricing">
                                            <List.Item.Meta title="Pricing" />
                                            {/*<span className="hightlight-link">Pricing</span>*/}
                                            </Link>
                                        </List.Item>
                                        <List.Item>
                                            <Link to="/about-us">
                                            <List.Item.Meta title="About Us" />
                                            </Link>
                                        </List.Item>
                                    </List>
                                </Col>
                                <Col lg={4} md={4} xs={7}>
                                    <List>
                                        <List.Item>
                                        <Link to="">
                                            <List.Item.Meta title="Licence & Terms" />
                                        </Link>
                                        </List.Item>
                                        <List.Item>
                                        <Link to="/license">
                                            <List.Item.Meta title="License" />
                                        </Link>
                                        </List.Item>
                                        <List.Item>
                                        <Link to="/terms">
                                            <List.Item.Meta title="Terms & Conditions" />
                                        </Link>
                                        </List.Item>
                                        <List.Item>
                                        <Link to="">
                                            <List.Item.Meta title="Fair Use" />
                                        </Link>
                                        </List.Item>
                                        {/*<List.Item>*/}
                                        {/*<Link to="">*/}
                                        {/*    <List.Item.Meta title="Nomini Deus" />*/}
                                        {/*</Link>*/}
                                        {/*</List.Item>*/}
                                    </List>
                                </Col>
                                <Col lg={{span:4, offset:0}} md={{span:4, offset:0}}  xs={{span:13, offset:2}}>
                                    <List>
                                        <List.Item>
                                        <Link to="">
                                            <List.Item.Meta title="News & Blog" />
                                        </Link>
                                        </List.Item>
                                        <List.Item>
                                        <Link to="">
                                            <List.Item.Meta title="Coming Soon" className='footer-active-line'/>
                                        </Link>
                                        </List.Item>
                                    </List>
                                </Col>
                                <Col lg={4} md={4} xs={7}>
                                    <List>
                                        <List.Item>
                                        <Link to="">
                                            <List.Item.Meta title="Contact & Media" />
                                        </Link>
                                        </List.Item>
                                        <List.Item>
                                        <Link to="">
                                            <List.Item.Meta title="Contact Us" />
                                        </Link>
                                        </List.Item>
                                        <List.Item>
                                        <Link to="">
                                            <List.Item.Meta title="Press Kit" />
                                        </Link>
                                        </List.Item>
                                    </List>
                                </Col>
                                <Col lg={2} md={2} xs={2}>
                                    <Popover overlayClassName="footer" placement="topRight" title="How can we help?" content={
                                    <>
                                        <Form
                                            layout="vertical"
                                            autoComplete="off"
                                            >
                                            <Form.Item
                                                name="url"
                                                label="Hi,there"
                                                >
                                                <TextArea placeholde="Write Something" rows={6} ></TextArea>
                                            </Form.Item>
                                            <Form.Item>
                                                <Button type="primary">Send</Button>
                                            </Form.Item>
                                        </Form>
                                    </>
                                    } trigger="click">
                                        {/* <img src={request} alt="" className="request-img hidden-sm hidden-xs" /> */}
                                    </Popover>
                                </Col>
                            </Row>
                            <Row className="footer-brands">
                                <Col lg={{offset:4, span:12}} md={{offset:3, span:18}} xs={{span:20, offset:2}}>
                                    <div className="hidden-sm hidden-xs">
                                        <List
                                            itemLayout="vertical"
                                            dataSource={brand_icon}
                                            renderItem={item => (
                                            <List.Item>
                                                <a href={item.url}><List.Item.Meta avatar={<img src={item.logo_full} alt="" />} /></a>
                                            </List.Item>
                                            )}
                                        />
                                    </div>
                                    <div className="hidden-xl hidden-lg hidden-md">
                                        <List
                                            itemLayout="vertical"
                                            dataSource={brand_icon}
                                            renderItem={item => (
                                            <List.Item>
                                                <a href={item.url}><List.Item.Meta avatar={<img src={item.logo} alt="" />} /></a>
                                            </List.Item>
                                            )}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Footer>
                <Footer className='copyright-bottom-sec'>
                    <div className="container">
                        <Row>
                            <Col lg={{offset:4,span:9}} xs={14} >
                                <ul className="copyright-list">
                                    <li className="copyright-list-item">
                                        <Link to="">TERMS</Link>
                                    </li>
                                    <li className="copyright-list-item">
                                        <Link to="">PRIVACY</Link>
                                    </li>
                                    <li className="copyright-list-item">
                                        <Link to="">CONTACT</Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col lg={10} xs={10} className="social-icons" >
                                <a href="https://www.facebook.com/quicklookup">
                                    <FacebookFilled />
                                </a>
                                <a href="https://linkedin.com/company/quicklookup">
                                    <LinkedinFilled />
                                </a>
                                <a href="https://github.com/smartdataHQ" className='footer-git-icon'>
                                   <img src={GitIcon} alt="" />
                                </a>
                                <a href="https://twitter.com/quicklookup">
                                    <TwitterSquareFilled />
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            <Col ld={{offset:4,span:14}} lg={{offset:4}} className="copyright-box">
                                <Text className="copyright-text hidden-sm hidden-xs">Copyright © 2022 Snjallgögn</Text>
                                <Text className="copyright-text">Gróska, 101 Reykjavik, Iceland</Text>
                            </Col>
                        </Row>
                    </div>
                </Footer>
            </>
        )
    }
}