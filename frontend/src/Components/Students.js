import React from 'react'
import { useEffect } from 'react';
import '../css/Students.css';
import data from "../assets/teamsdata.json";
import clubs from "../assets/clubdata.json";
import Footer from './Footer';
import StickyHeader from './StickyHeader';
import shashank from '../assets/students/shashank.jpg'
import sahil from '../assets/students/sahil.png'
import adit from '../assets/students/adit.jpg'
import aditya from '../assets/students/aditya.jpg'
import supratit from '../assets/students/supratit.jpg'
import harsh from '../assets/students/harsh.jpg'
import jaivardhan from '../assets/students/jaivardhan.jpg'

const Students = () => {
    const teams = data.teams;
    useEffect(() => {
        document.querySelector(".scroll_student").scrollIntoView(1);
    }, [])
    return (
        <div className='scroll_student'>
            <StickyHeader />
            <div className='Students'>
                <fieldset>
                    <legend>
                        Website Contributors
                    </legend>
                </fieldset>

                <div className='orgteamcat'>
                    <div className="org_content">
                        <div className="team_content">
                            <div className='team_item'>
                                <img src={shashank} />
                                <h3>
                                    Shashank Tripathi
                                    <a href='https://github.com/ShashankIIITN' target='_blank'>
                                        <i class="fa-brands fa-github fa-xs"></i>
                                    </a>
                                </h3>
                                <h5>Lead</h5>
                            </div>
                            {/* <div className='team_item'>
                            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAACvr6/p6en19fXf39++vr57e3s/Pz/x8fHU1NRTU1P8/PykpKTExMSAgICKiopvb29OTk4gICDMzMwlJSWbm5uQkJAPDw+rq6teXl62trZDQ0MaGho0NDTR0dEtLS1nZ2fV4zZcAAADhUlEQVR4nO3cibKiMBAFUMMqqIgLT3B///+TUwyFOiqSxkCnmXu+oG8BTUISJhMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgE8WB4zhBHHEX0gu3WOWqlq8Kl7sgs7xgr57tgzl3WeYcpi/5StMDd2GG+LO3+Uozn7s4E4rGfKWCu7zvrT4GVGrFXeCX5s13aG0vuuHMX1voyCKGGgGVCrnL7G6hFVCpBXehXcWaAZWKuUvt6Kid8CjzUXS0AyrlcBfbSd4e7CbnLrYLyiWUeRHfj7abTLnLpdNvpBV57fSHmPCHu2CyNTHhmrtgqmhDTLiR9vGG+hjKexATcsKEu2SizzP7d6TN9qmtVF4z3ZET7rhLJhp/Qt3J7520aXBAThhwl0w0/vehS5kdlnJxSzX6nzAqR+6CyVJiwpS7YLItMeGWu2C6jBQw4y63A9q4TdqYreSREnrc5XZBGbhJG7JVvJN2wJPIS0gZuUkbsd0sNQMuuQvtzNP74LaWuS7zl3vWCHgWNyJ95La/9zPRASeTqO0qnqV9J331ebvJSvAzeHNo/vy9Gcm+r6hpJpXKv0Nrfvp6HTep8BbzxAvCx5CnMBA6UPvITRa7ZbjcLZJxXT0AAAD4v8xdP75cLrHvjm/E5m2LcJ09nHvK1mGxHUtOL0mvDbOna5qITxkFvx+n+Er9HiSHvIQ6K8F5KG2Buxa0n5epzSR+9A6Ie4SlZYypy/hKHSXdq57eaaBnoZiek1B3mtRyGbdqxwso5zL6tA7zbGr9uVn63uBnlt+p9C2Jr6zepEjdCPWexdujdFe121i76m0qoLURzdyiFStvVBNN5s7CdvP9a+Jf1h0w8Q0HVMqyV79Hn0u0Odo1gDPXRu+saqimH8KKRY+iRz1sqCez5z7t4x4tWXOfmu+jNVv6qf43NaoZd7QK9dwBhR1nFKintimsOOHd5yW04yLq/Cipuz13vD4baYW/nZqcFb7DPlP0mtYGTblyD2z67TMl7l7zzQduPcz/Opvrn/zp6sS7E5x+oJmOd9WN/nMIOt6jif0Nuu94h98DBFSKM2DfA5oK57DmMEhCzmMnQzQa3lbT9gtdMzh/xPvdirYuzv/x9T+iKW0YEw4SUCm+cRvtpwLd8R1xcwdKyHdMapgXPucrPyqcQYznICYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAF/gCjJCphADpLTwAAAABJRU5ErkJggg==' />
                            <h3>
                            Mangalam Raj 
                                    <a href='https://github.com/mangalamraj' target='_blank'>
                                        <i class="fa-brands fa-github fa-xs"></i>
                                    </a>
                                </h3>
                            <h5>Helper</h5>
                        </div> */}
                            <div className='team_item'>
                                <img src={sahil} />
                                <h3>
                                    Sahil Mandi
                                    <a href='https://github.com/sahil-tgs' target='_blank'>
                                        <i class="fa-brands fa-github fa-xs"></i>
                                    </a>
                                </h3>
                                <h5>Co Lead</h5>
                            </div>
                        </div>
                    </div>

                    <div className='contributors'>
                        <div className='org_content'>
                            <div className='team_content'>
                                <div className='team_item'>
                                    <img src={adit} />
                                    <h3>
                                        Adit Shriyans
                                        <a href='https://github.com/adit-shriyans' target='_blank'>
                                            <i class="fa-brands fa-github fa-xs"></i>
                                        </a>
                                    </h3>
                                    <h5>Contributor</h5>
                                </div>
                                <div className='team_item'>
                                    <img src={aditya} />
                                    <h3>
                                        Aditya Bhivgade
                                        <a href='https://github.com/Adimaniac31' target='_blank'>
                                            <i class="fa-brands fa-github fa-xs"></i>
                                        </a>
                                    </h3>
                                    <h5>Contributor</h5>
                                </div>
                                <div className='team_item'>
                                    <img src={supratit} />
                                    <h3>
                                        Supratit Datta
                                        <a href='https://github.com/SupratitDatta' target='_blank'>
                                            <i class="fa-brands fa-github fa-xs"></i>
                                        </a>
                                    </h3>
                                    <h5>Contributor</h5>
                                </div>
                                <div className='team_item'>
                                    <img src={harsh} />
                                    <h3>
                                        Harsh Kasana
                                        <a href='https://github.com/harshkas4na' target='_blank'>
                                            <i class="fa-brands fa-github fa-xs"></i>
                                        </a>
                                    </h3>
                                    <h5>Contributor</h5>
                                </div>
                                <div className='team_item'>
                                    <img src={jaivardhan} />
                                    <h3>
                                        Jaywardhan Patil
                                        <a href='https://github.com/jayshiai' target='_blank'>
                                            <i class="fa-brands fa-github fa-xs"></i>
                                        </a>
                                    </h3>
                                    <h5>Contributor</h5>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <Footer/> */}
            </div>
            <Footer />
        </div>
    )
}

export default Students