import React from 'react';
import './AboutInfo.css';


function AboutInfo(){

    return(<>
    <div className="about-text-content">
    <div className="about-info">
        <p className="about-desc">Our Institution is a renowned institution dedicated to providing top-notch education and fostering innovation. Our modern infrastructure includes state-of-the-art classrooms, advanced laboratories, a world-class library, and vibrant recreational spaces designed to enhance the student experience.</p>
        <p className="about-desc">We offer a wide range of undergraduate and postgraduate programs tailored to prepare students for successful careers in various fields. With highly qualified faculty, a focus on research and skill development, and opportunities for internships and industry collaboration, we empower our students to achieve academic and professional excellence.</p>
        <p className="about-desc">At JPT, we prioritize holistic development, offering diverse extracurricular activities, sports facilities, and cultural events. Our campus is a vibrant hub where students can grow intellectually, socially, and personally, shaping a bright future in an ever-evolving world. Join us at JPT to embark on a transformative journey of learning, growth, and success. Together, we shape the future with knowledge, innovation, and excellence.</p>
    </div>
    </div>
    </>)
}

export default React.memo(AboutInfo);