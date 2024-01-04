import React, { useRef, useEffect, useState } from 'react';
import '../css/VideoPlayerDesktop.css';

const VideoPlayerDesktop = ({ videoSource }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const video = videoRef.current;

    const handleCanvasDraw = () => {
      if (!video.paused && !video.ended) {
        ctx.drawImage(
          video,
          0,
          0,
          video.videoWidth,
          video.videoHeight,
          0,
          0,
          canvas.width,
          canvas.height
        );
        requestAnimationFrame(handleCanvasDraw);
      }
    };

    video.addEventListener("play", handleCanvasDraw);

    return () => {
      video.removeEventListener("play", handleCanvasDraw);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    video.pause();
    video.currentTime = 0;
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
      <canvas ref={canvasRef} id="ambientCanvas"></canvas>
    </div>
  );
};

export default VideoPlayerDesktop;
