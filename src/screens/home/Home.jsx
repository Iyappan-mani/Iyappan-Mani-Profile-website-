
import React from 'react'
import Header from '../../component/Header'
import NameScetion from '../../component/NameScetion'
import './Home.css'
const Home = () => {
    return (
        <div className="home-scrollable-container">
            <Header />
            <NameScetion/>
            <div style={{height:400}}></div>
        </div>
    )
}

export default Home  