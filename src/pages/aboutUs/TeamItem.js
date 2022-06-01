import React, { Component } from 'react';
import './AboutUs.css';
import TeamList1 from "../../assets/images/team-list-1.png";
import Email from "../../assets/images/team-email.svg";
import Facebook from "../../assets/images/team-facebook.svg";
import Twitter from "../../assets/images/team-twitter.svg";
import Linkdin from "../../assets/images/team-linkdin.svg";
import { Avatar, Badge, Button, Card, Carousel, Col, Comment, Image, List, Row, Space } from 'antd'
import Title from 'antd/lib/typography/Title'
import Paragraph from 'antd/lib/typography/Paragraph';
import { Link } from 'react-router-dom';

export default class AboutUs extends Component {
    render() {
      return (
        <Col className="gutter-row" span={8}>
        
        <div className='team-list-card'>
            <img src={TeamList1} alt="" className='team-list-card__img' />
            <Title className='team-list-card__heading-1' level={2}>Stefán Baxter</Title>
            <Title className='team-list-card__heading-2' level={4}>CEO</Title>
            <Paragraph className='team-list-card__para'>
                Highly experienced in most aspects of building technology companies. Passion for data, 35 year experience & data engineering specialties all align perfectly for Smartlytics.
            </Paragraph>
            <div className="team-list-card__icon">
                <Link target="_blank" to="/"><img src={Email}  alt="" /></Link>
                <Link target="_blank" to="/"><img src={Facebook}  alt="" /></Link>
                <Link target="_blank" to="/"><img src={Twitter}  alt="" /></Link>
                <Link target="_blank" to="/"><img src={Linkdin}  alt="" /></Link>
            </div>
        </div>
      </Col>
    )
}
}