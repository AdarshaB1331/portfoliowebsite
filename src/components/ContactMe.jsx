import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const ContactMe = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const onNameChange = (e) => {
    setName(e.target.value);
  }

  const onMessageChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if(name===''||message===''){

      return;
    }
    const emailBody = encodeURIComponent(`${message}`);
    const subject = encodeURIComponent(`Message by ${name}`);
    const mailToLink = `https://mail.google.com/mail/u/0/?to=Adarsha+Baskota%3Cplaypoints2004@gmail.com%3E&su=${subject}&&body=${emailBody}&fs=1&tf=cm`;
    
    // Open the mail client in a new tab
    window.open(mailToLink, '_blank');

    setName('')
    setMessage('')

  }

  return (
    <>
      <div id='contactme'>
        <div style={{ display: 'flex', textAlign: 'center', marginTop: '139px', marginBottom: '40px' }}>
          <h1 style={{ marginLeft: '480px', fontSize: '55px', color: 'RED', textAlign: 'center' }}>CONTACT</h1>
          <h1 style={{ marginLeft: '30px', fontSize: '55px', color: 'white', textAlign: 'center' }}>ME</h1>
        </div>

        <div className="card" style={{ width: '68rem', height: '700px', backgroundColor: 'rgba(7, 136, 255, 0.1)', marginLeft: '120px', marginTop: '70px' }}>
          <div className="card-body">
            <h1 className="card-title" style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>Let's Discuss</h1>
            <h4 className="card-text" style={{ color: 'white', textAlign: 'center', marginTop: '30px' }}>Feel free to contact me.</h4>

            <div className='main' style={{ height: '800px' }}>
              <div>
                <h5 className="card-text" style={{ color: 'white', marginTop: '60px' }}>WRITE AN E-MAIL</h5>
                <h3 className="card-text" style={{ color: 'white', marginTop: '30px' }}>playpoints2004@gmail.com</h3>
                <h5 className="card-text" style={{ color: 'white', marginTop: '60px' }}>WRITE AN E-MAIL</h5>
                <h3 className="card-text" style={{ color: 'white', marginTop: '30px' }}>+044 9696 9696 3636</h3>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0px', marginTop: '80px' }}>
                  <div style={{ padding: '10px', marginRight: '10px', transition: 'background-color 0.3s', borderRadius: '50%' }}>
                    <a href='https://www.facebook.com/profile.php?id=100088493269622' target="_blank"><FaFacebook style={{ color: '#3b5998', fontSize: '34px' }} /></a>
                  </div>
                  <div style={{ padding: '10px', marginRight: '10px', transition: 'background-color 0.3s', borderRadius: '50%' }}>
                    <a href='https://www.facebook.com/profile.php?id=100088493269622' target="_blank"><FaInstagram style={{ color: '#c32aa3', fontSize: '34px' }} /></a>
                  </div>
                  <div style={{ padding: '10px', transition: 'background-color 0.3s', borderRadius: '50%' }}>
                    <a href='https://www.facebook.com/profile.php?id=100088493269622' target="_blank"><FaYoutube style={{ color: '#ff0000', fontSize: '34px' }} /></a>
                  </div>
                  <div style={{ padding: '10px', transition: 'background-color 0.3s', borderRadius: '50%' }}>
                    <a href='https://www.facebook.com/profile.php?id=100088493269622' target="_blank"><FaTwitter style={{ color: '#ff0000', fontSize: '34px' }} /></a>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}> {/* Handle form submission */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginTop: '-750px', alignItems: 'center', marginLeft: '500px' }}>
                <div className="input-group flex-nowrap" style={{ width: '400px' }}>
                  <input value={name} onChange={onNameChange} style={{ width: '100%', height: '40px', borderRadius: '5px', border: '1px solid #ccc', padding: '10px', boxSizing: 'border-box' }} type="text" className="form-control" placeholder="Full Name" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
               
                <div className="input-group flex-nowrap" style={{ width: '400px' }}>
                  <span className="input-group-text" style={{ width: '150px', borderRadius: '5px', border: '1px solid #ccc', padding: '10px', boxSizing: 'border-box' }}>Your Message</span>
                  <textarea value={message} onChange={onMessageChange} className="form-control" aria-label="With textarea" style={{ width: '100%', height: '100px', borderRadius: '5px', border: '1px solid #ccc', padding: '10px', boxSizing: 'border-box' }}></textarea>
                </div>

                <button
                  type="submit" 
                  style={{
                    color: 'white',
                    fontWeight: 'bolder',
                    fontSize: '1.2em',
                    borderRadius: '20px',
                    backgroundColor: '#007bff',
                    transition: 'background-color 0.3s ease',
                    border: 'none',
                    padding: '10px 20px',
                    width: '300px',
                    marginTop: '30px'
                  }}
                  className="btn btn-info"
                  onMouseOver={(e) => { e.target.style.backgroundColor = "#0a1633" }}
                  onMouseOut={(e) => { e.target.style.backgroundColor = "#007bff" }}
                  
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
