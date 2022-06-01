import { Avatar, Badge, Button, Card, Carousel, Col, Comment, Image, List, Row, Space } from 'antd'
import './Home.css'
import Title from 'antd/lib/typography/Title'
import Link from 'antd/lib/typography/Link'
import React, { Component } from 'react'
import Javascript from '../../assets/applications/Javascript.svg';
import Excel from '../../assets/applications/Excel.svg';
import Python from '../../assets/applications/Python.svg';
import GraphQL from '../../assets/applications/GraphQL.svg';
import featuredSources from '../../assets/images/processing-2.png';
import R_LG from '../../assets/applications/R- LG.svg';
import PowerBI from '../../assets/applications/Power BI.svg';
import Tiles from '../../assets/images/Tiles.svg';
import search_new from '../../assets/images/search_new.svg';
import compare_plans_sm from '../../assets/images/compare_plans_sm.svg';
import replace_stale_data from '../../assets/service/Staledata.svg';
import clean_data from '../../assets/service/clean.svg';
import enrich_data from '../../assets/service/enrich.svg';
import good_data from '../../assets/service/goodData.svg';
import binni_borgar from '../../assets/images/team/binni2.png';
import hub from '../../assets/images/Best-Country-Api-image-resize.png';
import shine from '../../assets/images/shine.svg';
import rocket from '../../assets/images/rocket.svg';
import Paragraph from 'antd/lib/typography/Paragraph';
import Mission from '../../assets/images/Mission.svg';
import icelandicVentureStudio from '../../assets/images/brands/icelandicVenture.svg';
import mgmt from '../../assets/images/brands/mgmt.svg';
import infocapital from '../../assets/images/brands/infocapital.svg';
import Tthrsj from '../../assets/images/brands/Tths-logo.svg';
import Nvidia from '../../assets/images/brands/nvidia-inception.svg';
import Supernova from '../../assets/images/cluster/Supernova.svg';
import Treehive from '../../assets/images/brands/treehiveStrategy.svg';
import tennin from '../../assets/images/brands/tennin.svg';

const language_data = [
    {
        logo: Excel,
        url: ''
    },
    {
        logo: PowerBI,
        url: ''
    },
    {
        logo: R_LG,
        url: ''
    },
    {
        logo: Python,
        url: ''
    },
    {
        logo: Javascript,
        url: ''
    },
    {
        logo: GraphQL,
        url: ''
    },
];
const user_type = [
    {
        icon: compare_plans_sm,
        description: 'Data Scientists',
        link: '/for/data-scientists'
    },
    {
        icon: compare_plans_sm,
        description: 'Data Engineers',
        link: '/for/data-engineers'
    },
    {
        icon: compare_plans_sm,
        description: 'Business Analysts',
        link: '/for/business-analysts'
    },
    {
        icon: search_new,
        description: 'Software Developers',
        link: '/for/developers'
    },
];
/*
import replace_stale_date from '../../assets/service/Staledata.svg';
import clean_date from '../../assets/service/clean.svg';
import enrich_date from '../../assets/service/enrich.svg';
*/
const easily = [
    {
        icon: enrich_data,
        description: 'Enrich Your Datasets',
        link: '/for/data-scientists'
    },
    {
        icon: clean_data,
        description: 'Clean Existing Data',
        link: '/for/data-engineers'
    },
    {
        icon: replace_stale_data,
        description: 'Replace Stale Data',
        link: '/for/business-analysts'
    },
    {
        icon: good_data,
        description: 'Power Your Apps with Good Data',
        link: '/for/developers'
    },
];

const help_data = [
    {
        icon: search_new,
        description: 'Find & use external data',
        link: '/available-data'
    },
    {
        icon: compare_plans_sm,
        description: 'Publish Open Data',
        link: '/blog/eliminated-data-wrangling-with-quick-lookup'
    },
    {
        icon: compare_plans_sm,
        description: 'Monazite Premium Data',
        link: '/blog/publish-open-data-with-quick-lookup'
    },
    {
        icon: compare_plans_sm,
        description: 'Eliminate Data Wrangling',
        link: '/blog/monazite-premium-data-with-quick-lookup'
    },
];

const ql_numbers_data = [
    {
        title: <>1<span>M</span></>,
        description: <>Named entities of <b>15</b> concept types from <b>4</b> sources.</>,
    },
    {
        title: <>200<span>M</span></>,
        description: <>Data points of <b>85</b> metrics in <a href={"/available-data#timeseries"}><b>13</b> categories</a>.</>,
    },
    {
        title: <>33</>,
        description:<>Data sources for time series data from <b>1</b> aggregator.</>,
    },
    {
        title: <>1</>,
        description: <>Fully <a href={"/available-data#statistics"}>curated & linked dataset</a> published.</>,
    },
];
const mission_data = [
    {
      description: 'Democratize access to commonly used world data.',
    },
    {
      description: 'Eliminate data wrangling and stale data for data professionals.',
    },
    {
      description: 'Provide contextual information on demand.',
    },
];
export default class QlHome extends Component {
  render() {
    return (
      <>

        {/* hero section */}
        <section className="hero-section">
            <div className="container inner-container">
                <Row justify="center" align="middle" className='external-data'>
                    <Col md={0} xs={24}>
                        <Title level={1}>World Data <span>at Your Fingertips</span></Title>
                    </Col>
                    <Col md={{span:11,order:1}} xs={{span:24,order:2}}>
                        <Title level={1} className="hidden-xs hidden-sm">External Data <span>at Your Fingertips</span></Title>
                        <Title level={2}>Instant access to curated world-data from the tools you already use & love.</Title>
                        <List
                            itemLayout="vertical"
                            dataSource={language_data}
                            renderItem={item => (
                            <a href={item.url}><List.Item>
                                <List.Item.Meta avatar={<img src={item.logo} alt="" />} />
                            </List.Item></a>
                            )}
                        />
                    </Col>
                    <Col md={{span:12,offset:1,order:2}} xs={{span:24,order:1}}>
                        <Image src={Tiles} preview={false} alt="" />
                    </Col>
                </Row>
            </div>
        </section>

        {/* help section */}
        <section className="help-section">
            <div className="container">
                <Row className="we-help">
                    <Col md={24} xs={24} className="p-0 we-help__col">
                        <div className="box we-help__col__box">
                            <Title level={1} className="we-help__col__box__title">With Quick Lookup You Effortlessly ...</Title>
                            <List 
                                grid={{ gutter: 16, xxl:4, xl:4, lg:4, md: 2, sm:1, xs:1 }}
                                dataSource={easily}
                                renderItem={item => (
                                <List.Item className="we-help__col__box__info">
                                    <List.Item.Meta
                                        avatar={<Image src={item.icon} preview={false} alt="" />}
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
        
        {/* review section */}
        <section className="review-section">
            <div className="container">
                <Row align="middle" justify="center">
                    <Col md={16} xs={24}>
                        <Comment
                            avatar={<Avatar src={binni_borgar} alt="Han Solo" />}
                            content={
                                <>
                                    <Title level={1}>
                                    "Contextual data is essential for Machine Learning and when looking for high-impact actionable intelligence. Quick Lookup's vision of 'context on demand' is something I share 100%. <br/><br/>We at Datalab look forward to using Quick Lookup as a primary source of external data so that we can go from a hunch to a proven case without the hassle of special data sourcing or ETL."
                                    </Title>
                                    <Title level={2}>Binni Borgar</Title>
                                    <a href={"https://datalab.is/"}><Title level={3}>CEO, Datalabs</Title></a>
                                </>
                            }
                            />
                    </Col>
                </Row>
            </div>
        </section>

        {/* data hub section */}
        <section className="datahub-section">
            <div className="container">
                <Row>
                    <Col lg={7} md={8} xs={18}>
                        <Title level={1}>The Quick Lookup <span>Technology Preview</span></Title>
                    </Col>
                </Row>
                <Row>
                    <Col md={24}>
                        <Badge.Ribbon text={<><Image src={shine} /><span><b>Free Lifetime Access</b> If you join us now!</span></>} color="volcano" placement="start">
                            <Card title="the Best Country API" size="large" >
                                <Row>
                                    <Col md={{span:11,order:1}} xs={{order:2,span:24}}>
                                        <Title level={2} className="hidden-md hidden-lg hidden-xl">the Best Country API</Title>
                                        <Paragraph>
                                            Free lifetime access to <Link href={"https://countries.quicklookup.com"} target={"_blank"}>The Best Country API</Link> is given way for free to those who signup for our technology preview. There you can fetch countries and all relevant information on them using application plugins or the <Link href={"https://graphql.quicklookup.com"} target={"_blank"}>GraphQL API</Link>. The dataset includes generic information, maps, currencies, statistics, localisation information, and more.
                                        </Paragraph>
                                    </Col>
                                    <Col md={{span:13,order:2}} xs={{order:1,span:24}}>
                                        <Badge.Ribbon text={<><Image src={shine} /><div><i>FREE ACCESS</i>  For a limited time</div></>} color="volcano" placement="end">
                                            <Image alt="" preview={false} src={hub} />
                                        </Badge.Ribbon>
                                    </Col>
                                </Row>
                            </Card>
                        </Badge.Ribbon>
                    </Col>
                </Row>
            </div>
        </section>

        {/* featured source section */}
        <section className="featured-src-section">
            <div className="container">
                <Row>
                    <Col md={24}>
                        <Card size="large">
                            <Row>
                                <Col md={11} xs={24} className="">
                                    <div className="cluster">
                                        <Image preview={false} src={featuredSources} />
                                    </div>
                                    {/* <Image alt="" preview={false} src={feature_sources} /> */}
                                </Col>
                                <Col md={{offset:1,span:11}} xs={24}>
                                    <Title className='featured-src-section__heading' level={2}>Featured Sources</Title>
                                    <Paragraph className='featured-src-section__description'>
                                        We combine, curate and link data from various open sources. The power of Open Data is immense, and as we connect it, we see its value multiply and its usability skyrocket in our Knowledge Graph.
                                    </Paragraph>
                                    <Paragraph className='featured-src-section__description'>
                                        We regularly release curated and linked datasets. Please let us know of datasets of particular interest to you and <Link href={"countries.quicklookup.com"}>join our Technology Preview</Link> for free, lifetime access to <a href={"https://countries.quicklookup.com"} target={"_blank"}>The Best Countries API</a>.
                                    </Paragraph>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        </section>

        {/* getting started section */}
        <section className="getting-start-section">
            <div className="container">
                <Row align="middle" justify="center" >
                    <Col md={{span:9,order:1}} xs={{span:24,order:2}} >
                        <div className='Were-just-left-part'>
                            <Title><span>We’re Just</span> Getting Started </Title>
                            <Paragraph>
                                <p>
                                    Yes, we are brand-new, and our journey has just begun. So here we publish the numbers that drive us as we believe in full transparency.
                                </p>
                                <p>
                                    Join us as we build the world's primary data source for curated and linked world data, one linked and curated dataset at a time.
                                </p>
                            </Paragraph>
                            <Button type="primary" href={"https://admin.quicklookup.com/signup"}>Get Free Access to the QL Technology Preview Now!</Button>
                        </div>
                    </Col>
                    <Col md={{span:9,offset:1,order:2}} xs={{order:1,span:24}}>
                        <Image src="https://assets.quicklookup.info/assets/images/decorative/launch-graphic.svg" alt="" preview={false} />
                    </Col>
                </Row>
            </div>
        </section>

        {/* ql by numbers section */}
        <section className="help-section invert">
            <div className="container">
                <Row justify="center" align="middle">
                    <Col md={24} xs={24}>
                        <div className="box">
                            <Title level={1}>Quick Lookup by the Numbers:</Title>
                            <List
                                grid={{ gutter: 16, xxl:4, xl:4, lg:4, md: 2, sm:1, xs:1 }}
                                dataSource={ql_numbers_data}
                                renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
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
        
        {/* mission section */}
        <section className="mission-section">
            <div className="container">
                <Row justify="center" align="middle">
                    <Col md={3} xs={24}>
                        <Image src={Mission} alt="" preview={false} />
                    </Col>
                    <Col md={{offset:1,span:11}} xs={24}>
                        <Title level={1}>Our <span>Mission</span></Title>
                        <div className="ant-simple-list">
                            <List itemLayout="horizontal">
                                {
                                    mission_data &&
                                    mission_data.map((item) => (
                                        <List.Item>
                                            <List.Item.Meta 
                                            description={item.description}
                                            />
                                        </List.Item>
                                    ))
                                } 
                            </List>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>

        {/* blog section */}
        {/* <section className="blogs-bg cards remove-img">
            <div className="container ">
                <Row>
                    <Col xl={24} xs={24}>
                        <Row className="blogs">
                            <Col xl={24}>
                                <div className="blog-main-title">
                                    <Title level={1}>The <b>Quality-Data </b> blog</Title>
                                </div> 
                            </Col>
                            <Col xl={24} xs={24}>
                                <Carousel dots={false}
                                    infinite={true}
                                    slidesToShow={3}
                                    autoplay={true}
                                    arrows={false}
                                    nextArrow={<img src={next} alt="" />}
                                    prevArrow={<img src={previous} alt="" />}
                                    responsive={[
                                        {
                                            breakpoint: 1200, // extra large breakpoint
                                            settings: {
                                                slidesToShow: 3,
                                                slidesToScroll: 1
                                            }
                                        },
                                        {
                                            breakpoint: 1199, // large breakpoint
                                            settings: {
                                                slidesToShow: 3,
                                                slidesToScroll: 1
                                            }
                                        },
                                        {
                                            breakpoint: 992, // md breakpoint
                                            settings: {
                                                slidesToShow: 2,
                                                slidesToScroll: 1
                                            }
                                        },
                                        {
                                            breakpoint: 768, // sm breakpoint
                                            settings: {
                                                slidesToShow: 2,
                                                slidesToScroll: 1,
                                                arrows: false
                                            }
                                        },
                                        {
                                            breakpoint: 575, // xs breakpoint
                                            settings: {
                                                slidesToShow: 1,
                                                slidesToScroll: 1,
                                                arrows: false
                                            }
                                        }
                                    ]}>
                                    <div className="item">
                                        <Card cover={<img alt="blog" src={DataCurrection} />} actions={[
                                            [
                                                <div>
                                                    <IconText text="20"/>
                                                    <EyeOutlined key="view" />
                                                </div>,
                                                <div className="comments">
                                                    <IconText text="0"/>
                                                    <MessageOutlined key="message" />
                                                </div>
                                            ],
                                            <StarOutlined key="favorite" />,
                                            ]}>
                                            <div className="hidden-xs">
                                                <Text type="primary">Lorem ipsum Dorum</Text>
                                                <Text type="secondary">Aug 3 - 5 min</Text>
                                            </div>
                                            <Title level={4}>Data Curation Excellence</Title>
                                            <Title level={5}>Our Manifesto</Title>
                                            <div className="hidden-xs blog-desc">
                                                <Paragraph>Aenean ac cursus nisl. Pellentesque sit amet mauris ipsum. Etiam luctus auctor odio, sed vulputate lorem congue eget. Duis vel justo ac lectus pharetra viverra sit amet nec dolor. Aenean ac cursus nisl. Pellentesque sit amet mauris ipsum. Etiam luctus auctor odio, sed vulputate lorem congue.</Paragraph>
                                            </div>
                                        </Card> 
                                    </div>
                                    <div className="item">
                                        <Card cover={<img alt="blog" src={blog2} />} actions={[
                                            [
                                                <div>
                                                    <IconText text="20"/>
                                                    <EyeOutlined key="view" />
                                                </div>,
                                                <div className="comments">
                                                    <IconText text="0"/>
                                                    <MessageOutlined key="message" />
                                                </div>
                                            ],
                                            <StarOutlined key="favorite" />,
                                            ]}>
                                            <div className="hidden-xs">
                                                <Text type="primary">Lorem ipsum Dorum</Text>
                                                <Text type="secondary">Aug 3 - 5 min</Text>
                                            </div>
                                            <Title level={4}>Avoiding Stale Data</Title>
                                            <Title level={5}>Our Manifesto</Title>
                                            <div className="hidden-xs blog-desc">
                                                <Paragraph>Aenean ac cursus nisl. Pellentesque sit amet mauris ipsum. Etiam luctus auctor odio, sed vulputate lorem congue eget. Duis vel justo ac lectus pharetra viverra sit amet nec dolor. Aenean ac cursus nisl. Pellentesque sit amet mauris ipsum. Etiam luctus auctor odio, sed vulputate lorem congue.</Paragraph>
                                            </div>
                                        </Card>
                                    </div>
                                    <div className="item">
                                        <Card cover={<img alt="blog" src={blog3} />} actions={[
                                            [
                                                <div>
                                                    <IconText text="20"/>
                                                    <EyeOutlined key="view" />
                                                </div>,
                                                <div className="comments">
                                                    <IconText text="0"/>
                                                    <MessageOutlined key="message" />
                                                </div>
                                            ],
                                            <StarOutlined key="favorite" />,
                                            ]}>
                                            <div className="hidden-xs">
                                                <Text type="primary">Lorem ipsum Dorum</Text>
                                                <Text type="secondary">Aug 3 - 5 min</Text>
                                            </div>
                                            <Title level={4}>Simple Use</Title>
                                            <Title level={5}>Our Manifesto</Title>
                                            <div className="hidden-xs blog-desc">
                                                <Paragraph>Aenean ac cursus nisl. Pellentesque sit amet mauris ipsum. Etiam luctus auctor odio, sed vulputate lorem congue eget. Duis vel justo ac lectus pharetra viverra sit amet nec dolor. Aenean ac cursus nisl. Pellentesque sit amet mauris ipsum. Etiam luctus auctor odio, sed vulputate lorem congue.</Paragraph>
                                            </div>
                                        </Card>
                                    </div>
                                </Carousel>
                            </Col>
                            <Col xl={24} xs={24} className="blog-bottom-desc">
                                <Link to="blogs" className="blog-link">Go To Our Blog <RightOutlined className="blog-link-icon" /> </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </section> */}

        {/* thanks section */}
        <section className="thanks-section">
            <div className="container">
                <Row justify="center" align="middle">
                    <Col md={9} xs={24}>
                        <Image.PreviewGroup>
                            <a href="https://www.wikidata.org/wiki/Wikidata:Main_Page" target="_blank"><Image preview={false} src="http://assets.quicklookup.info/assets/logo/special-thanks/wikidata.svg" /></a>
                            <a href="https://www.openstreetmap.org/" target="_blank"><Image preview={false} src="http://assets.quicklookup.info/assets/logo/special-thanks/osm.svg" /></a>
                            <a href="https://www.geonames.org/" target="_blank"><Image preview={false} src="http://assets.quicklookup.info/assets/logo/special-thanks/geonames.svg" /></a>
                            <a href="https://ourworldindata.org/" target="_blank"><Image preview={false} src="http://assets.quicklookup.info/assets/logo/special-thanks/owid.svg" /></a>
                        </Image.PreviewGroup>
                        {/* <Image src={Frame_3342} alt="" preview={false} /> */}
                    </Col>
                    <Col md={{offset:1,span:10}} xs={24}>
                        <Title level={1}>Special <span>Thanks!</span></Title>
                        <Paragraph>
                            <p>Go out to <a href="https://www.wikidata.org/wiki/Wikidata:Main_Page" target="_blank">Wikidata</a>, <a href={"https://ourworldindata.org/"} target={"_blank"}>Our World In Data</a>, <a href={"https://www.openstreetmap.org/"} target={"_blank"}>OpenStreetMaps</a>, <a href={"https://www.geonames.org/"} target={"_blank"}>Geonames</a> and all the organizations that publish quality, open data. </p>
                            <p>Without them, Quick Lookup would not exist.</p>
                        </Paragraph>
                    </Col>
                </Row>
            </div>
        </section>

        {/* investor section */}
        <section className="investor-section">
            <div className="container">
                <Row justify="center" align="middle" className="investor-row-reverse">
                    <Col md={{span:9,order:1}} xs={{order:2,span:24}} >
                        <div className='investor-section-inner'>
                            <Title level={1}>Investors, <span>Accelerators </span> & Grants</Title>
                            <Paragraph>We have been fortunate enough to be joined by an outstanding group of investors and to have received sizeable grants from the Icelandic Technology Fund.</Paragraph>
                            <Paragraph>We are thankful to them and to the people involved in the accelerators we have participated in.</Paragraph>
                        </div>
                    </Col>
                    <Col md={{offset:1,span:10,order:2}} xs={{span:24,order:1}} className="order-log">
                        {/* <Image src={Frame_3309} alt="" preview={false} /> */}
                        <div className="cluster">
                            <a href={"https://icelandventurestudio.com/"} target={"_blank"}><Image preview={false} src={icelandicVentureStudio} /></a>
                            <a href={"https://www.mgmt.is/"} target={"_blank"}><Image preview={false} src={mgmt} /></a>
                            <Image preview={false} src={tennin} />
                            <a href={"https://infocapital.is/"} target={"_blank"}><Image preview={false} src={infocapital} /></a>
                            <a href={"https://www.treehivestrategy.com/"} target={"_blank"}><Image preview={false} src={Treehive} /></a>
                            <a href={"https://www.nova.is/hradleid/startupsupernova"} target={"_blank"}><Image preview={false} src={Supernova} /></a>
                            <a href={"https://www.nvidia.com/en-us/startups/"} target={"_blank"}><Image preview={false} src={Nvidia} /></a>
                            <a href={"https://www.rannis.is/sjodir/rannsoknir/taeknithrounarsjodur/"} target={"_blank"}><Image preview={false} src={Tthrsj} /></a>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
      </>
    )
  }
}
