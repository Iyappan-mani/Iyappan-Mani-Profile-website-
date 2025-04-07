import React from 'react';
import './css/NameScetion.css';
import Typewriter from 'typewriter-effect';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiDownload } from 'react-icons/fi';

const NameScetion = () => {
  return (
    <div
      className='d-flex flex-column-reverse flex-lg-row'
      style={{
        height: '100vh',
        width: '100%',
        paddingLeft: 40,
        paddingRight: 40,
        gap: 20,
        background: 'linear-gradient(to right, #BBF7D1, #BFDCFE)',
      }}
    >

        <div
          className='text-container text-sm-center text-lg-start'
          style={{ width: '100%', paddingTop: '5%', textAlign: 'center', flex: 1 }}
        >
          <h1 className='name mt-lg-5'>Hello, I'm Iyappan Mani</h1>
          <div className='name1'>
            <Typewriter
              options={{
                strings: ['Frontend Developer', 'React Native', 'React JS'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p style={{ color: 'GrayText', fontWeight: '400' }}>
            Building apps with React & React Native
          </p>

          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginTop: '30px',
            }}
          >
            <Button onClick={() => { }} className='hireme'>
              Hire Me
            </Button>
            <Button onClick={() => { }} className='Resume'>
              Resume <FiDownload size={13} style={{ marginLeft: 5 }} />
            </Button>
          </div>
        </div>

        <div
          className='image-container '
          style={{
            width: '100%',
            maxWidth: '600px',
            paddingLeft: '5%',
            paddingTop: '5%',
            textAlign: 'center',
            flex: 1,
          }}
        >
          <img src={require('../image/pic.png')} alt='Brand Logo' width='100%' height='auto' />
        </div>
  
    </div>
  );
};

export default NameScetion;
