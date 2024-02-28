// src/assets/data.js
import aboutUs from "./AboutUs/about-us.svg";
import pastGlimpses1 from "./PastGlimpsesImages/1.jpg";
import pastGlimpses2 from "./PastGlimpsesImages/2.jpg";
import pastGlimpses3 from "./PastGlimpsesImages/3.jpg";
import pastGlimpses4 from "./PastGlimpsesImages/4.jpg";
import pastGlimpses5 from "./PastGlimpsesImages/5.jpg";
import pastGlimpses6 from "./PastGlimpsesImages/6.jpg";
import speaker1 from "./speakers/speaker1.svg";
import hp from './sponsors/hp.jpg';
import sbi from './sponsors/sbi.png';
import madeats from './sponsors/madeats.jpg';
import vedicvalley from './sponsors/vedicvalley.jpg';
import gb from './sponsors/gb.jpg';
import emt from './sponsors/emt.png';
import fhq from './sponsors/FuelHQ.png';
import mp from './sponsors/MaxProtein.png';
import ynw from './sponsors/ynw.png';
import vivo from './sponsors/vivo.png';
import mw from './sponsors/mw.png';
import ab from './sponsors/ab.png';
import zeb from './sponsors/zeb.png';
import siuk from './sponsors/siuk.png';
import lk from './sponsors/lk.png';
import cc from './sponsors/cc.png';
import rc from './sponsors/rc.png';
import km from './sponsors/km.png';
import sg from './sponsors/sg.png';
import iiit from './sponsors/iiit.jpg';
import saregama from './sponsors/saregama.jpg';

const data = {
  pastGlimpsesImages: [
    pastGlimpses1,
    pastGlimpses2,
    pastGlimpses3,
    pastGlimpses4,
    pastGlimpses5,
    pastGlimpses6,
  ],
  speakers: [
    {
      name: "Speaker 1",
      image: speaker1,
      info: "Speaker 1 Info",
      socialMedia: {
        twitter: "https://www.instagram.com/speaker1",
        instagram: "https://www.facebook.com/speaker1",
        linkedin: "https://www.linkedin.com/in/speaker1",
      },
    },
    {
      name: "Speaker 2",
      image: speaker1,
      info: "Speaker 2 Info",
      socialMedia: {
        twitter: "https://www.instagram.com/speaker1",
        instagram: "https://www.facebook.com/speaker1",
        linkedin: "https://www.linkedin.com/in/speaker1",
      },
    },
  ],
  aboutUs: {
    text:
      "Abhivyakti, IIIT Nagpur's annual cultural event, is a dynamic fusion of art, talent, and diversity. It provides a platform for students to express their creativity and celebrate their uniqueness. From intercollege competitions to inspiring speakers, Abhivyakti is a journey from passion to stardom. It's a path where persistence conquers obstacles, leading to a constellation of success.",
    image: aboutUs,
  },
  titleSponsors: [madeats],
  coSponsors: [sbi],
  poweredBy: [hp],
  associateSponsor: [vedicvalley],
  eventSponsors: [gb,
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
      saregama],
};

export default data;
