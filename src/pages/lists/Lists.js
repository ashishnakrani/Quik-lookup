import {Col, Image, List, Row, Badge, Dropdown, Menu, Modal, Button, Collapse} from 'antd'
import './Lists.css';
import Paragraph from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title'
import React, {Component, useState} from 'react'
import Catalouge from '../../assets/images/Catalouge.svg';
import geography from '../../assets/images/geography.svg';
import tech from '../../assets/images/tech.svg';
import finance from '../../assets/images/finance.svg';
import currency from '../../assets/datasets/Currencies.svg';
import countries from '../../assets/images/countries.svg';
import products from '../../assets/images/products.svg';
import business from '../../assets/images/business.svg';
import financials from '../../assets/images/business.svg';
import science from '../../assets/images/science.svg';
import organization from '../../assets/datasets/orginisations.svg';
import demographic from '../../assets/images/demographic.svg';
import globe_img_w from '../../assets/images/globe_img_w.svg';
import wikidata_w from '../../assets/images/wikidata_w.svg';
import openstreetmaps_w from '../../assets/images/openstreetmaps_w.svg';
import cia_factbook_w from '../../assets/sources/white/cia.png';
import geonames_w from '../../assets/sources/white/geonames@2x.svg';
import close from '../../assets/images/close.svg';
import globe_img from '../../assets/images/globe.svg';
import wikidata from '../../assets/images/wikidata.svg';
import openstreetmaps from '../../assets/images/openstreetmaps.svg';
import eurostat from '../../assets/images/eurostat.svg';
import our_world_in_data from '../../assets/sources/dark/owid.png';
import united_nations from '../../assets/sources/dark/un.png';
import world_bank from '../../assets/sources/dark/world-bank.png';
import Text from 'antd/lib/typography/Text';
import shine from '../../assets/images/shine.svg';
import Demography from '../../assets/images/demography.svg';
import Economy from '../../assets/images/economy.svg';
import Education from '../../assets/images/education.svg';
import Energy from '../../assets/images/energy.svg';
import Enviroment from '../../assets/images/enviroment.svg';
import GeographyStat from '../../assets/images/geography-statstic.svg';
import Health from '../../assets/images/health.svg';
import Leading from '../../assets/images/leading.svg';
import Production from '../../assets/images/production.svg';
import Tourism from '../../assets/images/tourism.svg';
import Humanity from '../../assets/images/Humanity.svg';
import Newssocial from '../../assets/images/News-SociaL.svg';
import History from '../../assets/images/History.svg';
import Market from '../../assets/images/Market.svg';
import Weather from '../../assets/images/Weather.svg';
import GrowingText from '../../assets/images/growing-text.svg';
import {DownOutlined} from '@ant-design/icons';
import {Card, Table} from 'antd';

const {Panel} = Collapse;

const entity_data = [
    {
        icon: countries,
        title: "Countries",
        description: "Codes, Statistic, Localization & More",
        available: true,
        badge: true,
        url: 'https://countries.quicklookup.com'
    },
    {
        icon: geography,
        title: "Locations",
        description: "Addresses, POIs & Ways",
    },
    {
        icon: finance,
        title: "Markets & Trade",
        description: "Finance, Markets & Rates",
    },
    {
        icon: currency,
        title: "Currencies",
        description: "Exchange Rates, Markets & Historical",
    },
    {
        icon: "https://assets.quicklookup.info/assets/icons/datasets/organisations.svg",
        title: "Organisations",
        description: "Business Registry",
    },
    {
        icon: financials,
        title: "Financial Markets",
        description: "Exchanges, Symbols, Trades & History",
    },
    {
        icon: demographic,
        title: "Demography",
        description: "Elements, Formulas, Units of Measure",
    },
    {
        icon: Humanity,
        title: "Humanity",
        description: "Languages, Ethnicities, Religions",
    },
    // {
    //     icon: tech,
    //     title: "Tech",
    //     description: "Technology, Standards  & Identifiers",
    // },
    // {
    //     icon: products,
    //     title: "Products",
    //     description: "Products & Services",
    // },
    // {
    //     icon: Culture,
    //     title: "Culture & Arts",
    //     description: "Works, Categories & Artists",
    // },
    // {
    //     icon: Nature,
    //     title: "Nature",
    //     description: "Nature & Science",
    // },
    // {
    //     icon: fundamental,
    //     title: "The Fundamentals",
    //     description: "Everything you might need for standard based data collection",
    // },
];

const statistics_list = [
    {
        icon: geography,
    },
    {
        icon: finance,
    },
    {
        icon: currency,
    },
    {
        icon: countries,
    },
    {
        icon: products,
    },
    {
        icon: business,
    },
    {
        icon: science,
    },
    {
        icon: tech,
    },
    {
        icon: demographic,
    },
    {
        icon: organization,
    },
    {
        icon: geography,
    }
];

const stat_data = [
    {
        icon: Demography,
        title: "Demography",
        description: "Composition, Population, Dependencies",
    },
    {
        icon: Economy,
        title: "Economy",
        description: "Finance, Markets, Employment",
    },
    {
        icon: Education,
        title: "Education",
        description: "Education level, Funding, Indexes",
    },
    {
        icon: Energy,
        title: "Energy",
        description: "Production, Generation, Use",
        badge: true,
    },
    {
        icon: Enviroment,
        title: "Environment",
        description: "Pollution, Sustainability, Treaties, Goals",
    },
    {
        icon: GeographyStat,
        title: "Industry",
        description: "Production, Resources etc.",
    },
    {
        icon: Health,
        title: "Health",
        description: "Diseases, COD, Life Expectancy & More",
    },
    {
        icon: Leading,
        title: "KPIs",
        description: "GDP, GINI and other Key Indicators/Indexes",
    },
    {
        icon: Production,
        title: "Production",
        description: "Production, Yield, Export, Import",
    },
    {
        icon: Tourism,
        title: "Tourism",
        description: "Arrivals, Departures, Expenditure, Services",
    },
    // {
    //     icon: geography,
    //     title: "Name  of",
    //     description: "Short Exlpanation & Lorem Ipsum Dorum",
    // },
    // {
    //     icon: geography,
    //     title: "Name  of",
    //     description: "Short Exlpanation & Lorem Ipsum Dorum",
    // },
    // {
    //     icon: demographic,
    //     title: "Demography",
    //     description: "Demography, Culture & Society",
    // },
    // {
    //     icon: organization,
    //     title: "Orginzation",
    //     description: "Organizations & Services",
    // },
    // {
    //     icon: geography,
    //     title: "Name  of",
    //     description: "Short Exlpanation & Lorem Ipsum Dorum",
    // },
    // {
    //     icon: geography,
    //     title: "Name  of",
    //     description: "Short Exlpanation & Lorem Ipsum Dorum",
    // },
    // {
    //     icon: fundamental,
    //     title: "The Fundamentals",
    //     description: "Demography, Culture  & Society",
    // },
];

const events_data = [
    {
        icon: Newssocial,
        title: "News Coverage",
        description: "Local Coverage, Global Coverage, Mentions ...",
        url:"",
    },
    {
        icon: "https://assets.quicklookup.info/assets/icons/events/social-media.svg",
        title: "Social Media",
        description: "Official Communication, Social Mentions ...",
        url:"",
    },
    {
        icon: Market,
        title: "Market Updates",
        description: "Trends, Alerts, EOD Reports.",
        url:"",
    },
    {
        icon: Weather,
        title: "Weather",
        description: "Weather Forecast, Anomalies, Warnings ...",
        badge: true,
        url:"",
    },

];
const sources_entities = [
    {
        logo: wikidata_w,
        title: "Wikidata",
        url: ''
    },
    {
        logo: openstreetmaps_w,
        title: "OpenStreetMaps",
        url: ''
    },
    {
        logo: geonames_w,
        title: "GeoNames",
        url: ''
    },
    {
        logo: cia_factbook_w,
        title: "CIA World Factbook",
        url: ''
    },
]

const ts_sources = [
    {
        logo: our_world_in_data,
        title: "Our World in Data"
    },
    {
        logo: eurostat,
        title: "Eurostat"
    },
    {
        logo: united_nations,
        title: "United Nations"
    },
    {
        logo: "https://assets.quicklookup.info/assets/logo/sources/dark/oecd.svg",
        title: "OECD"
    },
    {
        logo: world_bank,
        title: "World Bank"
    },
];

const event_sources_w = [
    {
        logo: "https://assets.quicklookup.info/assets/logo/sources/light/gdelt.svg",
        title: "GDELT"
    },
];

const columns = [
    {
        title: 'Lorem Ipsum Dolor',
        dataIndex: 'name',
        key: 'name',
        render: (image, name) => {
            return (
                <div>
                    <img width={15} src={name.image} alt=""/>
                    <a href="#0"> {name.name}</a>
                </div>
            );
        }
    },
    {
        title: 'Metric',
        dataIndex: 'metric1',
        key: 'metric1',
    },
    {
        title: 'Metric',
        dataIndex: 'metric2',
        key: 'metric2',
    },
    {
        title: 'Metric',
        dataIndex: 'metric3',
        key: 'metric3',
    },
    {
        title: 'Metric',
        dataIndex: 'metric4',
        key: 'metric4',
    },
    {
        title: 'Metric',
        dataIndex: 'metric5',
        key: 'metric5',
    },
    {
        title: 'Metric',
        dataIndex: 'metric6',
        key: 'metric6',
    },
    {
        title: 'Metric',
        dataIndex: 'metric6',
        key: 'metric6',
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        image: openstreetmaps,
        metric1: 'Value',
        metric2: 'Value',
        metric3: 'Value',
        metric4: 'Value',
        metric5: 'Value',
        metric6: 'Value',
        metric7: 'Value',
    },
    {
        key: '2',
        image: wikidata,
        name: 'Class aptent (1-53)',
        metric1: 'Value',
        metric2: 'Value',
        metric3: 'Value',
        metric4: 'Value',
        metric5: 'Value',
        metric6: 'Value',
        metric7: 'Value',
    },
    {
        key: '3',
        image: wikidata,
        name: 'Class aptent (54-55)',
        metric1: 'Value',
        metric2: 'Value',
        metric3: 'Value',
        metric4: 'Value',
        metric5: 'Value',
        metric6: 'Value',
        metric7: 'Value',
    },
    {
        key: '4',
        image: wikidata,
        name: 'Suspendisse ut ',
        metric1: 'Value',
        metric2: 'Value',
        metric3: 'Value',
        metric4: 'Value',
        metric5: 'Value',
        metric6: 'Value',
        metric7: 'Value',
    },
    {
        key: '5',
        image: globe_img,
        name: 'Pellentesque habitant ',
        metric1: 'Value',
        metric2: 'Value',
        metric3: 'Value',
        metric4: 'Value',
        metric5: 'Value',
        metric6: 'Value',
        metric7: 'Value',
    },
    {
        key: '6',
        image: globe_img,
        name: 'Mauris sodales',
        metric1: 'Value',
        metric2: 'Value',
        metric3: 'Value',
        metric4: 'Value',
        metric5: 'Value',
        metric6: 'Value',
        metric7: 'Value',
    },
    {
        key: '7',
        image: globe_img,
        name: 'Pellentesque magna',
        metric1: 'Value',
        metric2: 'Value',
        metric3: 'Value',
        metric4: 'Value',
        metric5: 'Value',
        metric6: 'Value',
        metric7: 'Value',
    },
    {
        key: '8',
        image: globe_img,
        name: 'Mauris sodales',
        metric1: 'Value',
        metric2: 'Value',
        metric3: 'Value',
        metric4: 'Value',
        metric5: 'Value',
        metric6: 'Value',
        metric7: 'Value',
    },
    {
        key: '9',
        image: wikidata,
        name: 'Pellentesque magna',
        metric1: 'Value',
        metric2: 'Value',
        metric3: 'Value',
        metric4: 'Value',
        metric5: 'Value',
        metric6: 'Value',
        metric7: 'Value',
    }
];

export default class Lists extends Component {
    constructor(props) {
        super(props);
        this.state = {showDetails: false};
        this.state = {comingSoonPopup: false};
    }

    setShowDetails = e => {
        this.setState({showDetails: !this.state.showDetails});
        console.log(this.state.showDetails)
    };

    setComingSoonPopup = e => {
        this.setState({comingSoonPopup: !this.state.comingSoonPopup});
        console.log(this.state.comingSoonPopup)
    };

    render() {
        return (
            <>
                {/* catalogue section */}
                <section className="catalogue-section">
                    <div className="container">
                        <Row align="middle" justify="center">
                            <Col md={9} xs={24} className="order-log">
                                <Image src={Catalouge} alt="" preview={false}/>
                            </Col>
                            <Col md={{span: 9, offset: 1}} xs={24}>
                                <Title level={1}>Quick Lookup's <img src={GrowingText} alt="" /> <span> Data Catalogue</span></Title>
                            </Col>
                        </Row>
                    </div>
                </section>

                {/* goals section */}
                <section className="goals-section">
                    <div className="container">
                        <Row justify="center">
                            <Col md={7} xs={24}>
                                <Title className='goals-section__heading' level={2}>
                                    Humble Beginnings 
                                    <b>Lofty Goals</b>
                                </Title>
                            </Col>
                            <Col md={12} xs={24}>
                                <Paragraph className="goals-section__description">
                                    A small sample of our data is available during the Technology Preview. But will become available once this preview phase is over.
                                    <br/><br/>We will continue to make new datasets available for as long as we can improve our coverage of business-relevant information.
                                </Paragraph>
                            </Col>
                        </Row>
                    </div>
                </section>

                {/* entities section */}
                <section className="entities-section">
                    <div className="container">
                        <Row>
                            <Col md={24} xs={24}>
                                <div className="entities-section__box">
                                    <Title level={3}>Datasets</Title>
                                    <Paragraph className="categories-para">The following are the datasets we have published or we are in the process of curating.</Paragraph>
                                    <List
                                        grid={{gutter: 16, xxl: 4, xl: 4, lg: 4, md: 2, sm: 1, xs: 1}}
                                        dataSource={entity_data}
                                        className="content-list"
                                        renderItem={item => (
                                            item.url ?
                                            <Badge.Ribbon
                                                text={<>FREE for Life<Image src={shine} preview={false} alt=""/></>}
                                                color="volcano" placement="end">
                                                <a href={item.url}>
                                                <List.Item>
                                                    <List.Item.Meta
                                                        avatar={<Image src={item.icon} preview={false} alt=""/>}
                                                        title={item.title}
                                                        description={item.description}
                                                    />
                                                </List.Item>
                                                </a>
                                            </Badge.Ribbon>
                                            :
                                            <List.Item className="disable">
                                                <List.Item.Meta
                                                    avatar={<Image src={item.icon} preview={false} alt=""/>}
                                                    title={item.title}
                                                    description={item.description}
                                                />
                                            </List.Item>
                                        )}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>

                {/* primary sources section */}
                <section className="entity-primary-src-section">
                    <div className="container">
                        <Row>
                            <Col md={24} xs={0}>
                                <div className="primary-vertical-list">
                                    <Text>
                                        Primary Sources:
                                    </Text>
                                    <List
                                        itemLayout="vertical"
                                        dataSource={sources_entities}
                                        renderItem={item => (
                                            <List.Item>
                                                <List.Item.Meta avatar={<img src={item.logo} alt=""/>}
                                                                title={item.title}/>
                                            </List.Item>
                                        )}
                                    />
                                    {/*<Link to="/">See all</Link>*/}
                                </div>
                            </Col>
                            <Col md={0} xs={24}>
                                <Dropdown overlay={
                                    <Menu className="src-menu" mode="grid">
                                        {event_sources_w &&
                                            event_sources_w.map((item) => (
                                                <Menu.Item key="0"
                                                           icon={<img src={item.logo} alt=""/>}>{item.title}</Menu.Item>
                                            ))
                                        }
                                    </Menu>
                                } trigger={['click']}>
                                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        Primary Sources <DownOutlined/>
                                    </a>
                                </Dropdown>
                            </Col>
                        </Row>
                    </div>
                </section>

                {/* statistics section */}
                <section className="statistics-section">
                    <div className="container">
                        <Row>
                            <Col md={24} xs={24}>
                                <div className="statistics-section__box">
                                    <Title level={3}>Statistics</Title>
                                    <Paragraph className="categories-para">Statistics and entity information are intertwined in the QL API and every entity links to relevant statistics.</Paragraph>
                                    {/*leading indicators*/}
                                    {true ?
                                            <List
                                                grid={{gutter: 16, xxl: 4, xl: 4, lg: 4, md: 2, sm: 2, xs: 1}}
                                                dataSource={stat_data}
                                                className="content-list"
                                                visible={!this.state.showDetails}
                                                renderItem={item => (
                                                    <List.Item onClick={this.setShowDetails}>
                                                        <List.Item.Meta
                                                            avatar={<Image src={item.icon} preview={false} alt=""/>}
                                                            title={item.title}
                                                            description={item.description}
                                                        />
                                                    </List.Item>
                                                )}
                                            /> :
                                            <div visible={this.state.showDetails}>
                                                <Card onClick={this.setShowDetails}
                                                      className="statistics-section__box__category">
                                                    <button className='close-button'><img src={close} alt=""
                                                                                          className="close-icon-button"/>
                                                    </button>
                                                    <div className="category-header">
                                                        <img width={47} src={geography} alt=""/>
                                                        <div className='category-header__title'>
                                                            <Title level={4}
                                                                   className="category-header__title__heading">Geogarphy</Title>
                                                            <p className='category-header__title__typography'>Geo,
                                                                Locations, Ways & Services</p>
                                                        </div>
                                                    </div>
                                                    <Table className='statistics-table' columns={columns}
                                                           dataSource={data}/>
                                                </Card>
                                                <List
                                                    className="statistics-outher-list"
                                                    grid={{gutter: 16, xxl: 11, xl: 8, lg: 6, md: 4, sm: 4, xs: 3}}
                                                    dataSource={statistics_list}
                                                    renderItem={item => (
                                                        <List.Item>
                                                            <List.Item.Meta
                                                                avatar={<Image src={item.icon} preview={false} alt=""/>}
                                                            />
                                                        </List.Item>
                                                    )}
                                                />
                                            </div>
                                    }

                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>

                {/* primary sources section */}
                <section className="stat-primary-src-section">
                    <div className="container">
                        <Row>
                            <Col md={24} xs={0}>
                                <div className="primary-vertical-list">
                                    <Text>
                                        Primary Sources:
                                    </Text>
                                    <List
                                        itemLayout="vertical"
                                        dataSource={ts_sources}
                                        renderItem={item => (
                                            <List.Item>
                                                <List.Item.Meta avatar={<img src={item.logo} alt=""/>}
                                                                title={item.title}/>
                                            </List.Item>
                                        )}
                                    />
                                    {/*<Link to="/">See all</Link>*/}
                                </div>
                            </Col>
                            <Col md={0} xs={24}>
                                <Dropdown overlay={
                                    <Menu className="src-menu invert" mode="grid">
                                        {ts_sources &&
                                            ts_sources.map((item) => (
                                                <Menu.Item key="0"
                                                           icon={<img src={item.logo} alt=""/>}>{item.title}</Menu.Item>
                                            ))
                                        }
                                    </Menu>
                                } trigger={['click']}>
                                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        Primary Sources <DownOutlined/>
                                    </a>
                                </Dropdown>
                            </Col>
                        </Row>
                    </div>
                </section>

                {/* events section */}
                <section className="events-section">
                    <div className="container">
                        <Row  onClick={this.setComingSoonPopup}>
                            <Col md={24} xs={24}>
                                <div className="events-section__box">
                                    <Title level={3}>Events</Title>
                                    <Paragraph className="categories-para">Each entity in QL is linked to related new coverage.</Paragraph>
                                    <List
                                        grid={{gutter: 16, xxl: 4, xl: 4, lg: 4, md: 2, sm: 2, xs: 1}}
                                        dataSource={events_data}
                                        renderItem={item => (
                                            <List.Item>
                                                <List.Item.Meta
                                                    avatar={<Image src={item.icon} preview={false} alt=""/>}
                                                    title={item.title}
                                                    description={item.description}
                                                    />
                                            </List.Item>
                                        )}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {!this.state.comingSoonPopup ?
                        null
                            :
                        <div visible={this.state.comingSoonPopup}>
                            <div className='coming-soon-model-main'>
                                <div className='coming-soon-content'>
                                    <Title className='coming-soon-content__title' level={3}>Coming Soon!</Title>
                                    <Paragraph className='coming-soon-content__para'>Some text with messaging ragardin content and timing</Paragraph>
                                    <Button className='coming-soon-content__btn'>Sign Me Up!</Button>
                                </div>
                            </div>
                            <span className='coming-soon-model-overlay' onClick={this.setComingSoonPopup}></span>
                        </div>
                        
                    }
                         
                    {/* primary sources section */}
                    <div className="entity-primary-src-section">
                        <div className="container">
                            <Row>
                                <Col md={24} xs={0}>
                                    <div className="primary-vertical-list">
                                        <Text>
                                            Primary Sources:
                                        </Text>
                                        <List
                                            itemLayout="vertical"
                                            dataSource={event_sources_w}
                                            renderItem={item => (
                                                <List.Item>
                                                    <List.Item.Meta avatar={<img src={item.logo} alt=""/>}
                                                        title={item.title}/>
                                                </List.Item>
                                            )}
                                        />
                                        {/*<Link to="/">See all</Link>*/}
                                    </div>
                                </Col>
                                <Col md={0} xs={24}>
                                    <Dropdown overlay={
                                        <Menu className="src-menu" mode="grid">
                                            {event_sources_w &&
                                                event_sources_w.map((item) => (
                                                    <Menu.Item key="0"
                                                            icon={<img src={item.logo} alt=""/>}>{item.title}</Menu.Item>
                                                ))
                                            }
                                        </Menu>
                                    } trigger={['click']}>
                                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                            Primary Sources <DownOutlined/>
                                        </a>
                                    </Dropdown>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}