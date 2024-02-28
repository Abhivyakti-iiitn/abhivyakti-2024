// components/SponsorSection.js
import React from 'react';
import hp from '../assets/sponsors/hp.jpg';
import sbi from '../assets/sponsors/sbi.png';
import madeats from '../assets/sponsors/madeats.jpg';
import vedicvalley from '../assets/sponsors/vedicvalley.jpg';
import gb from '../assets/sponsors/gb.jpg';
import emt from '../assets/sponsors/emt.png';
import fhq from '../assets/sponsors/FuelHQ.png';
import mp from '../assets/sponsors/MaxProtein.png';
import ynw from '../assets/sponsors/ynw.png';
import vivo from '../assets/sponsors/vivo.png';
import mw from '../assets/sponsors/mw.png';
import ab from '../assets/sponsors/ab.png';
import zeb from '../assets/sponsors/zeb.png';
import siuk from '../assets/sponsors/siuk.png';
import lk from '../assets/sponsors/lk.png';
import cc from '../assets/sponsors/cc.png';
import rc from '../assets/sponsors/rc.png';
import km from '../assets/sponsors/km.png';
import sg from '../assets/sponsors/sg.png';
import iiit from '../assets/sponsors/iiit.jpg';
import saregama from '../assets/sponsors/saregama.jpg';

const SponsorSection = ({ title, name, up, mt, fs, h }) => {
  const images = {
    hp,
    sbi,
    madeats,
    vedicvalley,
    gb,
    emt,
    fhq,
    mp,
    ynw,
    vivo,
    mw,
    ab,
    zeb,
    siuk,
    lk,
    cc,
    rc,
    km,
    sg,
    iiit,
    saregama
  };
  

  return (
    <div className="sponsor-section" style={{textAlign: 'center', height: 'fit-content'}}>
        {up && <h3 className='sponsor-section_title' style={{marginTop: mt, color:'#fff', fontSize:fs}}>{title}</h3>}
        <img className='sponsor-section_logo' src={images[name]} alt={name} style={{ height: h}} />
        {up === false && <div className='sponsor-section_title'>{title}</div>}
    </div>
  );
};

export default SponsorSection;
