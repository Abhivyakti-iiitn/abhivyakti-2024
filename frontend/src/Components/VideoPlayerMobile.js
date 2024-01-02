// src/Components/VideoPlayerMobile.js
import React, { useRef, useEffect, useState } from 'react';
import '../css/VideoPlayerMobile.css';

const VideoPlayerMobile = ({ videoSource }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const mobileVideo = videoRef.current;
    let isVideoInViewport = false;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVideoInViewport = true;
          if (mobileVideo.paused) {
            mobileVideo.play().catch((error) => {
              console.error('Autoplay failed:', error);
            });
          }
        } else {
          isVideoInViewport = false;
          mobileVideo.pause();
          mobileVideo.currentTime = 0;
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust as needed
    });

    observer.observe(mobileVideo);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleVideoClick = () => {
    const mobileVideo = videoRef.current;
    mobileVideo.muted = !isMuted;
    setIsMuted(!isMuted);

    if (mobileVideo.paused) {
      mobileVideo.play().catch((error) => {
        console.error('Play failed:', error);
      });
    } else {
      mobileVideo.pause();
      mobileVideo.currentTime = 0;
    }
  };

  return (
    <div className="video-player-mobile" onClick={handleVideoClick}>
      <video ref={videoRef} autoPlay muted loop playsInline>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayerMobile;
