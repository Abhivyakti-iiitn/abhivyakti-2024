// src/Components/MainPage.js
import React, { useEffect, useState, useContext } from "react";
import "../css/index.css";
import FirefliesAnimation from "./FirefliesAnimation";
import EventCard from "./EventCard";
import Header from "./Header";
import Event from "./EventPage/Event";
import HorizontalScrolling from "./HorizontalScrolling";
import Sponsors from "./Sponsors"; // Import the Sponsors component
import Footer from "./Footer"
import events from "../assets/EventContent.json"
import VideoPlayerDesktop from './VideoPlayerDesktop';
import VideoPlayerMobile from './VideoPlayerMobile';
import NewContext from "../context/NewContext";
import { toast } from 'react-toastify';

// const events = [
//   { name: "showstopper", tagline: "event a" },
//   { name: "beatsmithshowdown", tagline: "event b" },
//   { name: "starpod", tagline: "event c" },
//   { name: "mun", tagline: "event d" },
//   { name: "rhymeriot", tagline: "event e f" },
// ];

function animateEventCards() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("showCard");
      }
    });
  });

  const hiddenCards = document.querySelectorAll(".hiddenCard");
  hiddenCards.forEach((el) => observer.observe(el));
}

const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

function MainPage() {

  const context = useContext(NewContext);

  // console.log(events)

  const isMobile = isMobileDevice();


  const [isLoggedin, setisLoggedin] = useState(false)



  useEffect(() => {
    animateEventCards();
    if (window.localStorage.getItem("access_token") && context.userData) {
      setisLoggedin(true);
    } else if (window.localStorage.getItem("access_token" && !context.userData)){
      const data = context.fetchUser(window.localStorage.getItem("access_token"));
      if (data.success) {
        setisLoggedin(true);
      }
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      {/* <FirefliesAnimation /> */}
      <Header isLoggedin={isLoggedin} setisLoggedin={setisLoggedin} />
      <div className="blur_portion"></div>
      <div>
        {isMobile ? (
          <VideoPlayerMobile videoSource={process.env.PUBLIC_URL + '/intro.mp4'} />
        ) : (
          <VideoPlayerDesktop videoSource={process.env.PUBLIC_URL + '/intro.mp4'} />
        )}
      </div>


      <h2 className="Events__heading">Events</h2>
      <div className="EventCards">
        {/* {events.map((event, ind) => (
          ind <= 4 && <EventCard
            exploreAllEvents={false}
            imgSrc={`./assets/${event.name.replace(" ", "-")}.jpg`}
            name={event.name.replace(" ", "-")}
            desc={event.tagline}
            key={event.name.replace(" ", "-")}
          />
        ))} */}
        {Object.values(events).map((event, ind) => (
          ind <= 4 && <EventCard
            exploreAllEvents={false}
            imgSrc={`./assets/${event.name.toLowerCase().replaceAll(' ', '')}.jpg`}
            name={event.name}
            desc={event.tagline}
            key={event.name.replace(" ", "-")}
          />
        ))}
        <EventCard exploreAllEvents={true} />
      </div>
      <div className="horizontalScroll">
        <HorizontalScrolling />
      </div>
      {/* <Sponsors /> */}
      <div className='temp'>
        <h3> More Content Comming soon ...</h3>
        <p>stay tuned</p>
      </div>

      <Footer />
    </div>
  );
}

export default MainPage;
