import React from 'react'
import './css/NameScetion.css';
import Typewriter from 'typewriter-effect';
import { Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { BiDownload } from 'react-icons/bi';
import { FiDownload } from 'react-icons/fi';


const NameScetion = () => {
  return (
    <div style={{ height: 700, width: '100%', paddingLeft: 40,paddingRight:40, gap: 10, display: 'flex', background: 'linear-gradient(to right, #BBF7D1, #BFDCFE)', flexDirection: 'row' }}>
      <div style={{ height: '100%', width: '50%', }}>
        <h1 className='name'>Hello, I'm Iyappan Mani</h1>
        <div className='name1'>
          <Typewriter
            options={{
              strings: ['Frontend Developer', 'React Native', 'React JS'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p style={{ color: 'GrayText', fontWeight: '400' }}>Building apps with React & React Native</p>

        <div style={{ flexDirection: 'row', display: 'flex',marginTop:'30px' }}>
          <Button onClick={() => { }} className="hireme">
            Hire Me
          </Button>
          <Button onClick={() => { }} className="Resume">
            Resume <FiDownload size={13} style={{marginLeft:5}} />
          </Button>
        </div>

      </div>
      <div style={{ height: '100%', width: '50%', backgroundColor: 'red' }}>

      </div>
    </div>
  )
}

export default NameScetion