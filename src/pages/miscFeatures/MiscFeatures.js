import React, { Component} from 'react';
import { Anchor, Button, Carousel, Col, Divider, Image,  List,  Row, Select, Form, Input, Card, PageHeader } from 'antd';
import './MiscFeatures.css';
import MiscSection from '../../components/miscSection/MiscSection';
import DolorSit from '../../components/dolorSit/DolorSit';
import SignUp from '../../components/signUp/SignUp';

import { CheckOutlined, EyeOutlined, MessageOutlined, RightOutlined, SearchOutlined, StarOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import Paragraph from 'antd/lib/typography/Paragraph';
import { Link } from 'react-router-dom';
import featuresIcon from "../../assets/images/features-icon.svg";
// import SignUp from "../../assets/images/SignUp.png";
import Laptop from "../../assets/images/laptop.png";
import LaptopTwo from "../../assets/images/laptop-two.png";
import Table from "../../assets/images/table.jpg";
import Integer from "../../assets/images/integer.svg";
import Right from "../../assets/images/right-arrow.svg";
import File from "../../assets/images/files.svg";
import Men from "../../assets/images/men.svg";
import Chart from "../../assets/images/chart.svg";

const IconText = ({ text }) => (
    <Text>
        {text}
    </Text>
);
export default class MicsFeatures extends Component {
    componentDidMount = () => window.scrollTo(0, 0);

    render() {
        return (
        <>
        <MiscSection title="Main Features" semititle="& Differentiators" />
        <div className='misc-features-page'>
            
            {/* goals section */}
            <DolorSit />
            {/* <section className="goals-section invert">
                <div className="container">
                    <Row justify="center">
                    <Col md={6} xs={24}>
                        <Title level={1}>
                        Lorem Ipsum <i>Dolor Sit Amet</i>
                        </Title>
                    </Col>
                    <Col md={12} xs={24}>
                        <Paragraph>
                        We are curating data that falls into the following categories.
                        A small sample is available now but most of it will only be
                        available after our beta and we will continue to make new
                        datasets available for as long as we can improve our coverage.{" "}
                        <i>
                            We realeasing new cureated and linked datasets every month.
                        </i>
                        </Paragraph>
                    </Col>
                    </Row>
                </div>
            </section> */}
            <section className='power-section'>
                <div className='contianer'>
                    <Row>
                        <Col lg={12} xl={12} md={12} xs={24} className="left-part">
                            <Title>Power</Title>
                            <Paragraph>Ut quis accumsan odio. Sed molestie nibh gravida, blandit lectus at.</Paragraph>
                            <div className='power-section__integer-boxes'>
                                <Row>
                                    <Col lg={8} xl={8} md={8} sm={12}>
                                        <div className='power-section__integer-boxes__inner'>
                                            <Image src={Integer} alt="" preview={false} />
                                            <Title>Integer ultrices</Title>
                                            <Paragraph>Mauris feugiat pretium mi. Nullam sagittis odio et tellus tempor venenatis.</Paragraph>
                                            <Link to="" className='power-section__integer-boxes__inner__first-link'>Learn more <Image src={Right} alt="" preview={false} /></Link>
                                        </div>
                                    </Col>
                                    <Col lg={8} xl={8} md={8} sm={12}>
                                        <div className='power-section__integer-boxes__inner'>
                                            <Image src={File} alt="" preview={false} />
                                            <Title>Integer ultrices</Title>
                                            <Link to="">Learn more <Image src={Right} alt="" preview={false} /></Link>
                                        </div>
                                        <div className='power-section__integer-boxes__inner'>
                                            <Image src={Men} alt="" preview={false} />
                                            <Title>Integer ultrices</Title>
                                            <Link to="">Learn more <Image src={Right} alt="" preview={false} /></Link>
                                        </div>
                                    </Col>
                                    <Col lg={8} xl={8} md={8} sm={12}>
                                        <div className='power-section__integer-boxes__inner'>
                                            <Image src={Chart} alt="" preview={false} />
                                            <Title>Integer ultrices</Title>
                                            <Link to="">Learn more <Image src={Right} alt="" preview={false} /></Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={12} xl={12} md={12} xs={24} className="right-part">
                            <Image src={Laptop} alt="" preview={false} />
                        </Col>
                    </Row>
                </div>
            </section>
            <section className='depth-section'>
                <div className='contianer'>
                    <Row>
                        <Col lg={12} xl={12} md={12} xs={24} className="right-part order-log">
                            <Image src={Table} alt="" preview={false} />
                        </Col>
                        <Col lg={12} xl={12} md={12} xs={24} className="left-part">
                            <Title>Depth</Title>
                            <Paragraph>Ut quis accumsan odio. Sed molestie nibh gravida, blandit lectus at.</Paragraph>
                            <div className='depth-section__integer-boxes'>
                                <Row>
                                    <Col lg={8} xl={8} md={8} sm={12}>
                                        <div className='depth-section__integer-boxes__inner'>
                                            <Image src={File} alt="" preview={false} />
                                            <Title>Integer ultrices</Title>
                                            <Paragraph>Mauris feugiat pretium mi. Nullam sagittis odio et tellus tempor venenatis.</Paragraph>
                                            <Link to="" className='depth-section__integer-boxes__inner__first-link'>Learn more <Image src={Right} alt="" preview={false} /></Link>
                                        </div>
                                    </Col>
                                    <Col lg={8} xl={8} md={8} sm={12}>
                                        <div className='depth-section__integer-boxes__inner'>
                                            <Image src={Integer} alt="" preview={false} />
                                            <Title>Integer ultrices</Title>
                                            <Paragraph>Mauris feugiat pretium mi. Nullam sagittis odio et tellus tempor venenatis.</Paragraph>
                                            <Link to="" className='depth-section__integer-boxes__inner__first-link'>Learn more <Image src={Right} alt="" preview={false} /></Link>
                                        </div>
                                    </Col>
                                    <Col lg={8} xl={8} md={8} sm={12}>
                                        <div className='depth-section__integer-boxes__inner'>
                                            <Image src={Men} alt="" preview={false} />
                                            <Title>Integer ultrices</Title>
                                            <Link to="">Learn more <Image src={Right} alt="" preview={false} /></Link>
                                        </div>
                                        <div className='depth-section__integer-boxes__inner'>
                                            <Image src={Chart} alt="" preview={false} />
                                            <Title>Integer ultrices</Title>
                                            <Link to="">Learn more <Image src={Right} alt="" preview={false} /></Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className='accessibility-section'>
                <div className='contianer'>
                    <Row>
                        <Col lg={12} xl={12} md={12} xs={24} className="left-part">
                            <Title>Accessibility</Title>
                            <Paragraph>Ut quis accumsan odio. Sed molestie nibh gravida, blandit lectus at.</Paragraph>
                            <div className='accessibility-section__integer-boxes'>
                                <Row>
                                    <Col lg={8} xl={8} md={8} sm={12}>
                                        <div className='accessibility-section__integer-boxes__inner'>
                                            <Image src={Men} alt="" preview={false} />
                                            <Title>Integer ultrices</Title>
                                            <Link to="">Learn more <Image src={Right} alt="" preview={false} /></Link>
                                        </div>
                                        <div className='accessibility-section__integer-boxes__inner'>
                                            <Image src={File} alt="" preview={false} />
                                            <Title>Integer ultrices</Title>
                                            <Link to="">Learn more <Image src={Right} alt="" preview={false} /></Link>
                                        </div>
                                    </Col>
                                    <Col lg={8} xl={8} md={8} sm={12}>
                                        <div className='accessibility-section__integer-boxes__inner'>
                                            <Image src={Integer} alt="" preview={false} />
                                            <Title>Integer ultrices</Title>
                                            <Paragraph>Mauris feugiat pretium mi. Nullam sagittis odio et tellus tempor venenatis.</Paragraph>
                                            <Link to="" className='accessibility-section__integer-boxes__inner__first-link'>Learn more <Image src={Right} alt="" preview={false} /></Link>
                                        </div>
                                    </Col>
                                    <Col lg={8} xl={8} md={8} sm={12}>
                                        <div className='accessibility-section__integer-boxes__inner'>
                                            <Image src={Chart} alt="" preview={false} />
                                            <Title>Integer ultrices</Title>
                                            <Paragraph>Mauris feugiat pretium mi. Nullam sagittis odio et tellus tempor venenatis.</Paragraph>
                                            <Link to="" className='depth-section__integer-boxes__inner__first-link'>Learn more <Image src={Right} alt="" preview={false} /></Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={12} xl={12} md={12} xs={24} className="right-part">
                            <Image src={LaptopTwo} alt="" preview={false} />
                        </Col>
                    </Row>
                </div>
            </section>

            <SignUp />

        </div>
        </>
        )
    }
}
