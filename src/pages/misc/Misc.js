import React from 'react';
import { Badge, Button, Carousel, Col, Image, Row } from "antd";
import './Misc.css';
import MiscSection from '../../components/miscSection/MiscSection';
import SignUp from '../../components/signUp/SignUp';

import Title from "antd/lib/typography/Title";
import Paragraph from 'antd/lib/typography/Paragraph';

import featuresIcon from "../../assets/images/features-icon.svg";
import TutorialsImage from "../../assets/images/misc/tutorial.svg";
import SliderImage from "../../assets/images/misc/slider_back.png";
import CloudIcon from "../../assets/images/misc/cloud.svg";
import PreviewImage from "../../assets/images/preview.png";
import PreviewRowImage from "../../assets/images/preview_row.png";
import PreviewColImage from "../../assets/images/preview_col.png";
import PainImage from "../../assets/images/misc/plan_pain.svg";
import PainLightImage from "../../assets/images/misc/pain_light.svg";
import MembersImage from "../../assets/images/misc/plan_members.svg";
import MembersLightImage from "../../assets/images/misc/members_light.svg";
import CondiImage from "../../assets/images/misc/plan_condi.svg";
import NeedImage from "../../assets/images/misc/plan_need.svg";
import NeedLightImage from "../../assets/images/misc/need_light.svg";
import CheckIcon from "../../assets/images/misc/check.svg";
import CheckLightIcon from "../../assets/images/misc/check_light.svg";
import rightBlack  from "../../assets/images/misc/right-black.svg";
import { EyeOutlined, RightOutlined } from "@ant-design/icons";

const brand_data = [
  {
    title: 'Nullam faucibus',
    content: 'Maecenas elementum felis ut orci mattis, vel faucibus leo condimentum. Vestibulum porttitor libero eget ipsum commodo pellentesque. Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet.',
  },
  {
    title: 'Vestibulum porttitor',
    content: 'Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.',
  },
  {
    title: 'sit amet.',
    content: 'Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit. Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet.',
  },
  {
    title: ' Proin ullamcorper',
    content: 'Maecenas elementum felis ut orci mattis, vel faucibus leo condimentum. Vestibulum porttitor libero eget ipsum commodo pellentesque. Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas.. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.',
  },
  {
    title: 'Nullam a lorem',
    content: 'Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. ',
  },
  {
    title: 'Quisque amet.',
    content: 'Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet. Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit.',
  },
]

const targeted_data = [
  {
    value: 85,
    unit: '%',
    title: 'Nullam a lorem ut lacus tristique blandit in non elit.incidunt leo.',
  },
  {
    value: 13,
    unit: 'Minutes',
    title: 'Incidunt leo sapien, a mattis massa luctus interdum.',
  },
  {
    value: 90,
    unit: '%',
    title: 'Vestibulum tincidunt leo sapien, a mattis',
  },
]

const homecareer_data = [
  'Fusce enim enim', 'Fusce enim enim', 'Ultricies id justo', 'Ultricies id justo', 'Id, egestas condimentum lorem.', 'Id, egestas condimentum lorem.',
]

const tutorials_data = [
  {
    title: 'Sed suscipit hendrerit magna',
    content: 'Fusce enim enim, ultricies id justo id, egestas condimentum lorem. Pellentesque habitant morbi tristique senectus et.',
    time: 6,
  },
  {
    title: 'Sed suscipit hendrerit magna',
    content: 'Fusce enim enim, ultricies id justo id, egestas condimentum lorem. Pellentesque habitant morbi tristique senectus et.',
    time: 6,
  },
  {
    title: 'Sed suscipit hendrerit magna',
    content: 'Fusce enim enim, ultricies id justo id, egestas condimentum lorem. Pellentesque habitant morbi tristique senectus et.',
    time: 6,
  },
  {
    title: 'Sed suscipit hendrerit magna',
    content: 'Fusce enim enim, ultricies id justo id, egestas condimentum lorem. Pellentesque habitant morbi tristique senectus et.',
    time: 6,
  },
]

const bananas_data = [
  {
    preview: true,
    title: 'Nullam faucibus',
    content: 'Maecenas elementum felis ut orci mattis, vel faucibus leo condimentum. Vestibulum porttitor libero eget ipsum commodo pellentesque. Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet.',
  },
  {
    preview: true,
    title: 'Vestibulum porttitor',
    content: 'Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.',
  },
  {
    preview: true,
    title: 'Quisque amet.',
    content: 'Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet. Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit.',
  },
  {
    preview: false,
  }
]

const bananas_two_data = [
  {
    preview: true,
    title: 'Proin ullamcorper',
    content: 'Maecenas elementum felis ut orci mattis, vel faucibus leo condimentum. Vestibulum porttitor libero eget ipsum commodo pellentesque. Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas.. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.',
  },
  {
    preview: true,
    title: 'Nullam a lorem',
    content: 'Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum.',
  },
  {
    preview: true,
    title: 'Quisque amet.',
    content: 'Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet. Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit.',
  },
  {
    preview: false,
  },
  {
    preview: true,
    title: 'Quisque amet.',
    content: 'Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet. Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit.',
  },
  {
    preview: true,
    title: 'Nullam a lorem',
    content: 'Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum.',
  },
]

const tutorials_two_data = [
  {
    title: 'Nullam faucibus sit amet.',
    content: 'Maecenas elementum felis ut orci mattis, vel faucibus leo condimentum. Vestibulum porttitor libero eget ipsum commodo pellentesque. Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet. Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.',
  },
  {
    title: 'Sed suscipit hendrerit magna',
    content: 'Suspendisse iaculis, eros vel pretium tincidunt, tortor nisi scelerisque velit, vitae rutrum libero justo vitae nibh. Mauris suscipit purus est, nec vestibulum ante condimentum quis. Vivamus sed tellus ante. Morbi et ante lorem. Duis pellentesque ex felis. Nullam pellentesque purus velit, vel elementum nulla malesuada sit amet. In facilisis ipsum nec augue sollicitudin, vel vulputate nibh suscipit. Phasellus eu ex aliquam, venenatis risus ut, hendrerit elit. Maecenas elementum felis ut orci mattis, vel faucibus leo condimentum. Vestibulum porttitor libero eget ipsum commodo pellentesque.',
  },
  {
    title: 'Nullam faucibus sit amet.',
    content: 'Maecenas elementum felis ut orci mattis, vel faucibus leo condimentum. Vestibulum porttitor libero eget ipsum commodo pellentesque. Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet. Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.',
  },
  {
    title: 'Sed suscipit hendrerit magna',
    content: 'Suspendisse iaculis, eros vel pretium tincidunt, tortor nisi scelerisque velit, vitae rutrum libero justo vitae nibh. Mauris suscipit purus est, nec vestibulum ante condimentum quis. Vivamus sed tellus ante. Morbi et ante lorem. Duis pellentesque ex felis. Nullam pellentesque purus velit, vel elementum nulla malesuada sit amet. In facilisis ipsum nec augue sollicitudin, vel vulputate nibh suscipit. Phasellus eu ex aliquam, venenatis risus ut, hendrerit elit. Maecenas elementum felis ut orci mattis, vel faucibus leo condimentum. Vestibulum porttitor libero eget ipsum commodo pellentesque.',
  },
]

const planning_data = [
  {
    title: 'Nam ornare dolor',
    content: 'Tincidunt ornare. Sed malesuada',
    image: PainImage,
    smart: false,
  },
  {
    title: 'Sed sodales',
    content: 'Tincidunt ornare. Sed malesuada',
    image: MembersImage,
    smart: true,
  },
  {
    title: 'Maecenas condi',
    content: 'Tincidunt ornare. Sed malesuada',
    image: CondiImage,
    smart: true,
  },
  {
    title: 'eget justo',
    content: 'Tincidunt ornare. Sed malesuada',
    image: NeedImage,
    smart: false,
  },
]

const usecases_data = [
  'Fusce enim enim', 'Fusce enim enim', 'Fusce enim enim', 'Ultricies id justo', 'Ultricies id justo', 'Ultricies id justo', 'Id, egestas condimentum lorem.', 'Id, egestas condimentum lorem.', 'Id, egestas condimentum lorem.',
]

const Misc = (props) => (
  <>
  <div className="misc-page">
    <MiscSection title="Miscalaneous" semititle="& Other" />
    <section className="brands-section">
      <div className="container">
        <Title level={1}>
          Quisque <b>Faucibus Lacinia</b> Aliquet
        </Title>
        <Paragraph className="overview">
          incidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.incidunt leo sapien, Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis
        </Paragraph>
        <Paragraph className="headline">Ae blandit in non elit.</Paragraph>
        <Row>
          {brand_data.map((item, index) => (
            <Col key={`bd-${index}`} md={8} sm={12} xs={24} className="brand-card">
              <Title level={3} className={`title ${index % 2 === 0 && 'smart'}`}>{item.title}</Title>
              <Paragraph>{item.content}</Paragraph>
            </Col>
          ))}
          {/* <Paragraph>Pellentesque purus velit, vel elementum nulla malesuada sit amet. In </Paragraph> */}
        </Row>
      </div>
    </section>

    <section className="targeted-section">
      <div className="container">
        <Row>
          {targeted_data.map((item, index) => (
            <Col key={`tgd-${index}`} md={8} xs={24} className={`targeted-card ${index !== 0 && 'divider'}`}>
              <div className="header">
                <Title level={1}>{item.value}</Title>
                <Title level={2}>{item.unit}</Title>
              </div>
              <Paragraph className="title">{item.title}</Paragraph>
            </Col>
          ))}
          <Paragraph className="content">Pellentesque purus velit, vel elementum nulla malesuada sit amet. In </Paragraph>
        </Row>
      </div>
    </section>

    <section className="slider-section">
      <div className="container">
        <Carousel>
          {[0, 1, 2, 3, 4].map((item) => (
            <div key={`cs-${item}`}>
                <Image src={SliderImage} alt="" preview={false} />
                <div className='slider-content'>
                  <Title level={1}>I am <b>A Popup</b></Title>
                  <Paragraph className="slider-content__title-para">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</Paragraph>
                  <Row gutter={30} className="slider-content__details">
                    <Col md={12} xs={24}>
                      <Title level={3} className="slider-content__details-title">Nullam faucibus sit amet.</Title>
                      <Paragraph>Maecenas elementum felis ut orci mattis, vel faucibus leo condimentum. Vestibulum porttitor libero eget ipsum commodo pellentesque. Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet.</Paragraph>
                      <Paragraph>Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.</Paragraph>
                    </Col>
                    <Col md={12} xs={24}>
                      <Title level={3} className="slider-content__details-title">Sed suscipit hendrerit magna</Title>
                      <Paragraph>Suspendisse iaculis, eros vel pretium tincidunt, tortor nisi scelerisque velit, vitae rutrum libero justo vitae nibh. Mauris suscipit purus est, nec vestibulum ante condimentum quis. Vivamus sed tellus ante. Morbi et ante lorem. Duis pellentesque ex felis. Nullam pellentesque purus velit, vel elementum nulla malesuada sit amet. In facilisis ipsum nec augue sollicitudin, vel vulputate nibh suscipit. Phasellus eu ex aliquam, venenatis risus ut, hendrerit elit. Maecenas elementum felis ut orci mattis, vel faucibus leo condimentum. Vestibulum porttitor libero eget ipsum commodo pellentesque.</Paragraph>
                    </Col>
                </Row>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>

    <section className="homecareer-section">
      <div className="container">
        <Row gutter={32}>
          <Col md={12} xs={24}>
            <Title level={2}><b>Vestibulum</b> Lorem Porttitor</Title>
            <Paragraph className="content">Fusce enim enim, ultricies id justo id,  gestas condimentum lorem.</Paragraph>
            <Row> 
              {homecareer_data.map((item, index) => (
                <Col className="homecareer-item" key={`hcd-${index}`} md={12} xs={24}>
                  <div className={`checkicon-container ${index % 2 === 0 ? 'white' : 'dark'}`}>
                    <Image src={index % 2 === 0 ? rightBlack : CheckLightIcon} alt="" preview={false} />
                  </div>
                  <Paragraph>{item}</Paragraph>
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={12} xs={24}>
            <Badge.Ribbon color="red" placement="start" text={<Image src={PainLightImage} preview={false} />}>
              <Image className="overview" src={PreviewRowImage} alt="" preview={false} />
              <div className="ribbon-main">
              <div className="ribbon-one ant-ribbon ant-ribbon-placement-start ant-ribbon-color-red">
                <span className="ant-ribbon-text">
                  <div className="ant-image">
                    <Image src={MembersLightImage} preview={false} />
                  </div>
                </span>
                <div className="ant-ribbon-corner" />
              </div>
              <div className="ribbon-two ant-ribbon ant-ribbon-placement-start ant-ribbon-color-red">
                <span className="ant-ribbon-text">
                  <div className="ant-image">
                    <Image src={NeedLightImage} preview={false} />
                  </div>
                </span>
                <div className="ant-ribbon-corner" />
              </div>
              </div>
            </Badge.Ribbon>
          </Col>
        </Row>
      </div>
    </section>

    <section className="tutorials-section">
      <div className="container">
        <div className="header">
          <div>
            <Title level={1}>
              Tutorials <b>& Guides</b>
            </Title>
            <Paragraph className="content">Fusce enim enim, ultricies id justo id, egestas condimentum lorem.</Paragraph>
          </div>
          <Image src={TutorialsImage} alt="" preview={false} />
        </div>
        <Row gutter={30}>
          {tutorials_data.map((item, index) => (
            <Col className="tutorial" key={`ttd-${index}`} md={12} xs={24}>
              <Image src={PreviewRowImage} alt="" preview={false} />
              <Title level={3}>{item.title}</Title>
              <Paragraph>{item.content}</Paragraph>
              <Paragraph className="views"><EyeOutlined key="view" />{item.time} mins read</Paragraph>
            </Col>
          ))}
        </Row>
      </div>
    </section>

    <SignUp />

    <section className="bananas-section">
      <div className="container">
        <div className="header">
          <Title level={1}>
            Quisque <b>Faucibus Lacinia</b> Aliquet
          </Title>
          <Paragraph className="overview">
            incidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.incidunt leo sapien, Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis
          </Paragraph>
          <Paragraph className="headline">Ae blandit in non elit.</Paragraph>
        </div>
        <Title className="banana" level={3}>Vestibulum porttitor </Title>
        <Paragraph className="bananas-pera">
          Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.
        </Paragraph>
        <Row gutter={30}>
          {bananas_data.map((item, index) => (
            <Col className="banana" key={`bnd-${index}`} md={12} sm={24}>
              {item.preview ? (
                <>
                  <Title className={index === 0 && 'smart'} level={3}>{item.title}</Title>
                  <Paragraph className="bananas-pera">{item.content}</Paragraph>
                </>
              ) : (
                <Image src={PreviewRowImage} alt="" preview={false} />
              )}
            </Col>
          ))}
        </Row>
      </div>
    </section>

    <section className="homecareer-section homecareer-box-section">
      <div className="container">
        <Row gutter={30}>
          <Col md={12} xs={24}>
            <Badge.Ribbon color="red" placement="start" text={<Image src={PainLightImage} preview={false} />}>
              <Image className="overview rebbon-img" src={PreviewImage} alt="" preview={false} />
              <div className="ribbon-one ant-ribbon ant-ribbon-placement-start ant-ribbon-color-red">
                <span className="ant-ribbon-text">
                  <div className="ant-image">
                    <Image className="" src={MembersLightImage} preview={false} />
                  </div>
                </span>
                <div className="ant-ribbon-corner" />
              </div>
              <div className="ribbon-two ant-ribbon ant-ribbon-placement-start ant-ribbon-color-red">
                <span className="ant-ribbon-text">
                  <div className="ant-image">
                    <Image src={NeedLightImage} preview={false} />
                  </div>
                </span>
                <div className="ant-ribbon-corner" />
              </div>
            </Badge.Ribbon>
          </Col>
          <Col md={12} xs={24}>
            <Title level={2}><b>Vestibulum Lorem Porttitor</b></Title>
            <Paragraph className="content">Fusce enim enim, ultricies id justo id,  gestas condimentum lorem.</Paragraph>
            <Row> 
              {homecareer_data.map((item, index) => (
                <Col className="homecareer-item" key={`hctd-${index}`} md={12} xs={24}>
                  <div className="checkicon-container light">
                    <Image src={CheckIcon} alt="" preview={false} />
                  </div>
                  <Paragraph>{item}</Paragraph>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </section>

    <section className="bananas-two-section">
      <div className="container">
        <Row gutter={30}>
          {bananas_two_data.map((item, index) => (
            <Col className="banana-two" key={`bntd-${index}`} md={8} sm={12} xs={24}>
              <div className="banana-two__box">
                {item.preview ? (
                  <>
                    <Title className={index % 2 !== 0 && 'smart'} level={3}>{item.title}</Title>
                    <Paragraph className="bananas-two-section__para">{item.content}</Paragraph>
                  </>
                ) : (
                  <Image src={PreviewImage} alt="" preview={false} />
                )}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>

    <section className="bananas-three-section">
      <div className="container">
        <Row gutter={30} className="bananas-first-row">
          <Col md={8} sm={12} xs={24}>
            <Title className="smart" level={3}>Nullam a lorem</Title>
            <Paragraph>Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum.</Paragraph>
            <Title level={3}>Quisque amet.</Title>
            <Paragraph>Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum.</Paragraph>
          </Col>
          <Col md={16} sm={12} xs={24}>
            <Image src={PreviewImage} alt="" preview={false} />
          </Col>
        </Row>
        <Row gutter={30}>
          <Col md={8} sm={12} xs={24}>
            <Title level={3}>Quisque amet.</Title>
            <Paragraph>Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet.</Paragraph>
            <Paragraph>Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit.Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet.</Paragraph>
            <Paragraph>Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit.</Paragraph>
          </Col>
          <Col md={8} xs={0}>
            <Image className="tree-img" src={PreviewColImage} alt="" preview={false} />
          </Col>
          <Col md={8} sm={12} xs={24}>
            <Title className="smart" level={3}>Nullam a lorem</Title>
            <Paragraph>Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum.</Paragraph>
            <Title className="smart" level={3}>Nullam a lorem</Title>
            <Paragraph>Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum.</Paragraph>
          </Col>
        </Row>
      </div>
    </section>

    <section className="tutorials-two-section">
      <div className="container">
        <div className="header">
          <div>
            <Title level={1}>
              <b>Tutorials</b>  & Guides
            </Title>
            <Paragraph className="content">Fusce enim enim, ultricies id justo id, egestas condimentum lorem.</Paragraph>
          </div>
          <Image src={TutorialsImage} alt="" preview={false} />
        </div>
      </div>
      <Row>
        <Col className="tutorials-two-left" md={8} xs={24}>
          <div className="content-container">
            <Paragraph className="content">“Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis “ </Paragraph>
            <div className="cloud-container">
              <Image src={CloudIcon} alt="" preview={false} />
              <Title level={3}>Latissimus Dorsi</Title>
            </div>
          </div>
        </Col>
        <Col className="tutorials-two-right" md={{offset:1,span:16}} xs={24}>
          <div className="title-container">
            <Paragraph>Company</Paragraph>
            <Title className="title" level={3}>Latissimus Dorsi</Title>
          </div>
          <div className="title-container">
            <Paragraph>Industry</Paragraph>
            <Title className="title" level={3}>Condimentum Lorem.</Title>
          </div>
          <Row gutter={30}>
            {tutorials_two_data.map((item, index) => (
              <Col className="tutorial-two" key={`tttd-${index}`} md={12} xs={24}>
                <Title level={3}>{item.title}</Title>
                <Paragraph>{item.content}</Paragraph>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </section>
    
    <section className="tutorials-three-section">
      <div className="container">
        <div className="item">
          <Row>
            <Col md={8} sm={12} xs={24}>
              <Title className="smart" level={3}>Nullam a lorem</Title>
              <Paragraph>Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum.</Paragraph>
              <Title level={3}>Quisque amet.</Title>
              <Paragraph>Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum.</Paragraph>
            </Col>
            <Col md={16} sm={12} xs={24}>
              <Image className='custom-image' src={PreviewImage} alt="" preview={false} />
            </Col>
          </Row>
        </div>
        <div className="item">
          <Row>
            <Col md={8} sm={12} xs={24}>
              <Title level={3}>Quisque amet.</Title>
              <Paragraph>Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet.</Paragraph>
              <Paragraph>Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit.Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet.</Paragraph>
              <Paragraph>Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit.</Paragraph>
            </Col>
            <Col md={8} xs={0}>
              <Image src={PreviewColImage} alt="" preview={false} />
            </Col>
            <Col md={0} xs={24}>
              <Image src={PreviewRowImage} alt="" preview={false} />
            </Col>
            <Col md={8} sm={12} xs={24}>
              <Title level={3}>Quisque amet.</Title>
              <Paragraph>Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. </Paragraph>
              <Title className="smart" level={3}>Nullam a lorem</Title>
              <Paragraph>Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum.</Paragraph>
            </Col>
          </Row>
        </div>
        <Row>
          <Col md={8} sm={12} xs={24}>
            <Title level={3}>Quisque amet.</Title>
            <Paragraph>Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet.</Paragraph>
            <Paragraph>Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit.Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet.</Paragraph>
            <Paragraph>Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit.</Paragraph>
          </Col>
          <Col md={8} sm={12} xs={24}>
            <Title className="smart" level={3}>Nullam a lorem</Title>
            <Paragraph className='smart__para'>Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. </Paragraph>
            <Paragraph>Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. </Paragraph>
          </Col>
          <Col md={8} sm={12} xs={24}>
              <Title level={3}>Quisque amet.</Title>
              <Paragraph>Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. </Paragraph>
              <Title className="smart" level={3}>Nullam a lorem</Title>
              <Paragraph>Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum.</Paragraph>
            </Col>
        </Row>
      </div>
    </section>
  
    <section className="planning-section">
      <div className="container">
        <Row>
          <Col className="overview" md={8} sm={24}>
            <Title level={1}>Sed suscipit hendrerit magna</Title>
            <Paragraph>Fusce enim enim, ultricies id justo id, egestas condimentum lorem.</Paragraph>
            <Paragraph>Pellentesque habitant morbi tristique senectus et.</Paragraph>
          </Col>
          <Col md={16} sm={24}>
            <Row gutter={30}>
              {planning_data.map((item, index) => (
                <Col key={`pnd-${index}`} md={12} xs={24}>
                  <div className="plan-item">
                    <Image src={item.image} alt="" preview={false} />
                    <div>
                      <Title className={item.smart && 'smart'} level={3}>{item.title}</Title>
                      <Paragraph>{item.content}</Paragraph>
                      <Button type="text" dark>Learn More<RightOutlined /></Button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  
    <section className="usecase-section">
      <div className="container">
        <Title level={1}><b>Featured</b> Use Cases</Title>
        <Paragraph className="content">Fusce enim enim, ultricies id justo id, egestas condimentum lorem.</Paragraph>
        <Row>
          {usecases_data.map((item, index) => (
            <Col className="usecase-item" key={`ucd-${index}`} md={8} sm={12} xs={24}>
              <div className="checkicon-container">
                <Image src={CheckIcon} alt="" preview={false} />
              </div>
              <Paragraph>{item}</Paragraph>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  </div>
  </>
)

export default Misc;