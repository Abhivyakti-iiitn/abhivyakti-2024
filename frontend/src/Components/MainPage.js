// src/Components/MainPage.js
import React, { useEffect, useState } from "react";
import "../css/index.css";
import {useNavigate} from "react-router-dom"
import FirefliesAnimation from "./FirefliesAnimation";
import EventCard from "./EventCard";
import Header from "./Header";
import Event from "./EventPage/Event";
import HorizontalScrolling from "./HorizontalScrolling";
import Sponsors from "./Sponsors"; // Import the Sponsors component
import Footer from "./Footer"
import events from "../assets/EventDetails.json"
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
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("showCard");
      }
    });
  });

  const hiddenCards = document.querySelectorAll(".hiddenCard");
  hiddenCards.forEach((el) => observer.observe(el));
}

function MainPage() {

  const navigateTo = useNavigate()

  const [isLoggedin, setisLoggedin] = useState(false)

  useEffect(() => {
    animateEventCards();
    if (localStorage.getItem("usrName")) {
      // setisLoggedin(true);
    }
  }, []);

  return (
    <div className="App">
      {/* <FirefliesAnimation /> */}
      <Header />
      <h2 className="Events__heading">Events</h2>
      <div className="EventCards">
        {events.map((event, ind) => (
          ind <= 4 && <EventCard
            exploreAllEvents={false}
            imgSrc={`./assets/${event.name.replace(" ", "-")}.jpg`}
            name={event.name.replace(" ", "-")}
            desc={event.tagline}
            key={event.name.replace(" ", "-")}
          />
        ))}
        <EventCard exploreAllEvents={true} />
      </div>
      <div className="horizontalScroll">
        <HorizontalScrolling />
      </div>
      <Sponsors />
      <Footer />
    </div>
  );
}

export default MainPage;
