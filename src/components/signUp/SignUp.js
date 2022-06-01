import React, { Component } from 'react';
import './SignUp.css'
import { Avatar, Badge, Button, Drawer, Image, Menu, Layout, Row, Col, Space, Typography } from 'antd';
import Title from 'antd/lib/typography/Title';
import SignUpImg from "../../assets/images/SignUp.png";

function SignUp() {
  return (
    <>
       <section className="signup-bg">
          <div className="container">
              <Row>
                <Col
                    xl={{ span: 24, offset: 0 }}
                    lg={{ offset: 0, span: 24 }}
                    md={{ offset: 0, span: 24 }}
                    xs={24}
                >
                    <div className="box">
                    <Row>
                        <Col
                        xl={{ span: 12, order: 1 }}
                        xs={{ order: 2, span: 24 }}
                        >
                        <Title level={3}>
                            <b>Sign Up</b> Now!
                        </Title>
                        <Title level={4}>
                            to get free access to the only list of countries you'll ever need!
                        </Title>
                        <Button>Sign Me Up!</Button>
                        </Col>
                        <Col
                        xl={{ span: 12, order: 2 }}
                        xs={{ span: 24, order: 1 }}
                        >
                        <Image src={SignUpImg} alt="signup" preview={false} />
                        </Col>
                    </Row>
                    </div>
                </Col>
              </Row>
          </div>
      </section>
    </>
  )
}

export default SignUp


