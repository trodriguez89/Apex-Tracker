import React, { useState, useEffect } from "react";
import axios from "axios";

const Player = (props) => {
    const [player, setPlayer] = useState({
        platform: props.location.state.platform,
        username: props.location.state.username
    })
    const [allInfo, setAllInfo] = useState([]);
    const [lifetime, setLifetime] = useState({});

    const handleChanges = e => {
        setPlayer({
            ...player,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit = e => {
        e.preventDefault();
    };
    
    const pageInfo = useEffect(() => {
            axios.get(`https://cors-anywhere.herokuapp.com/https://public-api.tracker.gg/v2/apex/standard/profile/${player.platform}/${player.username}`, {
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
                })
                .catch(error => {
                    console.log("Something went wrong!", error)
                })
        }, [player.platform, player.username])



    // API KEY - 57f6df6c-eeca-4023-a6c0-37d49b82dade

    return (
        <div>
            <div>
                <form onSubmit={onSubmit}>
                    <label>Select a Platform</label>
                    <select name="platform" id="platform" onChange={handleChanges}>
                        <option value="">Platform</option>
                        <option value="psn">PS4</option>
                        <option value="xbl">Xbox One</option>
                        <option value="origin">PC</option>
                    </select>
                    <label>Player Username</label>
                    <input
                        type="text"
                        placeholder="Player Name"
                        name="username"
                        onChange={handleChanges}
                    />
                    <button type="submit">Search for Player Stats</button>
                </form>
            </div>
            <div>
                <h3>Player - {allInfo.platformUserHandle}</h3>
                <h3>Platform - {allInfo.platformSlug}</h3>
                <img src={allInfo.avatarUrl} />
            </div>
            <div>
                <h3>Stats</h3>
                <h4>Wins - {lifetime.value}</h4>
                <h4>Percentile - {lifetime.percentile}%</h4>
                <h4>Rank - {lifetime.rank}</h4>
            </div>
        </div>
    )
};

export default Player;