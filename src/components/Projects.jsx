import React from 'react'
import effectImage from './visionary-programming-coding-future-software_31965-57947.jpg'; // Import the SVG image from the same folder
const Projects = () => {
  return (
    <> 
    <div id='projects'><div style={{ display: 'flex', textAlign: 'center', marginTop: '139px' }}>
    <h1 style={{ marginLeft: '400px', fontSize: '55px', color: 'rgb(7, 136, 255)', textAlign: 'center' }}>RECENT</h1>
    <h1 style={{ marginLeft: '30px', fontSize: '55px', color: 'white', textAlign: 'center' }}>PROJECTS</h1>
  </div>
  
  <div className="card" style={{width: '24rem', marginLeft:'190px', marginTop:'90px',borderWidth:'7px' ,borderStyle:'solid',borderColor:'white'}} onMouseEnter="this.style.boxShadow='0 4px 8px 0 rgba(0,0,0,0.2)', this.style.transform='scale(1.05)'" onMouseLeave="this.style.boxShadow='none', this.style.transform='scale(1)'">
  <img src={effectImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Ecommerce Website</h5>
    <p style={{color:'black'}} className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a className="btn btn-primary">Go somewhere</a>
  </div>
</div>
   
<div className="card" style={{width: '24rem', marginLeft:'680px', marginTop:'-405px',borderWidth:'7px' ,borderStyle:'solid',borderColor:'white'}} onMouseEnter="this.style.boxShadow='0 4px 8px 0 rgba(0,0,0,0.2)', this.style.transform='scale(1.05)'" onMouseLeave="this.style.boxShadow='none', this.style.transform='scale(1)'">
  <img src={effectImage}  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Ecommerce Website</h5>
    <p style={{color:'black'}} className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a  className="btn btn-primary">Go somewhere</a>
  </div>
</div></div>


  </>
   
      

  )
}

export default Projects
