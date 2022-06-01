import React, { Component } from 'react';
import './DolorSit.css'
import { Avatar, Badge, Button, Drawer, Image, Menu, Layout, Row, Col, Space, Typography } from 'antd';
import Title from 'antd/lib/typography/Title';
import Paragraph from 'antd/lib/typography/Paragraph';

function DolorSit() {
  return (
    <>
       <section className="goals-section invert">
          <div className="container">
            <Row justify="center">
              <Col md={6} xs={24}>
                <Title level={1}>
                  Lorem Ipsum <span>Dolor Sit Amet</span>
                </Title>
              </Col>
              <Col md={12} xs={24}>
                <Paragraph>
                  We are curating data that falls into the following categories.
                  A small sample is available now but most of it will only be
                  available after our beta and we will continue to make new
                  datasets available for as long as we can improve our coverage.{" "}
                  <span>
                    We realeasing new cureated and linked datasets every month.
                  </span>
                </Paragraph>
              </Col>
            </Row>
          </div>
        </section>
    </>
  )
}

export default DolorSit


