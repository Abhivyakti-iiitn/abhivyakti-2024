import React from 'react';
import { Helmet } from 'react-helmet';
import '../../css/head.css';
import A from '../../assets/EventPageAsst/A.png';

function Head() {
  return (
    <div>
      <Helmet>
        <link
          href="https://db.onlinewebfonts.com/c/5dec1e12a2de089d8e76f394843834cb?family=Carta+Marina+W00+Regular"
          rel="stylesheet"
        />
      </Helmet>
      <img className='A' src={A}></img>
      <div className='headinga'>ABHIVYAKTI</div>
    </div>
  );
}

export default Head;
