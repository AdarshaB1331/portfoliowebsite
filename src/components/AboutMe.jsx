import React from 'react';
import { FaLaptopCode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
const AboutMe = () => {
  return (
    <>
    <div id='aboutme'>   <div style={{ display: 'flex', textAlign: 'center', marginTop: '139px' }}>
        <h1 style={{ marginLeft: '490px', fontSize: '55px', color: 'white', textAlign: 'center' }}>ABOUT</h1>
        <h1 style={{ marginLeft: '30px', fontSize: '55px', color: 'rgb(7, 136, 255)', textAlign: 'center' }}>ME</h1>
      </div>

      <div style={{ maxWidth: '700px', marginLeft: '80px', marginTop: '70px' }}>
        <p style={{ fontSize: '24px' }}>
          I am Adarsha Baskota. I am currently doing my bachelor's in computer science. I am currently improving my skills in React JS and want to improve more. After React, I want to explore more. So before moving to the next programming language, I want to make sure I am decent at React. Some of the skills that I am familiar with are:
        </p>
      </div>

      {/* Spinning Image */}
    <div><FaLaptopCode style={{fontSize:'240px',marginLeft:'950px',marginTop:'-280px'}}/></div>
    <div style={{marginLeft:'80px',marginTop:'90px', border: '4px solid white', borderRadius: '50%', width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <FaReact style={{ fontSize: '80px', color: 'white' }} />
</div>
<div style={{marginLeft:'330px',marginTop:'-120px', border: '4px solid white', borderRadius: '50%', width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <IoLogoJavascript style={{ fontSize: '80px', color: 'white' }} />
</div>
<div style={{marginLeft:'600px',marginTop:'-120px', border: '4px solid white', borderRadius: '50%', width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <FaBootstrap  style={{ fontSize: '80px', color: 'white' }} />
</div>
<div style={{marginLeft:'850px',marginTop:'-120px', border: '4px solid white', borderRadius: '50%', width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <FaHtml5 style={{ fontSize: '80px', color: 'white' }} />
</div>
<div style={{marginLeft:'1100px',marginTop:'-120px', border: '4px solid white', borderRadius: '50%', width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <FaCss3 style={{ fontSize: '80px', color: 'white' }} />
</div></div>
   
</>
   
  );
}

export default AboutMe;
