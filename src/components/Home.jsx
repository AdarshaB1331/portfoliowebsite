import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ReactTyped } from 'react-typed';
import { Link, animateScroll as scroll } from 'react-scroll';

const Home = () => {
  return (
    <>
    <div id='home'><div>
        <h1 style={{marginLeft:'80px',fontSize:'55px',marginTop:'100px'}}>HEY! I’M ADARSHA BASKOTA</h1>
        <h1 style={{marginLeft:'80px',fontSize:'55px',marginTop:'70px',color:'rgb(7, 136, 255)'}}>I'M A {""}
        <ReactTyped style={{color:'rgb(7, 136, 255)'}} strings={[" Front End Developer", "Data Scientist", "Computer Science Student"]}
          
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar="|"
          showCursor={true}/>
        </h1>
      </div>
      <div style={{maxWidth:'700px',marginLeft:'80px',marginTop:'70px'}}>
        <p style={{fontSize:'24px'}}>I love learning various programming languages like React and also wanna explore other programming language like Python. I wanna learn data science</p>
      </div>
      <img
        className="spin" // Apply the spin class here
        style={{marginLeft:'1000px',marginTop:'-530px',width:'250px'}}
        src="public/effect-2.svg"
        alt="Shape"
      />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0px' ,marginLeft:"390px"}}>
        <Link to="contactme"
            spy={true}
            smooth={true}
            offset={-70}
            duration={200}
          style={{
              marginLeft:'-1080px',
              marginTop:'60px',
              color: 'white',
              fontWeight: 'bolder',
              fontSize: '1.2em',
              borderRadius: '20px',
              backgroundColor: '#007bff',
              transition: 'background-color 0.3s ease',
              border: 'none',
              padding: '10px 20px',
          }}
          type="button"
          className="btn btn-info"
          onMouseOver={(e) => { e.target.style.backgroundColor = "#0a1633" }}
          onMouseOut={(e) => { e.target.style.backgroundColor = "#007bff" }}
        >
          GET IN TOUCH
        </Link>

        {/* Improved styling for social media icons */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '60px',marginTop:'60px', }}>
          <div style={{ padding: '10px', marginRight: '10px', transition: 'background-color 0.3s', borderRadius: '50%' }}>
          <a  href='https://www.facebook.com/profile.php?id=100088493269622' target="_blank"><FaFacebook style={{ color: '#3b5998', fontSize: '34px' }} /></a>  
          </div>
          <div style={{ padding: '10px', marginRight: '10px', transition: 'background-color 0.3s', borderRadius: '50%' }}>
           <a href='https://www.facebook.com/profile.php?id=100088493269622' target="_blank"><FaInstagram style={{ color: '#c32aa3', fontSize: '34px' }} /></a> 
          </div>
          <div style={{ padding: '10px', transition: 'background-color 0.3s', borderRadius: '50%' }}>
          <a href='https://www.facebook.com/profile.php?id=100088493269622'target="_blank"><FaYoutube style={{ color: '#ff0000', fontSize: '34px' }} /></a> 
          </div>
          <div style={{ padding: '10px', transition: 'background-color 0.3s', borderRadius: '50%' }}>
          <a href='https://www.facebook.com/profile.php?id=100088493269622'target="_blank"><FaXTwitter style={{ color: '#ff0000', fontSize: '34px' }} /></a> 
          </div>
        </div>
      </div></div>
      
    </>
  );
}

export default Home;
