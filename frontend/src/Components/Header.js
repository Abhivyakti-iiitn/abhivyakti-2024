import React, { useEffect } from 'react'
import "../css/mainPage.css"
import Svg from './SVG';

function Header() {
    //Variable to control fire spark particles number. Don't increase it too much. Might crash your browser.
    const particleCount = 50;

    //mounting the fire particle effect.
    useEffect(() => {
        const canvas = document.getElementById('fireCanvas');
        const ctx = canvas.getContext('2d');
        const parent = canvas.parentElement;
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;

        function isMobile() {
            return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        }

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height;
                this.size = isMobile() ? Math.random() * 2 + 1 : Math.random() * 3 + 1;

                //speed at which the sparks float up.
                this.speedY = Math.random() * 3 + 1;

                //speed of sparks in x direction
                this.speedX = (Math.random() - 0.5) * 2;
                this.opacity = 1;
            }

            update() {
                this.y -= this.speedY;

                //you can modify below x speed to add in wind effect! 
                //this.x += this.speedX + 2; will make wind blow from left to right
                //this.x += this.speedX - 2; will make wind blow from right to left
                //change 2 to anything to set wind speed.
                //right no wind effect added.
                this.x += this.speedX;

                //this is supposed to slowly fade the particles as they rise to top.
                //but it's doesn't seem to be working
                const distanceRatio = (this.y / canvas.height);
                this.opacity = Math.max(0, distanceRatio );

                if (this.x < 0 || this.x > canvas.width) {
                    this.speedX = -this.speedX;
                }
            }

            draw() {

                //Initially i used circles for particles.
                //but to make it bit more variable we are using gradient. Thank you chatGPT.
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
                gradient.addColorStop(0, 'rgba(255, 165, 0, 1)');
                gradient.addColorStop(1, 'rgba(255, 165, 0, 0)');

                ctx.fillStyle = gradient;

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        //array that stores the particles.
        const particles = [];

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);


            //particleCount is set above. Default 200.
            if (particles.length < particleCount) {
                for (let i = 0; i < 1; i++) {
                    particles.push(new Particle());
                }
            }

            for (let i = particles.length - 1; i >= 0; i--) {
                particles[i].update();
                particles[i].draw();

                //remove particles once they are invisible
                if (particles[i].opacity <= 0) {
                    particles.splice(i, 1);
                }
            }

            requestAnimationFrame(animate);
        }

        function handleResize() {
            const parent = canvas.parentElement;
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
        }

        window.addEventListener('resize', handleResize);

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
//end of the useEffect hook

    return (
        <>
            <div className='main__header'>

                {/* canvas for displaying the fire particle effect */}
                <canvas id="fireCanvas"></canvas>

                {/* the background image rendered as SVG so that I can animate it */}
                <div className='svgContainer'>
                <Svg />
                </div>
                
                {/* ignore this :- <img id="mysvg" className="svg-background" src="./bgimg.svg" alt="Animated SVG"></img> */}


                <div div className='top' >
                    <div className="left">
                        <ul>
                            <li><div></div></li>
                            <li><i class="fa-brands fa-instagram"></i></li>
                            <li><i class="fa-brands fa-linkedin"></i></li>
                            <li><i class="fa-brands fa-facebook"></i></li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>ABOUT</li>
                            <li>EVENTS</li>
                            <li>TEAM</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>
                </div >
                <div className="mid">
                    <h1>Abhivyakti <br></br> 2024</h1>
                    <h3>tagline, tagline, tagline</h3>
                </div>
            </div >
        </>
    )
}

export default Header