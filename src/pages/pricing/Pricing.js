import { Anchor, Button, Carousel, Col, Collapse, Divider, Image, List, Row, Table, Tabs, Tooltip } from 'antd'
import './Pricing.css'
import Title from 'antd/lib/typography/Title'
import Text from 'antd/lib/typography/Text';
import React, { Component } from 'react'
import pricing_icon1 from '../../assets/images/pricing_icon1.svg';
import pricing_icon2 from '../../assets/images/pricing_icon2.svg';
import pricing_icon3 from '../../assets/images/pricing_icon3.svg';
import pricing_icon4 from '../../assets/images/pricing_icon4.svg';
import Question1 from '../../assets/images/Question-1.svg';
import compare_plans from '../../assets/images/compare_plans.svg';
import p_icon1 from '../../assets/images/p_icon1.svg';
import p_icon2 from '../../assets/images/p_icon2.svg';
import p_icon3 from '../../assets/images/p_icon3.svg';
import p_icon4 from '../../assets/images/p_icon4.svg';
import price_m_icon1 from '../../assets/images/price_m_icon1.svg';
import price_m_icon2 from '../../assets/images/price_m_icon2.svg';
import price_m_icon3 from '../../assets/images/price_m_icon3.svg';
import price_m_icon4 from '../../assets/images/price_m_icon4.svg';
import SignUp from '../../assets/images/SignUp.png';
import next from '../../assets/images/next.svg';
import previous from '../../assets/images/previous.svg';
import { CaretDownFilled, CaretLeftFilled, CaretRightFilled, CaretUpFilled, CheckOutlined, QuestionCircleFilled, UnderlineOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Paragraph from 'antd/lib/typography/Paragraph';

const { TabPane } = Tabs;
const { Panel } = Collapse;

const list_data1 = [
    {
      title: 'Autocomplete and Targeted Search in one',
    },
    {
      title: 'Autocomplete and Targeted Search in one',
    }
];

const columns = [
    {
        title: '',
        dataIndex: 'compare',
        key: 'compare',
        className: 'subheading-col',
    },
    {
        title: () => {
            return (
                <>
                    <div className="compare-head">
                        <div className="box">
                            <Image affix={false} src={p_icon1} />
                            <Title level={3}>Free</Title>
                        </div>                        
                        <Button href={"https://admin.quicklookup.com/signup"}>Sign Up</Button>
                    </div>
                </>
            )
        },
        dataIndex: 'free',
        key: 'free',
        className: 'secondary-col',
    },
    {
        title: () => {
            return (
                <>
                    <div className="compare-head">
                        <div className="box">
                            <Image affix={false} src={p_icon2} />
                            <Title level={3}>Lite</Title>
                        </div>
                        <Button href={"https://admin.quicklookup.com/signup"}>Sign Up</Button>
                    </div>
                </>
            )
        },
        dataIndex: 'lite',
        key: 'lite',
        className: 'secondary-col',
    },
    {
        title: () => {
            return (
                <>
                    <div className="compare-head premium-head">
                        <div className="box">
                            <Image affix={false} src={p_icon3} />
                            <Title level={3}>Premium</Title>
                        </div>
                        <Button>Free Trial</Button>
                        <Title level={4}>14 Day Free Trial</Title>
                    </div>
                </>
            )
        },
        dataIndex: 'premium',
        key: 'premium',
        className: 'primary-col',
    },
    {
        title: () => {
            return (
                <>
                    <div className="compare-head">
                        <div className="box">
                            <Image affix={false} src={p_icon4} />
                            <Title level={3}>Enterprise</Title>
                        </div>
                        <Button>Get a Demo</Button>
                    </div>
                </>
            )
        },
        dataIndex: 'enterprise',
        key: 'enterprise',
        className: 'secondary-col',
    },

];

const dataSource = [
    {
        key: '1',
        compare: <Title level={3} className="compare-subhead">Quick Lookup Access</Title>,
    },
    {
        key: '2',
        compare:
        <Title level={3} className="compare-subhead-data">Rate Limited
            <Tooltip title="prompt text">
                <QuestionCircleFilled/>
            </Tooltip>
        </Title>,
        free: '30 Req/Minute',
        lite: 'Unlimited',
        premium: 'Unlimited',
        enterprise: 'Unlimited',
    },
    {
        key: '3',
        compare:
        <Title level={3} className="compare-subhead-data">Access to all Open Data
            <Tooltip title="prompt text">
                <QuestionCircleFilled/>
            </Tooltip>
        </Title>,
        free: <CheckOutlined />,
        lite: <CheckOutlined />,
        premium: <CheckOutlined />,
        enterprise: <CheckOutlined />,
    },
    {
        key: '4',
        compare:
        <Title level={3} className="compare-subhead-data">API Based Access
            <Tooltip title="prompt text">
                <QuestionCircleFilled/>
            </Tooltip>
        </Title>,
        free: <CheckOutlined />,
        lite: <CheckOutlined />,
        premium: <CheckOutlined />,
        enterprise: <CheckOutlined />,
    },
    {
        key: '5',
        compare:
        <Title level={3} className="compare-subhead-data">Application Plugins
            <Tooltip title="prompt text">
                <QuestionCircleFilled/>
            </Tooltip>
        </Title>,
        free: 'API Only',
        lite: <CheckOutlined />,
        premium: <CheckOutlined />,
        enterprise: <CheckOutlined />,
    },
    {
        key: '7',
        compare:
        <Title level={3} className="compare-subhead-data">Manual Source Selection
            <Tooltip title="prompt text">
                <QuestionCircleFilled/>
            </Tooltip>
        </Title>,
        free: '',
        lite: <CheckOutlined />,
        premium: <CheckOutlined />,
        enterprise: <CheckOutlined />,
    },
    {
        key: '8',
        compare:
        <Title level={3} className="compare-subhead-data">Redundancy Guard
            <Tooltip title="prompt text">
                <QuestionCircleFilled/>
            </Tooltip>
        </Title>,
        free: '',
        lite: <CheckOutlined />,
        premium: <CheckOutlined />,
        enterprise: <CheckOutlined />,
    },
    {
        key: '9',
        compare:
        <Title level={3} className="compare-subhead-data">Teams Support
            <Tooltip title="prompt text">
                <QuestionCircleFilled/>
            </Tooltip>
        </Title>,
        free: '',
        lite: '',
        premium: '',
        enterprise: <CheckOutlined />,
    },
    {
        key: '10',
        compare: <Title level={3} className="compare-subhead">Solver for Entity Linking</Title>,
    },
    {
        key: '11',
        compare: 
        <Title level={3} className="compare-subhead-data">Basic Solver
            <Tooltip title="prompt text">
                <QuestionCircleFilled/>
            </Tooltip>
        </Title>,
        free: <CheckOutlined />,
        lite: <CheckOutlined />,
        premium: <CheckOutlined />,
        enterprise: <CheckOutlined />,
    },
    {
        key: '12',
        compare: 
        <Title level={3} className="compare-subhead-data">Context Aware Solver
            <Tooltip title="prompt text">
                <QuestionCircleFilled/>
            </Tooltip>
        </Title>,
        free: '',
        lite: '',
        premium: <CheckOutlined />,
        enterprise: <CheckOutlined />,
    },
    {
        key: '13',
        compare:
        <Title level={3} className="compare-subhead-data">Bulk Processing
            <Tooltip title="prompt text">
                <QuestionCircleFilled/>
            </Tooltip>
        </Title>,
        free: '',
        lite: '',
        premium: <CheckOutlined />,
        enterprise: <CheckOutlined />,
    },
    {
        key: '14',
        compare: <Title level={3} className="compare-subhead">Usage Reporting</Title>,
    },
    {
        key: '15',
        compare:
        <Title level={3} className="compare-subhead-data">Basic Usage Reporting
            <Tooltip title="prompt text">
                <QuestionCircleFilled/>
            </Tooltip>
        </Title>,
        free: <CheckOutlined />,
        lite: <CheckOutlined />,
        premium: <CheckOutlined />,
        enterprise: <CheckOutlined />,
    },
    {
        key: '16',
        compare:
        <Title level={3} className="compare-subhead-data">Advanced Usage Reporting
            <Tooltip title="prompt text">
                <QuestionCircleFilled/>
            </Tooltip>
        </Title>,
        free: '',
        lite: <CheckOutlined />,
        premium: <CheckOutlined />,
        enterprise: <CheckOutlined />,
    },
    {
        key: '17',
        compare: 
        <Title level={3} className="compare-subhead-data">API Key Based Usage Rules
            <Tooltip title="prompt text">
                <QuestionCircleFilled/>
            </Tooltip>
        </Title>,
        free: '',
        lite: '',
        premium: <CheckOutlined />,
        enterprise: <CheckOutlined />,
    },
    {
        key: '18',
        compare:
            <Title level={3} className="compare-subhead-data">Custom Cost Breakdown
                <Tooltip title="prompt text">
                    <QuestionCircleFilled/>
                </Tooltip>
            </Title>,
        free: '',
        lite: '',
        premium: '',
        enterprise: <CheckOutlined />,
    },
    {
        key: '19',
        compare: <Title level={3} className="compare-subhead">Support & SLA</Title>,
    },
    {
        key: '20',
        compare:
            <Title level={3} className="compare-subhead-data">Support Level
                <Tooltip title="prompt text">
                    <QuestionCircleFilled/>
                </Tooltip>
            </Title>,
        free: 'Community Support',
        lite: 'Full Support',
        premium: 'Full Support',
        enterprise: 'Priority Support',
    },
    {
        key: '21',
        compare:
            <Title level={3} className="compare-subhead-data">Service Level Agreements
                <Tooltip title="prompt text">
                    <QuestionCircleFilled/>
                </Tooltip>
            </Title>,
        free: 'N/A',
        lite: 'N/A',
        premium: `Let's Talk`,
        enterprise: `Let's Talk`,
    },
];

const columns_mobile1 = [
    {
        title: '',
        dataIndex: 'compare',
        key: 'compare',
        className: 'heading-col',
        fixed: 'left',
    },
    {
        title: <Title level={2}>Feature Comparison</Title>,
        className: 'heading-group',
        children: [
            {
                title: () => {
                    return (
                        <>
                            <div className="compare-head">
                                <Title level={4}>Rate Limited Access</Title>
                            </div>
                        </>
                    )
                },
                dataIndex: 'col_1',
                key: 'col_1',
                className: 'secondary-col',
            },
            {
                title: () => {
                    return (
                        <>
                            <div className="compare-head">
                                <Title level={4}>Access to all Open Data</Title>
                            </div>
                        </>
                    )
                },
                dataIndex: 'col_2',
                key: 'col_2',
                className: 'secondary-col',
            },
        ]
    },
    
];
const columns_mobile2 = [
    {
        title: '',
        dataIndex: 'compare',
        key: 'compare',
        className: 'heading-col small-icon',
        fixed: 'left',
    },
    {
        title: <Title level={2}>Feature Comparison</Title>,
        className: 'heading-group',
        children: [
            {
                title: () => {
                    return (
                        <>
                            <div className="compare-head">
                                <Title level={4}>API Based Access</Title>
                            </div>
                        </>
                    )
                },
                dataIndex: 'col_3',
                key: 'col_3',
                className: 'secondary-col',
            },
            {
                title: () => {
                    return (
                        <>
                            <div className="compare-head">
                                <Title level={4}>Application Plugins</Title>
                            </div>
                        </>
                    )
                },
                dataIndex: 'col_4',
                key: 'col_4',
                className: 'secondary-col',
            },
        ]
    }
];
const columns_mobile3 = [
    {
        title: '',
        dataIndex: 'compare',
        key: 'compare',
        className: 'heading-col small-icon',
        fixed: 'left',
    },
    {
        title: <Title level={2}>Feature Comparison</Title>,
        className: 'heading-group',
        children: [
            {
                title: () => {
                    return (
                        <>
                            <div className="compare-head">
                                <Title level={4}>Manual Source Selection</Title>
                            </div>
                        </>
                    )
                },
                dataIndex: 'col_5',
                key: 'col_5',
                className: 'secondary-col',
            },
            {
                title: () => {
                    return (
                        <>
                            <div className="compare-head">
                                <Title level={4}>Redundancy Guard</Title>
                            </div>
                        </>
                    )
                },
                dataIndex: 'col_6',
                key: 'col_6',
                className: 'secondary-col',
            },
        ]
    }

];
const columns_mobile4 = [
    {
        title: '',
        dataIndex: 'compare',
        key: 'compare',
        className: 'heading-col small-icon',
        fixed: 'left',
    },
    {
        title: <Title level={2}>Feature Comparison</Title>,
        className: 'heading-group',
        children: [
            {
                title: () => {
                    return (
                        <>
                            <div className="compare-head">
                                <Title level={4}>Teams Support</Title>
                            </div>
                        </>
                    )
                },
                dataIndex: 'col_7',
                key: 'col_7',
                className: 'secondary-col',
            },
            {
                title: () => {
                    return (
                        <>
                            <div className="compare-head">
                                <Title level={4}>Basic Solver</Title>
                            </div>
                        </>
                    )
                },
                dataIndex: 'col_8',
                key: 'col_8',
                className: 'secondary-col',
            },
        ]
    }
];

const columns_mobile5 = [
    {
        title: '',
        dataIndex: 'compare',
        key: 'compare',
        className: 'heading-col small-icon',
        fixed: 'left',
    },
    {
        title: <Title level={2}>Feature Comparison</Title>,
        className: 'heading-group',
        children: [
            {
                title: () => {
                    return (
                        <>
                            <div className="compare-head">
                                <Title level={4}>Context Aware Solver</Title>
                            </div>
                        </>
                    )
                },
                dataIndex: 'col_9',
                key: 'col_9',
                className: 'secondary-col',
            },
            {
                title: () => {
                    return (
                        <>
                            <div className="compare-head">
                                <Title level={4}>Bulk Processing</Title>
                            </div>
                        </>
                    )
                },
                dataIndex: 'col_10',
                key: 'col_10',
                className: 'secondary-col',
            },
        ]
    }
];

const columns_mobile6 = [
    {
        title: '',
        dataIndex: 'compare',
        key: 'compare',
        className: 'heading-col small-icon',
        fixed: 'left',
    },
    {
        title: <Title level={2}>Feature Comparison</Title>,
        className: 'heading-group',
        children: [
            {
                title: () => {
                    return (
                        <>
                            <div className="compare-head">
                                <Title level={4}>Basic Usage Reporting</Title>
                            </div>
                        </>
                    )
                },
                dataIndex: 'col_11',
                key: 'col_11',
                className: 'secondary-col',
            },
            {
                title: () => {
                    return (
                        <>
                            <div className="compare-head">
                                <Title level={4}>Advanced Usage Reporting</Title>
                            </div>
                        </>
                    )
                },
                dataIndex: 'col_12',
                key: 'col_12',
                className: 'secondary-col',
            },
        ]
    }
];

const columns_mobile7 = [
    {
        title: '',
        dataIndex: 'compare',
        key: 'compare',
        className: 'heading-col small-icon',
        fixed: 'left',
    },
    {
        title: <Title level={2}>Feature Comparison</Title>,
        className: 'heading-group',
        children: [
            {
                title: () => {
                    return (
                        <>
                            <div className="compare-head">
                                <Title level={4}>API Key Based Usage Rules</Title>
                            </div>
                        </>
                    )
                },
                dataIndex: 'col_13',
                key: 'col_13',
                className: 'secondary-col',
            },
            {
                title: () => {
                    return (
                        <>
                            <div className="compare-head">
                                <Title level={4}>Custom Cost Breakdown</Title>
                            </div>
                        </>
                    )
                },
                dataIndex: 'col_14',
                key: 'col_14',
                className: 'secondary-col',
            },
        ]
    }
];

const columns_mobile8 = [
    {
        title: '',
        dataIndex: 'compare',
        key: 'compare',
        className: 'heading-col small-icon',
        fixed: 'left',
    },
    {
        title: <Title level={2}>Feature Comparison</Title>,
        className: 'heading-group',
        children: [
            {
                title: () => {
                    return (
                        <>
                            <div className="compare-head">
                                <Title level={4}>Support Level</Title>
                            </div>
                        </>
                    )
                },
                dataIndex: 'col_15',
                key: 'col_15',
                className: 'secondary-col',
            },
            {
                title: () => {
                    return (
                        <>
                            <div className="compare-head">
                                <Title level={4}>Service Level Agreements</Title>
                            </div>
                        </>
                    )
                },
                dataIndex: 'col_16',
                key: 'col_16',
                className: 'secondary-col',
            },
        ]
    }
];

const dataSource_mobile = [
    {
        key: '1',
        compare: 
            <div level={3} className="compare-head">
                <Image affix src={price_m_icon1} />
                <Title level={3}>Free</Title>
            </div>,
        col_1: '30 Req/Minute',
        col_2: <CheckOutlined />,
        col_3: <CheckOutlined />,
        col_4: 'API Only',
        col_5: '',
        col_6: '',
        col_7: '',
        col_8: '',
        col_9: '',
        col_10: '',
        col_11: <CheckOutlined />,
        col_12: '',
        col_13: '',
        col_14: '',
        col_15: 'Community Support',
        col_16: 'N/A',
    },
    {
        key: '2',
        compare:
            <div level={3} className="compare-head">
                <Image affix src={price_m_icon2} />
                <Title level={3}>Lite</Title>
            </div>,
        col_1: 'Unlimited',
        col_2: <CheckOutlined />,
        col_3: <CheckOutlined />,
        col_4: <CheckOutlined />,
        col_5: <CheckOutlined />,
        col_6: <CheckOutlined />,
        col_7: '',
        col_8: <CheckOutlined />,
        col_9: '',
        col_10: '',
        col_11: <CheckOutlined />,
        col_12: <CheckOutlined />,
        col_13: '',
        col_14: '',
        col_15: 'Full Support',
        col_16: 'N/A',
    },
    {
        key: '3',
        compare:
            <div level={3} className="compare-head">
                <Image affix src={price_m_icon3} />
                <Title level={3}>Premium</Title>
            </div>,
        col_1: 'Unlimited',
        col_2: <CheckOutlined />,
        col_3: <CheckOutlined />,
        col_4: <CheckOutlined />,
        col_5: <CheckOutlined />,
        col_6: <CheckOutlined />,
        col_7: '',
        col_8: <CheckOutlined />,
        col_9: <CheckOutlined />,
        col_10: <CheckOutlined />,
        col_11: <CheckOutlined />,
        col_12: <CheckOutlined />,
        col_13: <CheckOutlined />,
        col_14: '',
        col_15: 'Full Support',
        col_16: `Let's Talks`,
    },
    {
        key: '4',
        compare:
            <div level={3} className="compare-head">
                <Image affix src={price_m_icon4} />
                <Title level={3}>Enterprise</Title>
            </div>,
        col_1: 'Unlimited',
        col_2: <CheckOutlined />,
        col_3: <CheckOutlined />,
        col_4: <CheckOutlined />,
        col_5: <CheckOutlined />,
        col_6: <CheckOutlined />,
        col_7: <CheckOutlined />,
        col_8: <CheckOutlined />,
        col_9: <CheckOutlined />,
        col_10: <CheckOutlined />,
        col_11: <CheckOutlined />,
        col_12: <CheckOutlined />,
        col_13: <CheckOutlined />,
        col_14: <CheckOutlined />,
        col_15: 'Priority Support',
        col_16: `Let's Talks`,
    },
];


export default class Pricing extends Component {
  render() {
    return (
      <>
        <section className="pricing-main-box">
            <div className="container inner-container">
                <Row>
                    <Col xl={{span:24}} lg={24} md={24} sm={24} xs={24}>
                        <div className="page-title">
                            <Title level={1}>Simple <strong>Affordable</strong> Pricing</Title>
                        </div>
                    </Col>
                </Row>

                {/* desktop version */}
                <Row gutter={{xl:16, lg:16, md:16, sm:0, xs:0}} className="hidden-xs hidden-sm">
                    <Col xl={6} lg={6} md={12} xs={24}>
                        <div className="price-box first">
                            <Image src={pricing_icon1} className="price-box__image" alt="pricind" preview={false} />
                            <Title className="price-box__title" level={2}>Free</Title>
                            <Title className="price-box__price" level={3}>$0/mo</Title>
                            <Button className="price-box__button" href={"https://admin.quicklookup.com/signup"}>Sign Up</Button>
                            <Title className="price-box__semititle" level={4}>Included in <strong>Free</strong></Title>
                            <Divider className="price-box__divider" />
                            <List className="price-box__list">
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<CheckOutlined className="condition-list-icon" /> }
                                        description="1 User Licence"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={<CheckOutlined className="condition-list-icon" /> }
                                    description="Access to All Open Data"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<CheckOutlined className="condition-list-icon" /> }
                                        description="Solver (Basic)"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={<CheckOutlined className="condition-list-icon" /> }
                                    description="API Based Access"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<CheckOutlined className="condition-list-icon" /> }
                                        description="Rate Limited"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<CheckOutlined className="condition-list-icon" /> }
                                        description="Detailed Usage Reports"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<CheckOutlined className="condition-list-icon" /> }
                                        description="Community Support"
                                    />
                                </List.Item>
                            </List>
                            <div className="price-box__inner-box price-inner-box">
                                <Title className="price-box__inner-box__title" level={4}>100 Monthly</Title>
                                <Title className="price-box__inner-box__semititle" level={5}>Query Credits</Title>
                            </div>
                            <Anchor affix={false}>
                                <Link to="#details" className="price-box__link">See Details</Link>
                            </Anchor>
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={12} xs={24}>
                        <div className="price-box feature-price-box">
                            <Image src={pricing_icon2} className="price-box__image" alt="pricind" preview={false} />
                            <Title className="price-box__title" level={2}>Lite</Title>
                            <Title className="price-box__price" level={3}>$35/mo</Title>
                            <Button className="price-box__button" href={"https://admin.quicklookup.com/signup"}>Sign Up</Button>
                            <Title className="price-box__semititle" level={4}>Included in <strong>Lite</strong></Title>
                            <Divider className="price-box__divider" />
                            <div className="price-box__light-box">
                                <Title className="price-box__light-box__title" level={4}>All<Text strong> Free</Text><span> Features</span> <Text strong>+</Text></Title>
                            </div>
                            <List className="price-box__list">
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={<CheckOutlined className="condition-list-icon" /> }
                                    description="Redundancy Guard"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={<CheckOutlined className="condition-list-icon" /> }
                                    description="Application Plugins"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<CheckOutlined/> }
                                        description="Source Selection"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<CheckOutlined className="condition-list-icon" /> }
                                        description="No Rate Limiting"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<CheckOutlined className="condition-list-icon" /> }
                                        description="Full Support"
                                    />
                                </List.Item>
                            </List>
                            <div className="price-box__inner-box">
                                <Title className="price-box__inner-box__title" level={4}>1000 Monthly</Title>
                                <Title className="price-box__inner-box__semititle" level={5}>Query Credits</Title>
                            </div>
                            <Anchor affix={false}>
                                <Link to="/" className="price-box__link">See Details</Link>
                            </Anchor>
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={12} xs={24}>
                        <div className="price-box price-box--active active">
                            <Image src={pricing_icon3} className="price-box__image" alt="pricind" preview={false} />
                            <Title className="price-box__title" level={2}>Premium</Title>
                            <Title className="price-box__price" level={3}>$75/mo</Title>
                            <Button className="price-box__button" href={"https://admin.quicklookup.com/signup"}>Sign Up</Button>
                            <Title className="price-box__semititle" level={4}>Included in <Text strong>Premium</Text></Title>
                            <Divider className="price-box__divider" />
                            <div className="price-box__light-box">
                                <Title className="price-box__light-box__title" level={4}>All<Text strong> Lite</Text><span> Features</span> <Text strong>+</Text></Title>
                            </div>
                            <List className="price-box__list">
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<CheckOutlined className="condition-list-icon" /> }
                                        description="Context Aware Solver"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<CheckOutlined/> }
                                        description="Streaming Data"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={<CheckOutlined/> }
                                    description="Fine-Grained Controls"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={<CheckOutlined/> }
                                    description="Bulk Processing"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<CheckOutlined className="condition-list-icon" /> }
                                        description="Preview Access"
                                    />
                                </List.Item>
                            </List>
                            <div className="price-box__inner-box price-inner-box">
                                <Title className="price-box__inner-box__title" level={4}>10 000 Monthly</Title>
                                <Title className="price-box__inner-box__semititle" level={5}>Query Credits</Title>
                            </div>
                            <Anchor affix={false}>
                                <Link to="/" className="price-box__link">See Details</Link>
                            </Anchor>
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={12} xs={24}>
                        <div className="price-box feature-price-box">
                            <Image src={pricing_icon4} className="price-box__image" alt="pricind" preview={false} />
                            <Title className="price-box__title" level={2}>Enterprise</Title>
                            <Title className="price-box__price" level={3}>Contact Us</Title>
                            <Button className="price-box__button" href={"https://admin.quicklookup.com/signup"}>Contact Us</Button>
                            <Title className="price-box__semititle" level={4}>Included in <Text strong>Enterprise</Text></Title>
                            <Divider className="price-box__divider" />
                            <div className="price-box__light-box">
                                <Title className="price-box__light-box__title" level={4}>All<Text strong> Premium</Text> <span> Features</span>  <Text strong> +</Text></Title>
                            </div>
                            <List className="price-box__list">
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<CheckOutlined className="condition-list-icon" /> }
                                        description="Unlimited Free Data"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<CheckOutlined className="condition-list-icon" /> }
                                        description="Teams Support"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<CheckOutlined/> }
                                        description="Custom Cost Breakdown"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={<CheckOutlined className="condition-list-icon" /> }
                                    description="Custom Data & Integrations"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<CheckOutlined className="condition-list-icon" /> }
                                        description="Priority Support"
                                    />
                                </List.Item>
                            </List>
                            <div className="price-box__inner-box">
                                <Title className="price-box__inner-box__title" level={4}>Unlimited</Title>
                                <Title className="price-box__inner-box__semititle" level={5}>Query Credits</Title>
                            </div>
                            <Anchor affix={false}>
                                <Link to="/" className="price-box__link">See Details</Link>
                            </Anchor>
                        </div>
                    </Col>
                </Row>
                
                {/* mobile version */}
                <Row gutter={{xl:16, xs:0}} type="flex" className="hidden-lg hidden-xl hidden-md">
                    <Col xl={6} sm={24} xs={24}>
                        <Carousel
                         
                            infinite={true}
                            slidesToShow={1}
                            autoplay={false}
                            dots={true}
                            arrows={true}
                            adaptiveHeight={true}
                            nextArrow={<img src={next} alt="" />}
                            prevArrow={<img src={previous} alt="" />} >
                            <>
                                <div className="price-box">
                                    <Image src={pricing_icon1} alt="pricind" className="main-img" preview={false} />
                                    <Title level={2}>Free</Title>
                                    <Title level={3}>$0/mo</Title>
                                    <Button href={"https://admin.quicklookup.com/signup"}>Sign Up</Button>
                                </div>
                            </>
                            <>
                                <div className="price-box">
                                    <Image src={p_icon1} alt="pricind" className="main-icon"  preview={false} />
                                    <Divider />

                                    <List>
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<CheckOutlined className="condition-list-icon" /> }
                                                description="1 User License"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<CheckOutlined className="condition-list-icon" /> }
                                                description="Access to all Open Data"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<CheckOutlined className="condition-list-icon" /> }
                                                description="Solver (Basic)"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<CheckOutlined className="condition-list-icon" /> }
                                                description="API Based Access"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<CheckOutlined className="condition-list-icon" /> }
                                                description="Rate Limited"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<CheckOutlined className="condition-list-icon" /> }
                                                description="Detailed Usage Reports"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<CheckOutlined className="condition-list-icon" /> }
                                                description="Community Support"
                                            />
                                        </List.Item>
                                    </List>
                                    <div className="price-inner-box">
                                        <Title level={4}>100 Monthly</Title>
                                        <Title level={5}>Query Credits</Title>
                                    </div>
                                    <Button href={"https://admin.quicklookup.com/signup"}>Sign Up</Button>
                                </div>
                            </>
                        </Carousel>
                    </Col>
                    <Col xl={6} sm={24} xs={24}>
                        <Carousel 
                           
                            infinite={true}
                            slidesToShow={1}
                            autoplay={false}
                            dots={true}
                            arrows={true}
                            adaptiveHeight={true}
                            nextArrow={<img src={next} alt="" />}
                            prevArrow={<img src={previous} alt="" />} >
                            <>
                                <div className="price-box feature-price-box">
                                    <Image src={pricing_icon2} alt="pricind" className="main-img" preview={false} />
                                    <Title level={2}>Lite</Title>
                                    <Title level={3}>$35/mo</Title>
                                    <Button href={"https://admin.quicklookup.com/signup"}>Sign Up</Button>
                                </div>
                            </>
                            <>
                                <div className="price-box">
                                    <Image src={p_icon2} alt="pricind" className="main-icon"  preview={false} />
                                    <Divider />
                                    <div className="inner-light-box">
                                        <Title level={4}>All <Text strong>Free</Text> Features +</Title>
                                    </div>
                                    <List>
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<CheckOutlined className="condition-list-icon" /> }
                                                description="Redundancy Guard"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<CheckOutlined className="condition-list-icon" /> }
                                                description="Application Plugins"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<CheckOutlined/> }
                                                description="Source Selection"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<CheckOutlined className="condition-list-icon" /> }
                                                description="No rate limiting"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<CheckOutlined className="condition-list-icon" /> }
                                                description="Full Support"
                                            />
                                        </List.Item>
                                    </List>
                                    <div className="price-inner-box">
                                        <Title level={4}>1k Monthly</Title>
                                        <Title level={5}>Query Credits</Title>
                                    </div>
                                </div>
                            </>
                        </Carousel>
                    </Col>
                    <Col xl={6} sm={24} xs={24}>
                        <Carousel 
                            
                            infinite={true}
                            slidesToShow={1}
                            autoplay={false}
                            dots={true}
                            arrows={true}
                            adaptiveHeight={true}
                            className='active'
                            nextArrow={<img src={next} alt="" />}
                            prevArrow={<img src={previous} alt="" />} >
                            <>
                                <div className="price-box active">
                                    <Image src={pricing_icon3} alt="pricind" className="main-img" preview={false} />
                                    <Title level={2}>Premium</Title>
                                    <Title level={3}>$75/mo</Title>
                                    <Button href={"https://admin.quicklookup.com/signup"}>Sign Up</Button>
                                </div>
                            </>
                            <>
                                <div className="price-box active">
                                    <Image src={p_icon3} alt="pricind" className="main-icon"  preview={false} />
                                    <Divider />
                                    <div className="inner-light-box">
                                        <Title level={4}>All <Text strong>Lite</Text> Features +</Title>
                                    </div>
                                    <List>
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<CheckOutlined className="condition-list-icon" /> }
                                                description="Context Aware Solver"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<CheckOutlined/> }
                                                description="Streaming Data"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<CheckOutlined/> }
                                                description="Fine Grained Controls"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<CheckOutlined/> }
                                                description="Bulk Processing"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<CheckOutlined className="condition-list-icon" /> }
                                                description="Preview Access"
                                            />
                                        </List.Item>
                                    </List>
                                    <div className="price-inner-box">
                                        <Title level={4}>10k Monthly</Title>
                                        <Title level={5}>Query Credits</Title>
                                    </div>
                                </div>
                            </>
                        </Carousel>
                    </Col>
                    <Col xl={6} sm={24} xs={24}>
                        <Carousel 
                        
                            infinite={true}
                            slidesToShow={1}
                            autoplay={false}
                            dots={true}
                            arrows={true}
                            adaptiveHeight={true}
                            nextArrow={<img src={next} alt="" />}
                            prevArrow={<img src={previous} alt="" />} >
                            <>
                                <div className="price-box">
                                    <Image src={pricing_icon4} alt="pricind" className="main-img" preview={false} />
                                    <Title level={2}>Enterprise</Title>
                                    <Title level={3}>Contact Us</Title>
                                    <Button href={"https://admin.quicklookup.com/signup"}>Contact Us</Button>
                                </div>
                            </>
                            <>
                                <div className="price-box">
                                    <Image src={p_icon4} alt="pricind" className="main-icon"  preview={false} />
                                    <Divider />
                                    <div className="price-box__inner-light-box">
                                        <Title level={4}>All <Text strong>Premium</Text> Features +</Title>
                                    </div>
                                    <List>
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<CheckOutlined className="condition-list-icon" /> }
                                                description="Unlimited Free Data"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<CheckOutlined className="condition-list-icon" /> }
                                                description="Teams Support"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<CheckOutlined/> }
                                                description="Custom Cost Breakdown"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<CheckOutlined className="condition-list-icon" /> }
                                                description="Custom Data & Integrations"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<CheckOutlined className="condition-list-icon" /> }
                                                description="Priority Support"
                                            />
                                        </List.Item>
                                    </List>
                                    <div className="price-inner-box">
                                        <Title level={4}>Unlimited</Title>
                                        <Title level={5}>Query Credits</Title>
                                    </div>
                                </div>
                            </>
                        </Carousel>
                    </Col>
                </Row>

            </div>
        </section>

        <section className="comparison-bg">
            <div className="container">
                <div className="panel-main-head panel-main">
                    <Row>
                        <Col xl={{offset:2,span:4}} md={{offset:2,span:4}} xs={{span:24,offset:0}}>
                            <Image src={compare_plans} alt="pricing" preview={false} />
                        </Col>
                        <Col xl={{offset:1,span:15}} md={{offset:1,span:15}} xs={24}>
                            <Title className="panel-main__title" level={1}>Compare <span>Subscription</span> Plans</Title>
                            {/*<Paragraph className="panel-main__para hidden-xs hidden-sm">Plans & Features </Paragraph>*/}
                        </Col>
                    </Row>
                </div>
                {/* desktop version */}
                <Row className="hidden-xs hidden-sm">
                    <Col xl={24} xs={24}>
                        <div  className="price-table">
                            <Table pagination={false} columns={columns} dataSource={dataSource} />
                        </div>
                    </Col>
                </Row>
                
                {/* mobile version */}
                <Row className="hidden-lg hidden-xl hidden-md">
                    <Col xl={24} xs={24}>
                        <div className="price-table-mobile">
                            <Carousel
                                infinite={false}
                                slidesToShow={1}
                                autoplay={false}
                                dots={true}
                                effect='fade'
                                arrows={true}
                                nextArrow={<CaretRightFilled/>}
                                prevArrow={<CaretLeftFilled/>} >
                                <div>
                                    <Table pagination={false} columns={columns_mobile1} dataSource={dataSource_mobile} />
                                </div>
                                <div>
                                    <Table pagination={false} columns={columns_mobile2} dataSource={dataSource_mobile} />
                                </div>
                                <div>
                                    <Table pagination={false} columns={columns_mobile3} dataSource={dataSource_mobile} />
                                </div>
                                <div>
                                    <Table pagination={false} columns={columns_mobile4} dataSource={dataSource_mobile} />
                                </div>
                                <div>
                                    <Table pagination={false} columns={columns_mobile5} dataSource={dataSource_mobile} />
                                </div>
                                <div>
                                    <Table pagination={false} columns={columns_mobile6} dataSource={dataSource_mobile} />
                                </div>
                                <div>
                                    <Table pagination={false} columns={columns_mobile7} dataSource={dataSource_mobile} />
                                </div>
                                <div>
                                    <Table pagination={false} columns={columns_mobile8} dataSource={dataSource_mobile} />
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>

        <section className="faq-bg">
            <div className="container">
                <div className="panel-main-head faq-section">
                    <Row>
                        <Col xl={{offset:3,span:4}} md={{offset:2,span:4}} xs={{span:24,offset:0}}>
                            <Image className="faq-section__image" src={Question1} alt="pricing" preview={false} />
                        </Col>
                        <Col xl={{offset:2,span:15}} md={{offset:1,span:15}} xs={24}>
                            <Title className="faq-section__title" level={1}>Frequently <br/><span>Asked</span> Questions</Title>
                            {/*<Paragraph className="hidden-xs hidden-sm faq-section__para">Integer hendrerit dolor eget congue fermentum. Sed tincidunt, dui id mattis iaculis, sapien tellus viverra leo, nec consequat odio dui vel.</Paragraph>*/}
                        </Col>
                    </Row>
                </div>
                <Row className='faq-row'>
                    <Col xl={24} xs={24}>
                        <Collapse accordion expandIcon={({isActive}) => isActive
                            ? <CaretUpFilled /> 
                            : <CaretDownFilled /> } >
                            <Panel header="Which version is right for me?" key="1">
                                <p>The free version is enough for anyone interested in trying out Quick Lookup. <br/>We recommend the Lite plan for all advanced users and either the Premium or Enterprise plans for those who have QL data built into production systems, autonomous analytics or self-service BI.</p>
                            </Panel>
                            <Panel header="What discount is available?" key="2">
                                <p>We offer 20% discount on annual plans and group discounts for organisations with more that three users.<br/> Please contact us for additional information.</p>
                            </Panel>
                            <Panel header="Do you have a satisfaction guarantee or a cancellation policy?" key="3">
                                <p>We have a no-questions-asked cancellation and repayment policy. If you are not 100% satisfied with the service we provide then please reach out.</p>
                            </Panel>
                            <Panel header="Is there an educational plan available?" key="3">
                                <p>The free plan should be anough for must use-cases. Please let us know if that is not so.</p>
                            </Panel>
                            {/*<Panel header="Lorem ipsum dolor sit amet" key="4">*/}
                            {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>*/}
                            {/*</Panel>*/}
                            {/*<Panel header="Lorem ipsum dolor sit amet" key="5">*/}
                            {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>*/}
                            {/*</Panel>*/}
                            {/*<Panel header="Lorem ipsum dolor sit amet" key="6">*/}
                            {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>*/}
                            {/*</Panel>*/}
                        </Collapse>
                    </Col>
                </Row>
            </div>
        </section>

        <section className="signup-bg pricing-page-signup">
            <div className="container">
                <Row>
                    <Col className="sign-up-now-section" xl={{span:15}} lg={{span:20}} md={{span:22}} xs={24}>
                        <div className="box">
                            <Row>
                                <Col xl={{span:12,order:1}} xs={{order:2,span:24}} >
                                    <Title level={3}><b>Sign Up</b> Now!</Title>
                                    <Title level={4}>And get free life-time access to probably the best country API you'll ever find!</Title>
                                    <Button href={"https://admin.quicklookup.com/signup"}>Sign Me Up!</Button>
                                </Col>
                                <Col xl={{span:12,order:2}} xs={{span:24,order:1}} >
                                    <Image src={SignUp} alt="signup" preview={false} />
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
}