import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Lottie from "react-lottie";
// import animationData from "../../assets/images/landingpage/study.json";
import animationData from "../../assets/images/landingpage/college.json";
import bannerimg from "../../assets/images/landingpage/banner-img.png";

const Banner2 = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="static-slider-head banner2">
      <Container>
        <Row className="">
          <Col lg="6" md="6" className="align-self-center">
            <h1 className="title">
             Crack that Internship or your Dream Job on the first Attempt.
            </h1>
            <h4 className="subtitle font-light">
              Beat the Rat race.
            </h4>
            <a
              href="/Signup"
              className="btn btn-danger m-r-20 btn-md m-t-30 "
            >
              Join Now
            </a>
            <Link href="/Signup">
              <a className="btn btn-md m-t-30  btn-outline-light ">
                Join as a Mentor
              </a>
            </Link>
          </Col>
          <Col lg="6" md="6">
            {/* <Image src={bannerimg} alt="hero banner" /> */}
            <Lottie options={defaultOptions} height={460} width={580} />;
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner2;
