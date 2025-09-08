import React from 'react';
import '../styles/Home.css';
import sampleVideo from '../assets/sample-video.mp4';

function Home() {
  return (
    <div className="home-container">
      <div className="home-left" data-aos="fade-right">
        <h1>Welcome to Kalakadian English Hub</h1>
        <p>Empower yourself with world-class English learning. Master the language with confidence and achieve your goals.</p>
        <button className="cta-button">Start Learning with Confidence</button>
      </div>
      <div className="home-right" data-aos="fade-left">
        <video src={sampleVideo} autoPlay loop muted playsInline></video>
      </div>
    </div>
  );
}

export default Home;
