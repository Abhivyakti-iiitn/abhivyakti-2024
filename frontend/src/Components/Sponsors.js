// components/Sponsors.js
import React from 'react';
import SponsorSection from './SponsorSection';
import data from '../assets/data'; // Ensure correct path
import "../scss/Sponsors.scss";

const Sponsors = () => {
  return (
    <div className="sponsors">
      <h2>Our Sponsors</h2>
      <SponsorSection title="Title Sponsors" sponsors={data.titleSponsors} />
      <SponsorSection title="Co-Sponsors" sponsors={data.coSponsors} />
      <SponsorSection title="Powered By" sponsors={data.poweredBy} />
      <SponsorSection title="Event Sponsors" sponsors={data.eventSponsors} />
    </div>
  );
};

export default Sponsors;
