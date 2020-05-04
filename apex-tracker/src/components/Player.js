import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

import Nav from "./Nav";

const Player = (props) => {
    const [allInfo, setAllInfo] = useState([]);
    const [lifetime, setLifetime] = useState({});
    const [legendName, setLegendName] = useState({})
    const [legendStats, setLegendStats] = useState({})
    const [secondLeg, setSecondLeg] = useState({});
    const [secondLegStats, setSecondLegStats] = useState({});

    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://public-api.tracker.gg/v2/apex/standard/profile/${props.location.state.platform}/${props.location.state.username}`, {
            headers: {
                "TRN-Api-Key": "57f6df6c-eeca-4023-a6c0-37d49b82dade",
                "Accept": "application/json",
                // "Accept-Encoding": "gzip" 
            }
        })
            .then(res => {
                console.log("console log", res.data)
                setAllInfo(res.data.data.platformInfo)
                setLifetime(res.data.data.segments[0].stats.seasonWins)
                setLegendName(res.data.data.segments[1].metadata)
                setLegendStats(res.data.data.segments[1].stats.kills)
                setSecondLeg(res.data.data.segments[2].metadata)
                setSecondLegStats(res.data.data.segments[2].stats.seasonKills)
            })
            .catch(error => {
                console.log("Something went wrong!", error)
            })
    }, [props.location.state.platform, props.location.state.username])



    // console.log("legendStats", legendStats)

    // API KEY - 57f6df6c-eeca-4023-a6c0-37d49b82dade

    return (
        <div className="main-contain">
            <Nav />
                <div className="bg-color">
                    <div className="player-info">
                        {/* <h3>Platform - {allInfo.platformSlug}</h3> */}
                        <img alt="player avatar" className="player-img" src={allInfo.avatarUrl} />
                        <h3 className="player-name">{allInfo.platformUserHandle}</h3>
                    </div>
                    <div className="stats-contain">
                        <h4>Wins - {lifetime.value}</h4>
                        <h4>Percentile - {lifetime.percentile}%</h4>
                        <h4>Rank - {lifetime.rank}</h4>
                    </div>
                    <div className="legend-stats">
                        <div className="legend-cards2">
                            <h4 className="title">{legendName.name}</h4>
                            <img className="legend-pic" alt="pic of selected legend" src={legendName.imageUrl} />
                            <div className="inside-div-legend2">
                                <h4>Kills - {legendStats.displayValue}</h4>
                                <h4>Percentile - {legendStats.percentile}</h4>
                            </div>
                        </div>
                        <div className="legend-cards2">
                            <h4 className="title">{secondLeg.name}</h4>
                            <img className="legend-pic" alt="pic of selected legend" src={secondLeg.imageUrl} />
                            <div className="inside-div-legend2">
                                <h4>Kills - {secondLegStats.displayValue}</h4>
                                <h4>Percentile - {secondLegStats.percentile}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="button-contain">
                        <Link to="/">
                            <button className="player-button">Search for another Player</button>
                        </Link>
                    </div>
                </div>
        </div >
    )
};

export default Player;