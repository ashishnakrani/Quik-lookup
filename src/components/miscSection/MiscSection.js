import React, { Component } from 'react';
import './MiscSection.css'
import { Avatar, Badge, Button, Drawer, Image, Menu, Layout, Row, Col, Space, Typography } from 'antd';
import featuresIcon from "../../assets/images/features-icon.svg";
import Title from 'antd/lib/typography/Title';

function MiscSection(props) {
  return (
    <>
        <section className="catalogue-section">
            <div className="container">
                <Row align="middle" className="misc-hero">
                    <Col md={8} xs={24} className="order-log">
                        <Image className="misc-hero__image" src={featuresIcon} alt="" preview={false} />
                    </Col>
                    <Col lg={{ span: 9, offset: 1 }} md={{ span: 14, offset: 1 }} xs={24}>
                        <Title level={1} className="misc-hero__title">
                            {props.title} <span>{props.semititle}</span>
                        </Title>
                    </Col>
                </Row>
            </div>
        </section>
    </>
  )
}

export default MiscSection