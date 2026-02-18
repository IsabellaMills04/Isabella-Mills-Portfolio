import React from 'react'
import '../styles/Home.css'
import Isabella from '../assets/isabella.jpg'

function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <div className="leftSide">
          <h1>Welcome</h1>
          <p>to my portfolio!</p>
        </div>
        <div className="rightSide">
          <img src={Isabella}/>
        </div>
      </div>
    </div>
  )
}

export default Home
