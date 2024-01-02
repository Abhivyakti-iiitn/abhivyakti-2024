// src/Components/VideoPlayerDesktop.js
import React, { useRef, useState } from 'react';
import '../css/VideoPlayerDesktop.css';

const VideoPlayerDesktop = ({ videoSource }) => {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);
  
    const handleMouseEnter = () => {
      videoRef.current.play();
    };
  
    const handleMouseLeave = () => {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    };
  
    const handleVideoClick = () => {
      const video = videoRef.current;
      video.muted = !isMuted;
      setIsMuted(!isMuted);
      video.play().catch((error) => {
        console.error('Autoplay failed:', error);
      });
    };
  
    return (
      <div
        className="video-player"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video ref={videoRef} autoPlay muted loop controls onClick={handleVideoClick}>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  
  export default VideoPlayerDesktop;
