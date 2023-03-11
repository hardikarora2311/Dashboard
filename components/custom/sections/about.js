import React from 'react'
import Image from "next/image";
import bannerimg from "../../../assets/images/landingpage/banner-img.png";
import ques from "../../../assets/images/ques.svg";
import what from "../../../assets/images/what.png";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import img5 from "../../../assets/images/features/feature30/feature-img.jpg";


const about = () => {
  return (
    <section className="about-wrapper">
        <div className="about-main">
            <Image src={bannerimg} className='service-photo' alt="hero banner" />
            <div className="about-main-text">
                <h3>Who Are We?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laboriosam sit labore, non consequuntur atque qui velit, quaerat laudantium quae provident optio alias dolorum officiis excepturi repellendus natus totam minus!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laboriosam sit labore, non consequuntur atque qui velit, quaerat laudantium quae provident optio alias dolorum officiis excepturi repellendus natus totam minus!</p>

            </div>
        </div>


        <div className="about-main second">
            <Image src={bannerimg} className='service-photo' alt="hero banner" />
            <div className="about-main-text">
                <h3>What Do We Do?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laboriosam sit labore, non consequuntur atque qui velit, quaerat laudantium quae provident optio alias dolorum officiis excepturi repellendus natus totam minus!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laboriosam sit labore, non consequuntur atque qui velit, quaerat laudantium quae provident optio alias dolorum officiis excepturi repellendus natus totam minus!</p>
            </div>
        </div>
        <div className="spacer ">
        <Container className="feature30">
          <Row>
            <Col lg="10">
              <Image
                src={img5}
                className="rounded img-responsive"
                alt="wrappixel"
              />
            </Col>
            <Col lg="5" md="7" className="text-center wrap-feature30-box">
              <Card className="card-shadow">
                <CardBody>
                  <div className="p-20">
                    <h3 className="title">
                     Our Vision
                    </h3>
                    <p>
                     The vision is to make Indian Students the next wave of leadership
                    </p>
                    <p> We aim at inculcating the spirit of competitiveness,clarity in career and appraoch to crack any university.As said,we aim to make out students the next majority in classes of top tier national and international instituitions.</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="about-main second">
            <Image src={bannerimg} className='service-photo' alt="hero banner" />
            <div className="about-main-text">
                <h3>Comming Together</h3>
                <p>We are seeking talent driven individuals with a hunger for success to help us shape the future of the business world. As a member,uou'll have access to unparalled opportunities for growth,networking and professsional developement. Don't miss out the chance to make your mark in the world of business.</p>
                <p>The student members shall be responsible for leading the respective teams and will be assisted with any necessary resource required.</p>
            </div>
        </div>
    </section>
  )
}

export default about
