import { SearchOutlined } from "@ant-design/icons";
import { Button, Card, Col, Form, Image, List, Modal, Row, Select } from "antd";
import "./Features.css";
import MiscSection from '../../components/miscSection/MiscSection';
import SignUp from '../../components/signUp/SignUp';
import React, { Component } from "react";
import Paragraph from "antd/lib/typography/Paragraph";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import atals from "../../assets/images/atals.svg";
import AutoComplete from "../../assets/images/AutoComplete.svg";
import Connected from "../../assets/images/Connected.svg";
import Edit from "../../assets/images/Edit.svg";
import Location from "../../assets/images/Location.svg";
import SignBoard from "../../assets/images/Sign-board.svg";

const { Option } = Select;
export default class Features extends Component {
  state = {
    modal1Visible: false,
  };

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  render() {
    return (
      <>
        {/* catalogue section */}
        <MiscSection title="Main Features" semititle="& Differentiators" />

        {/* goals section */}
        <section className="goals-section invert">
          <div className="container">
            <Row justify="center">
              <Col md={6} xs={24}>
                <Title level={1}>
                  The Ultimate Power Tool<span>for Data Professionals</span>
                </Title>
              </Col>
              <Col md={12} xs={24}>
                <Paragraph>
                  <br/>"The obstacles faced when enriching and analysing data are also apparent to us.
                  With Quick Lookup we want to simplify data-sourcing and minimise data-wrangling.
                  We hope QL will save you a lot of time and that it becomes your power tool of choice.
                  <br/><br/>Please let us know how we can improve."
                  <br/> - Stefán Baxter, CEO @ Quick Lookup
                </Paragraph>
              </Col>
            </Row>
          </div>
        </section>

        <section className="features-section">
          <div className="container">
            <Row justify="center" className="features-section__container-main" gutter={32} align="middle">
              <Col md={8}>
                <Card className="auto-compelete" title="Instant Use" cover={<Image alt="example" preview={false} src={AutoComplete} />}>
                  <Text>You can use Quick Lookup directly from the tools you love. No need to download data or flex that ETL muscle. <br/><a>Available Plugins</a></Text>
                </Card>
                <Card title="Frictionless Data">
                  <Text>Quick Lookup handles format, unit and scales conversion. Just set your preferences and let QL take care of the tedious data wrangling.</Text>
                </Card>
                <Card className="sign-board" title="Source Selection" cover={ <Image alt="example" preview={false} src={SignBoard} />} >
                  <Text>In Quick Lookup, you can always see where data originates from. In addition, when multiple root-sources carry the same data, you can easily select between them based on preference or trust.</Text>
                </Card>
                <Card className="sign-board" title="Blazingly Fast" >
                  <Text>Quick Lookup is designed so the API should - under all circumstances - return answers in less than 200ms. This is also true for reasonably sized batch queries. This may vary (greatly) during our Technology Preview.</Text>
                </Card>
              </Col>
              <Col md={8} className="invert">
                <Card title="API Playground">
                  <Text>The Quick Lookup API comes with a <a href={"https://graphql.quicklookup.com"} target={"_blank"}>GraphQL Playground</a> where you can test your queries, use ready-made examples or read the documentation.</Text>
                </Card>
                <Card className="connect-image" title="Everything Is Connected" cover={<Image alt="example" preview={false} src={Connected} />}>
                  <Text>Datasets published on the Quick Lookup platform are fully interconnected. We go to great lengths to link data in adjacent datasets if they previously shared no identifiers or links so that you can use them in the easiest possible way.</Text>
                </Card>
                <Card className="location-image" title="Reference Solver" cover={<Image alt="example" preview={false} src={Location} />}>
                  <Text>The QL reference solver is a powerful way to clean data or link it into the Knowledge Graph when data has no strong IDs. Tell the solver what type of entity/concept you expect the reference to point to, and it will take care of the rest.<br/><a href={"https://countries.quicklookup.com"}>Try it now</a></Text>
                </Card>
                <Card title="Intelligent Autocomplete">
                  <Text>The Reference Solver can also be used for autocomplete. Imagine being able to autocomplete a country for anything related to it: Name, IP Addresses, domain names, geo coordinates etc.<br/><a href={"https://countries.quicklookup.com"}>Try it now</a></Text>
                </Card>
              </Col>
              <Col md={8}>
                <Card className="edit-image" title="Redundancy Guard" cover={<Image alt="example" preview={false} src={Edit} />}>
                  <Text>Are you making multiple queries, repeatedly fetching the same data? <br/>No worries, Quick Lookup does not double-count re-fetched data. We even encourage you to use QL without local caching to ensure you are constantly using fresh data.</Text>
                </Card>
                <Card title="Semantic Statistics">
                  <Text>Full metadata is available for each data point in Quick Lookup. In addition, the QL Metric Registry, UN standardised Units-of-Measure and a directory of common subjects ensure that statistics from different sources can be easily compared.</Text>
                </Card>
                <Card className="atals-iamge" title="Automatic Unit Conversion" cover={ <Image alt="example" preview={false} src={atals} />}>
                  <Text>Time series may use different unit systems, scales and currencies. Quick Lookup automatically converts these to make them instantly comparable and match your desired output. Just set your preferences, and QL handles the rest.</Text>
                </Card>
                <Card className="sign-board" title="Streaming Data" >
                  <Text>Quick Lookup supports streaming data for rapidly changing data like exchange rates, trades and weather. Streaming queries are also handled by our <a href={"https://graphql.quicklookup.com"} target={"_blank"}>GraphQL API</a>.</Text>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        <Modal
          title={
            <>
              <Title level={1}>One Step Away!</Title>{" "}
              <Title level={2}>
                Fill out the form below and get access to the best country list
                int the world.
              </Title>
            </>
          }
          centered
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          onCancel={() => this.setModal1Visible(false)}
          width={674}
          footer={[
            <Button key="back" type="default" onClick={this.handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>
              Sign Me Up!
            </Button>,
          ]}
        >
          <Form layout="vertical" autoComplete="off">
            <Form.Item name="url" label="We &nbsp; Complete You">
              <Select
                size="large"
                prefix={<SearchOutlined />}
                mode="multiple"
                style={{ width: "100%" }}
                placeholder={
                  <>
                    <SearchOutlined /> Select
                  </>
                }
                optionLabelProp="label"
              >
                <Option value="Sweden" label="Sweden">
                  <Row gutter={16} justify="space-between" align="middle">
                    <Col md={3} xs={3}>
                      {/* <Image src={FlagIcon1} /> */}
                    </Col>
                    <Col md={9} xs={9}>
                      <Title level={2}>Sweden</Title>
                      <Text type="secondary">Sverige / Sweden</Text>
                    </Col>
                    <Col md={9} xs={9}>
                      <Title level={2}>
                        <b>SE</b>
                      </Title>
                      <SearchOutlined />
                      <Text>Baltic Sea</Text>
                    </Col>
                    <Col md={3} xs={3}>
                      {/* <Image src={SeShape} /> */}
                    </Col>
                  </Row>
                </Option>
                <Option value="Denmark" label="Denmark">
                  <Row gutter={16} justify="space-between" align="middle">
                    <Col md={3} xs={3}>
                      {/* <Image src={FlagIcon2} /> */}
                    </Col>
                    <Col md={9} xs={9}>
                      <Title level={2}>Denmark</Title>
                      <Text type="secondary">Danmark / Denmark</Text>
                    </Col>
                    <Col md={9} xs={9}>
                      <Title level={2}>
                        <b>SE</b>
                      </Title>
                      <SearchOutlined />
                      <Text>Baltic Sea</Text>
                    </Col>
                    <Col md={3} xs={3}>
                      {/* <Image src={DkShape} /> */}
                    </Col>
                  </Row>
                </Option>
                <Option value="Finland" label="Finland">
                  <Row gutter={16} justify="space-between" align="middle">
                    <Col md={3} xs={3}>
                      {/* <Image src={FlagIcon3} /> */}
                    </Col>
                    <Col md={9} xs={9}>
                      <Title level={2}>Finland</Title>
                      <Text type="secondary">Suomi / Finland</Text>
                    </Col>
                    <Col md={9} xs={9}>
                      <Title level={2}>
                        <b>SE</b>
                      </Title>
                      <SearchOutlined />
                      <Text>Baltic Sea</Text>
                    </Col>
                    <Col md={3} xs={3}>
                      {/* <Image src={SeShape} /> */}
                    </Col>
                  </Row>
                </Option>
                <Option value="Estonia" label="Estonia">
                  <Row gutter={16} justify="space-between" align="middle">
                    <Col md={3} xs={3}>
                      {/* <Image src={FlagIcon4} /> */}
                    </Col>
                    <Col md={9} xs={9}>
                      <Title level={2}>Estonia</Title>
                      <Text type="secondary">Eesti / Estonia</Text>
                    </Col>
                    <Col md={9} xs={9}>
                      <Title level={2}>
                        <b>SE</b>
                      </Title>
                      <SearchOutlined />
                      <Text>Baltic Sea</Text>
                    </Col>
                    <Col md={3} xs={3}>
                      {/* <Image src={SeShape} /> */}
                    </Col>
                  </Row>
                </Option>
              </Select>
              {/* <Input placeholder="input placeholder" /> */}
            </Form.Item>
          </Form>
        </Modal>

        {/* signup section */}
        <SignUp />
        {/* <section className="signup-bg">
          <div className="container">
            <Row>
              <Col
                xl={{ span: 18, offset: 3 }}
                lg={{ offset: 2, span: 20 }}
                md={{ offset: 1, span: 22 }}
                xs={24}
              >
                <div className="box">
                  <Row>
                    <Col
                      xl={{ span: 12, order: 1 }}
                      xs={{ order: 2, span: 24 }}
                    >
                      <Title level={3}>
                        <b>Sign up</b> now!
                      </Title>
                      <Title level={4}>
                        And get free access to the only list of contries you'll
                        ever need!
                      </Title>
                      <Button>Sign Me Up!</Button>
                    </Col>
                    <Col
                      xl={{ span: 12, order: 2 }}
                      xs={{ span: 24, order: 1 }}
                    >
                      <Image src={SignUp} alt="signup" preview={false} />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </section> */}
      </>
    );
  }
}