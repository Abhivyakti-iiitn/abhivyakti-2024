import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import "../css/mainPage.css"
import Svg from './SVG';
// import logo from "../assets/EventPageAsst/logoPlaceHolder.svg"
import LogoComponent from './LogoComponent';
import NewContext from '../context/NewContext';
import { toast } from "react-toastify";

const toastId = "wlcmtst";

function Header(props) {
    const nav = useNavigate();

    const context = useContext(NewContext);

    const [animate, setAnimate] = useState(true);
    //Variable to control fire spark particles number. Don't increase it too much. Might crash your browser.
    const [isLoggedin, setisLoggedin] = useState(false)
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
        const isFirstLoad = sessionStorage.getItem("firstLoadDone") === "true";

        if (!isFirstLoad) {
            setTimeout(() => {
                sessionStorage.setItem("firstLoadDone", "true");
                console.log("first load");
            }, 3000);
        } else {
            setAnimate(false);
            console.log("not first load");
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
                this.opacity = Math.max(0, distanceRatio);

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

        if (window.localStorage.getItem("access_token") && context.userData) {
            // toast.success("Welcome Back!");
            setisLoggedin(true);
        } else if (window.localStorage.getItem("access_token") && !context.userData) {
            const data = context.fetchUser(window.localStorage.getItem("access_token"));
            data.then(res => {
                context.userData = res.findUser;
                if (res.success) {
                    setisLoggedin(true);
                    toast.success("Welcome Back!", {
                        toastId: toastId
                    });
                }
            }).catch(error=> {
                toast.info("You can browse the site but wont be able to register !", {
                    toastId:"info1",
                    delay:"3000"
                })
            })
        }

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
                    <div className={animate ? "left leftAnimation" : "left"}>
                        <ul>
                            <LogoComponent />
                            <li><div></div></li>
                            <li onClick={() => window.open("https://www.instagram.com/abhivyakti_iiitn/", '_blank', 'noopener,noreferrer')}><i className="fa-brands fa-instagram"></i></li>
                            <li onClick={() => window.open("https://www.linkedin.com/in/abhivyakti-iiitn/", '_blank', 'noopener,noreferrer')}><i className="fa-brands fa-linkedin"></i></li>
                            {/* <li><i className="fa-brands fa-facebook"></i></li> */}
                        </ul>
                    </div>
                    <div className={animate ? "right rightAnimation" : "right"}>
                        <ul>
                            {!isLoggedin && <li onClick={() => nav('/login')}>Login</li>}
                            {isLoggedin && <li onClick={() => nav('/profile')}>Profile</li>}
                            <li onClick={() => document.querySelector('.horizontalScroll').scrollIntoView(1)}> ABOUT</li>
                            <li onClick={() => nav('/allevents')}>EVENTS</li>
                            <li onClick={() => nav('/teams')}>TEAM</li>
                            <li onClick={() => document.querySelector('.footer').scrollIntoView(0)}>CONTACT</li>
                        </ul>
                    </div>
                </div >
                <div className={animate ? "mid midAnimation" : "mid"}>
                    <h1>ABHIVYAKTI <br></br><div className='year'> 2024</div></h1>
                    <h2>Strive For Stardom</h2>
                </div>
            </div >
        </>
    )
}

export default Header
