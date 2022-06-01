import React, { Component } from 'react';
import './AboutUs.css';
import Abouthero from "../../assets/images/about-us-hero.png";
import { Avatar, Badge, Button, Card, Carousel, Col, Comment, Image, List, Row, Space, Typography } from 'antd'
// import profileIbrahim from '../../assets/images/team/IA.png';
// import profileAlex from '../../assets/images/team/AG.png';
// import profileIngi from '../../assets/images/team/IF.png';
// import profileStefan from '../../assets/images/team/SB.png';
// import profileTolli from '../../assets/images/team/TE.png';
import emailIcon from '../../assets/images/email-gray-icon.svg';
import facebookIcon from '../../assets/images/facebook-gray-icon.svg';
import twitterIcon from '../../assets/images/twitter-gray-icon.svg';
import linkedinIcon from '../../assets/images/linkedin-gray-icon.svg';
import galleryIcon from "../../assets/images/vestibulum-1.svg";
import mapIcon from "../../assets/images/vestibulum-2.svg";
import vestibulum from "../../assets/images/vestibulum-3.svg";

const {Text, Title, Link, Paragraph} = Typography;

/*
Tolli:Facebook: https://www.linkedin.com/in/tollieinisson/linkedin: https://www.linkedin.com/in/tollieinisson/Github: https://github.com/Tollimail: tolli@quicklookup.com

[2:45 PM] Ingi Freyr Atlason
Ingi:linkedin: https://www.linkedin.com/in/ingi-atlason-b49a9a104/mail: ingi@quicklookup.com


 */

const the_team = [
    {
        profileImg: "https://assets.quicklookup.info/assets/images/team/AG.png",
        profile: "Alex Gnakadja",
        name: "Client Development-Lead",
        description: "An up and coming software engineer that thrives on solving difficult problems and creating effective software teams.",
        social: {
            linkedin: 'https://www.linkedin.com/in/alex-gnakadja/mail',
            email: 'alex@quicklookup.com'
        }
    },
    {
        profileImg: "https://assets.quicklookup.info/assets/images/team/IA.png",
        profile: "Ibrahim Adeniyi",
        name: "Client Developer",
        post: "1939 -1945",
        description: "Ibrahim is a full-stack software developer with a demonstrated history of working in the web application development industry. Ibrahim has been developing web applications for about 5 years while ensuring best practices and architecting scalable solutions.",
        social: {
            github: 'https://github.com/Dendekky',
            linkedin: 'https://www.linkedin.com/in/dendekky/',
            email: 'ibrahim@quicklookup.com'
        }
    },
    {
        profileImg: "https://assets.quicklookup.info/assets/images/team/IF.png",
        profile: "Ingi Freyr Atlason",
        name: "CMO & Design",
        post: "1945 - ",
        description: "An experienced, versatile visual designer and a published data scientist. Focusing now on B2B marketing, his experience ranges from designing tiny local brands to art-directing and coordinating large international campaigns to statistical analysis and modeling in medical research.",
        social: {
            linkedin: 'https://www.linkedin.com/in/ingi-atlason-b49a9a104/',
            email: 'ingi@quicklookup.com'
        }
    },
    {
        profileImg: "https://assets.quicklookup.info/assets/images/team/SB.png",
        profile: "Stefán Baxter",
        name: "CEO & Data Development",
        description: "Highly experienced in most aspects of building technology companies. Passion for data, 35 year experience & data engineering specialties all align perfectly for Smart Data and Quick Lookup.",
        social: {
            linkedin: '',
            github: '',
            email: 'stefan@quicklookup.com'
        }
    },
    {
        profileImg: "https://assets.quicklookup.info/assets/images/team/TE.png",
        profile: "Þórhallur Einisson",
        name: "CTO, Program Management & Devops",
        post: "1939 -1945",
        description: "A dynamic and hands-on software development leader. Passion for building robust and high performing systems, infrastructure and teams. Making an impact for Fortune 500 companies and start-ups for over 25 years.",
        social: {
            linkedin: '',
            github: '',
            email: 'tolli@quicklookup.com'
        }
    },
];
  
const the_team_icon = [
    {
      icon: emailIcon,
      link: '#',
    },
    {
      icon: facebookIcon,
      link: '#',
    },
    {
      icon: twitterIcon,
      link: '#',
    },
    {
      icon: linkedinIcon,
      link: '#',
    },
  ];
  
export default class AboutUs extends Component {
    render() {
    return (
        <>
            <div className='about-main'>
                <div className="container">
                    {/* hero section start */}
                    <div className="about-section">
                        <Row justify="center" align="" className='external-data'>
                            <Col md={{ span: 11, order: 1 }} xs={{ span: 24, order: 1 }} className="about-section__img">
                                <Image src={Abouthero} alt="" preview={false}/>
                            </Col>
                            <Col md={{ span: 12, order: 2 }} xs={{ span: 24, order: 2 }} className="about-section__info">
                                <Title level={1}><span>About</span> Quick Lookup</Title>
                                <Title level={3}>Unparalleled Passion for Data</Title>
                                <Paragraph className='about-section__info__para'>
                                    <strong>Smart Data</strong> is a data-curation company that combines open and freely available data into curated and enriched datasets, tailored for businesses and made available as a service.
                                </Paragraph>
                                <Paragraph className='about-section__info__para'>
                                    <strong>Smart Data</strong> has been developing an innovative data-delivery and data-discovery platform called <strong>Quick Lookup</strong> to accompany its data-as-a-service offering.
                                </Paragraph>
                                <Paragraph className='about-section__info__para'>
                                    The first curated <Link href={"https://countries.quicklookup.com"} target={"_blank"}>dataset on Countries</Link> was published on the platform this spring as a part of our Technology Preview.
                                </Paragraph>
                            </Col>
                        </Row>
                    </div>
                </div>
                {/* hero section end */}
            </div>

            {/* The team section start */}
            <section className='the-team-section'>
                <div className="container">
                    <div className="the-team-main">
                        <Title level={1}>The<span> Team </span></Title>
                        <Paragraph className='the-team-main__para'>
                            The <span>Quick Lookup</span> team is led by seasoned data nerds that also are specialists on other areas. <br/>We are building the tool we all wish we had and we know that other data professionals will love it too.<br/>
                        </Paragraph>
                        {/*<Paragraph className='the-team-main__para'>*/}
                        {/*    We are not actively hiring at the moment but please let us know if your are interested in joining our quest.<br/>*/}
                        {/*    We will always try to accommodate excellent people that share our passion.*/}
                        {/*</Paragraph>*/}
                        <Row>
                            <Col md={24} xs={24}>
                            <List
                                grid={{gutter: 0, xxl: 3, xl: 3, lg: 3, md: 2, sm: 2, xs: 1}}
                                dataSource={the_team}
                                className="team-list-card"
                                renderItem={item => (
                                    <List.Item className='team-list-card__item'>
                                            <Image className='team-list-card__img' src={item.profileImg} alt=""  preview={false}/>
                                            <Title level={3}>{item.profile}</Title>
                                            <Text>{item.name}</Text>
                                            <Paragraph>{item.description}</Paragraph>
                                            <List
                                                itemLayout="horizontal"
                                                className='the-team-icon'
                                                dataSource={the_team_icon}
                                                renderItem={item => (
                                                <List.Item>
                                                    <a href={item.link} target="_blank"><img src={item.icon} alt="email" /></a>
                                                </List.Item>
                                                )}
                                            />
                                    </List.Item>
                                )}
                            />
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>

            {/* The team section end */}
            <section className="homecareer-section homecareer-box-section vestibulum-section">
                <div className="container">
                    <Row gutter={[32, 16]} align="bottom">
                        <Col md={20} xs={24}>
                            <Badge.Ribbon color="red" placement="start" text={<Image src={galleryIcon} preview={false} />}>
                                <Title level={1}><span>We</span> are here</Title>
                                <Image className="overview rebbon-img" src="https://assets.quicklookup.info/assets/images/decorative/groska.jpg" alt="" preview={false} />
                                <div className="ribbon-one ant-ribbon ant-ribbon-placement-start ant-ribbon-color-red">
                                    <span className="ant-ribbon-text">
                                        <div className="ant-image">
                                            <Image className="" src={mapIcon} preview={false} />
                                        </div>
                                    </span>
                                    <div className="ant-ribbon-corner" />
                                </div>
                                <div className="ribbon-two ant-ribbon ant-ribbon-placement-start ant-ribbon-color-red">
                                    <span className="ant-ribbon-text">
                                        <div className="ant-image">
                                            <Image src={vestibulum} preview={false} />
                                        </div>
                                    </span>
                                    <div className="ant-ribbon-corner" />
                                </div>
                            </Badge.Ribbon>
                        </Col>
                        <Col md={4} xs={24}>
                        <Text><b>Smart Data inc.</b><br/><i>Snjallgögn ehf.</i></Text><br />
                        <Text><i>Gróska</i></Text><br />
                        <Text><i>101 Reykjavík</i></Text><br />
                        <Text><i>Iceland</i></Text><br />
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
    }
}