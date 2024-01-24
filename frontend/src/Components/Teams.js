import React from 'react';
import StickyHeader from './StickyHeader';
import "../css/teams.css";
import data from "../assets/teamsdata.json";
import clubs from "../assets/clubdata.json";
import Footer from './Footer';

function Teams() {
    const secretaries = data.secretaries;
    const coordinators = data.coordinators;
    const teams = data.teams;

    return (
        <div className='teams'>
            <StickyHeader type={2} />
            <div className="liner heading">
                <div className="line"></div>
                <h1>TEAMS</h1>
                <div className="line"></div>
            </div>
            <div className="liner">
                <div className="line"></div>
                <h1>Organizing Team SAC</h1>
                <div className="line"></div>
            </div>
            <div className="orgteamcat">
                <div className="org_content">
                    <h3>MENTOR</h3>
                    <div className="lineteams"></div>
                    <div className="team_content">
                        <div className="team_item">
                            <h3>Dr. Pooja Jain</h3>
                        </div>
                    </div>
                </div>
                <div className="org_content">
                    <h3>SECRETARIES</h3>
                    <div className="lineteams"></div>
                    <div className="team_content">
                    {secretaries.map((el, ind) =>
                            <div key={ind} className="team_item">
                                <h3>{el.name}</h3>
                                <h5>{el.position}</h5>
                            </div>
                        )}
                    </div>
                </div>
                <div className="org_content">
                    <h3>COORDINATORS</h3>
                    <div className="lineteams"></div>
                    <div className="team_content">
                        {coordinators.map((el, ind) =>
                            <div key={ind} className="team_item">
                                <h3>{el.name}</h3>
                                <h5>{el.position}</h5>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="liner">
                <div className="line"></div>
                <h1>Clubs</h1>
                <div className="line"></div>
            </div>
            <div className="orgteamcat">
                {Object.keys(clubs).map((key) => {
                    return <div key={key} className="org_content">
                        <h3>{key.toUpperCase()}</h3>
                        <div className="lineteams"></div>
                        <div className="team_content">
                            <div className="team_item">
                                <h3>{clubs[key].clubHead}</h3>
                                <h5>Lead</h5>
                            </div>
                            {clubs[key].clubCoLead !== "" && <div className="team_item">
                                <h3>{clubs[key].clubCoLead}</h3>
                                <h5>{clubs[key].clubCoLead === "Vinay Badlani" ? 'Lead' : 'Co-Lead'}</h5>
                            </div>}
                        </div>
                    </div>
                })}
            </div>
            <div className="liner">
                <div className="line"></div>
                <h1>Teams</h1>
                <div className="line"></div>
            </div>
            <div className="orgteamcat" style={{ paddingBottom: '3rem' }}>
                {Object.keys(teams).map((key, ind) => {
                    return <div key={ind} className="org_content">
                        <h3>{key.toUpperCase()}</h3>
                        <div className="lineteams"></div>
                        <div className="team_content">
                            {/* {console.log(teams[key])} */}
                            {teams[key].Lead.map((name) =>
                                <div key={name} className="team_item">
                                    <h3>{name}</h3>
                                    <h5>Lead</h5>
                                </div>

                            )}
                            {teams[key]["Co-Lead"].map((name) =>
                                <div key={name} className="team_item">
                                    <h3>{name}</h3>
                                    <h5>Co-Lead</h5>
                                </div>
                            )}

                        </div>
                    </div>
                })}
            </div>
            <Footer />
        </div>
    )
}

export default Teams