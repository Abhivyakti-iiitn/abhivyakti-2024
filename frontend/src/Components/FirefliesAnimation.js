import React, { useEffect, useRef } from 'react';

const FirefliesAnimation = () => {
  const canvasRef = useRef(null);
  let c, w, h;
  let f = [];
  let mouse = {};
  let lastMouse = {};

  useEffect(() => {
    const canvas = canvasRef.current;
    c = canvas.getContext('2d');
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;

    // Initialize canvas styles
    c.fillStyle = 'rgba(30,30,30,1)';
    c.fillRect(0, 0, w, h);

    // Set up event listener for mouse movement
    canvas.addEventListener('mousemove', handleMouseMove, false);

    // Start the animation loop
    loop();

    // Cleanup event listener on component unmount
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove, false);
    };
  }, []);

  const handleMouseMove = (e) => {
    lastMouse.x = mouse.x;
    lastMouse.y = mouse.y;

    mouse.x = e.pageX - e.target.offsetLeft;
    mouse.y = e.pageY - e.target.offsetTop;
  };

  class Firefly {
    constructor() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.s = Math.random() * 2;
      this.ang = Math.random() * 2 * Math.PI;
      this.v = (this.s * this.s) / 4;
    }

    move() {
      this.x += this.v * Math.cos(this.ang);
      this.y += this.v * Math.sin(this.ang);
      this.ang += Math.random() * (20 * Math.PI) / 180 - (10 * Math.PI) / 180;
    }

    show() {
      c.beginPath();
      c.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
      c.fillStyle = '#fddba3';
      c.fill();
    }
  }

  const draw = () => {
    if (f.length < 100) {
      for (let j = 0; j < 10; j++) {
        f.push(new Firefly());
      }
    }

    for (let i = 0; i < f.length; i++) {
      f[i].move();
      f[i].show();
      if (f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h) {
        f.splice(i, 1);
      }
    }
  };

  const loop = () => {
    window.requestAnimationFrame(loop);
    c.clearRect(0, 0, w, h);
    draw();
  };

  window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    loop();
  });

  return <canvas ref={canvasRef} id="canvas" />;
};

export default FirefliesAnimation;
