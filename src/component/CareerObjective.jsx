
import React from 'react'
import './css/CareerObjective.css';

const CareerObjective = () => {
  return (
    <div>
      {/* scetion 1 */}
      <div className='d-flex flex-column  flex-lg-row pt-lg-5 pt-sm-2' style={{ padding: '20px' }}>
        <div className='text-container pe-lg-5' style={{ width: '100%', flex: 1 }} >
          <h3 className='title mt-3'>React Native & React Developer | <br /> Building Scalable and Intuitive Mobile and Web Apps</h3>
          {/* <div style={{ width: '100%', height: 1.3, marginTop: 10, backgroundColor: 'rgb(231, 235, 252)' }}></div> */}
          <p className='mt-4' style={{ textAlign: 'justify' }}>Hi, I’m Iyappan, a React Native developer with 3 years of experience in crafting high-performance mobile applications for both iOS and Android platforms. I specialize in creating fast, scalable, and intuitive apps using modern tools such as React Native, Redux, Firebase, GitHub, and React.js.</p>
          <p className='mt-3' style={{ textAlign: 'justify' }}>My expertise extends beyond mobile development, as I also have experience with React.js, enabling me to build dynamic and responsive web applications. I focus on delivering seamless user experiences, with a strong emphasis on code quality, performance optimization, and staying up-to-date with the latest technologies. Whether developing mobile apps or web solutions, I aim to create products that meet both user and business needs.</p>
          <p className='mt-3' style={{ textAlign: 'justify' }}>If you’re looking for a developer who is passionate about creating standout apps and web experiences, let’s connect!</p>
        </div>
        <div
          className='image-container p-lg-4'
          style={{
            width: '100%',
            maxWidth: '600px',
            textAlign: 'center',
            flex: 1,
          }}
        >
          <img src={require('../image/react.png')} alt='Brand Logo' width='100%' height='auto' />
        </div>
      </div>

      {/* scetion 2 */}









    </div>
  )
}

export default CareerObjective