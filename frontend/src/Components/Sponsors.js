// components/Sponsors.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SponsorSection from './SponsorSection';
import data from '../assets/data'; // Ensure correct path
import "../scss/Sponsors.scss";
// import "../css/SponsorsNew.css";
// import logo from "../assets/EventPageAsst/Glow-icon.svg"
// import iiitn from "../assets/EventPageAsst/IIITNLogo.png"

const Sponsors = () => {
  const sponsorData = {
    "Education Partner": "gb",
    "Travel Partner": "emt",
    "Hospitality Partner": "fhq",
    "Protein Partner": "mp",
    "Nutrition Partner": "ynw",
    "Smartphone partner": "vivo",
    "Electronics Partner": "mw",
    "Travel Partner": "ab",
    "Audio Partner": "zeb",
    "Consultancy Partner": "siuk",
    "Eyewear Partner": "lk",
    "Anime Partner": "cc",
    "Radio Partner": "rc",
    "Marketing Partner": "km",
    "Station Partner": "sg",
    "Community Partner": "iiit",
    "Music Partner": "saregama",
  };

  return (
    <div className="sponsors">
      <h2>Our Sponsors</h2>
      <SponsorSection title="Title Sponsors" sponsors={data.titleSponsors} />
      <SponsorSection title="Co-Sponsors" sponsors={data.coSponsors} />
      <SponsorSection title="Powered By" sponsors={data.poweredBy} />
      <SponsorSection title="Associate Sponsor" sponsors={data.associateSponsor} />
      <SponsorSection title="Event Sponsors" sponsors={data.eventSponsors} />
    </div>
  );
};

export default Sponsors;
