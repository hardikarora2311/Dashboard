import React from 'react'
import Image from "next/image";
import bannerimg from "../../../assets/images/landingpage/banner-img.png";
import ques from "../../../assets/images/ques.svg";
import what from "../../../assets/images/what.png";


const about = () => {
  return (
    <section className="about-wrapper">
        <div className="about-main">
            <Image src={bannerimg} className='service-photo' alt="hero banner" />
            <div className="about-main-text">
                <h3>Who Are We?</h3>
                <p>Carrer Wings is a <strong>student</strong> driven company.</p>
            </div>
        </div>


        <div className="about-main second">
            <Image src={bannerimg} className='service-photo' alt="hero banner" />
            <div className="about-main-text">
                <h3>What Do We Do?</h3>
                <p>We assist students in their drive towards a <strong>stringer profile</strong> by providing guarenteed internships and opportunities through our company partnerships.</p>
                <p>Guarenteed internships, <strong>holistic packages</strong>,connections with industry leaders and more...</p>
            </div>
        </div>

    </section>
  )
}

export default about