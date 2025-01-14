import React from 'react'
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from 'react-router-dom';

const About = () => {
  return <section>
    <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">

            {/* ======== About Section Image ========*/}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                <img src={aboutImg} alt="" />
                <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%] ">
                    <img src={aboutCardImg} alt="" />
                </div>
            </div>

            {/* ======== About Section Content ========*/}

            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                <h2 className="heading text-5xl">Proud to be one of the nations best and unique.</h2>
                <p className="text__para">A location-based family physician system connects patients with nearby doctors, offering personalized healthcare services, scheduling, and consultations, ensuring efficient, accessible, and convenient medical care tailored to their geographic area.</p>
                <p className="text__para mt-[30px]">
                The system stores detailed medical histories for each patient and family, allowing them to reassign physicians when relocating. It offers location-based physician matching, appointment booking, medical records access, and personalized care management across locations.</p>
                <Link to='/'><button className="btn">Learn More</button></Link>
            </div>

        </div>
    </div>
  </section>
}

export default About