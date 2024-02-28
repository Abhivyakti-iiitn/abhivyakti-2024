// components/Sponsors.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SponsorSection from './SponsorSection';
import data from '../assets/data'; // Ensure correct path
// import "../scss/Sponsors.scss";
import "../css/SponsorsNew.css";
import logo from "../assets/EventPageAsst/Glow-icon.svg"
import iiitn from "../assets/EventPageAsst/IIITNLogo.png"

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

  const navigateTo = useNavigate();

  return (
    <div className="sponsors">
      <div className='sponsors__img-top'>
        <img src={iiitn} className='sponsors__logo' onClick={()=>window.open('https://iiitn.ac.in/','_blank')} />
        <div className='sponsors__top'>
          <SponsorSection title="Powered By" name="hp" up={true} fs={'1.5vw'} mt={'20vh'} h={'2.5vw'} />
          <SponsorSection title="Co-Sponsor" name="sbi" up={true} fs={'1.75vw'} mt={'10vh'} h={'3vw'} />
          <SponsorSection title="Title Sponsor" name="madeats" up={true} fs={'2vw'} mt={'1vh'} h={'9vw'} />
          <SponsorSection title="Associate Sponsor" name="vedicvalley" up={true} fs={'1.5vw'} mt={'12vh'} h={'4vw'} />
        </div>
        <img src={logo} className='sponsors__logo-evt' onClick={() => navigateTo('/home')} />

      </div>
      <div className='sponsors__text'>
        <div className='sponsors__heading'>
          ABHIVYAKTI
        </div>
        <div className='sponsors__year'>
          2024
        </div>
        <div className='sponsors__tag'>
          Strive for Stardom
        </div>
        <div className='sponsors__date'>
          29<sup>th</sup> Feb - 1<sup>st</sup> Mar '24
        </div>
      </div>
      <div className='sponsors__img-bottom'>
      {Object.entries(sponsorData).map(([title, name]) => (
          <SponsorSection key={title} title={title} name={name} up={false} h={'2.5vw'} />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
