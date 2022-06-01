import React, { Component } from 'react'
import { Anchor, Button, Carousel, Col, Divider, Image,  List,  Row, Select, Form, Input, Card, PageHeader } from 'antd'
import './PrivacyPolicy.css'
import { CheckOutlined, EyeOutlined, MessageOutlined, RightOutlined, SearchOutlined, StarOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import Paragraph from 'antd/lib/typography/Paragraph';
import { Link } from 'react-router-dom';
import featuresIcon from "../../assets/images/features-icon.svg";

const IconText = ({ text }) => (
    <Text>
        {text}
    </Text>
);
export default class PrivacyPolicy extends Component {
    componentDidMount = () => window.scrollTo(0, 0);

    render() {
        return (
        <>
            <div className="privacy-page">
                <section className="catalogue-section">
                    <div className="container">
                        <Row align="middle" className="misc-hero">
                            <Col md={8} xs={24} className="order-log">
                                <Image className="misc-hero__image" src={featuresIcon} alt="" preview={false} />
                            </Col>
                            <Col md={{ span: 9, offset: 1 }} xs={24}>
                                <Title level={1} className="misc-hero__title">
                                Privacy <i>Policy</i>
                                </Title>
                            </Col>
                        </Row>
                    </div>
                </section>
                <section className="terms-section"> 
                    <div className="container">
                        <div className="terms-section__first-heading">
                            <Title level={1} className="terms-section__first-heading__title">
                            Privacy <span>Policy</span>
                            </Title>
                            <Paragraph>incidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.incidunt leo sapien, Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis </Paragraph>
                            <Text>Ae blandit in non elit.</Text>
                        </div>
                    </div>
                </section>
                <section className="content-section">
                    <div className="container">
                        <div className="content-section__first-para">
                            <Title className="yallow-color">Nullam faucibus</Title>
                            <Paragraph>Maecenas elementum felis ut orci mattis, vel faucibus leo condimentum. Vestibulum porttitor libero eget ipsum commodo pellentesque. Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet.
                            Maecenas elementum felis ut orci mattis, vel faucibus leo condimentum. Vestibulum porttitor libero eget ipsum commodo pellentesque. Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet.
                            Maecenas elementum felis ut orci mattis, vel faucibus leo condimentum. Vestibulum porttitor libero eget ipsum commodo pellentesque. Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet.</Paragraph>
                        </div>
                        <div className="content-section__first-para">
                            <Title>Vestibulum porttitor</Title>
                            <Paragraph>Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.</Paragraph>
                        </div>
                        <div className="content-section__first-para">
                            <Title className="yallow-color">Sit Amet</Title>
                            <Paragraph>Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit. Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet.Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit. Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet.Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet.</Paragraph>
                        </div>
                        <div className="content-section__first-para">
                            <Title>Proin Ullamcorper</Title>
                            <Paragraph>Maecenas elementum felis ut orci mattis, vel faucibus leo condimentum. Vestibulum porttitor libero eget ipsum commodo pellentesque. Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas.. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.</Paragraph>
                        </div>
                        <div className="content-section__first-para">
                            <Title className="yallow-color">Nullam a lorem</Title>
                            <Paragraph>Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum.</Paragraph>
                        </div>
                        <div className="content-section__first-para">
                            <Title>Quisque amet.</Title>
                            <Paragraph>Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet. Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit.Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet. Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit.</Paragraph>
                        </div>
                    </div>
                </section>
            </div>
        </>
        )
    }
}
