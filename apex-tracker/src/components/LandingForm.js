import React, { useState } from "react";

import Nav from "./Nav";

const Landing = (props) => {
    const [player, setPlayer] = useState({
        platform: "",
        username: ""
    })

    const handleChanges = e => {
        setPlayer({
            ...player,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit = e => {
        e.preventDefault();
        props.history.push({
            pathname: "/player",
            state: {
                platform: player.platform,
                username: player.username
            }
        })
        setPlayer({
            platform: "",
            username: ""
        })
    };

    return (
        <div className="landing-page-main">
            <Nav />
            <div className="bottom-contain">
                <div className="form-contain">
                    <h3>Welcome to Apex Legends Player Stats Tracker</h3>
                    <form onSubmit={onSubmit}>
                        <label className="label-name">Select a Platform</label>
                        <br />
                        <select name="platform" id="platform" onChange={handleChanges} className="select-box">
                            <option value="">Platform</option>
                            <option value="psn">PS4</option>
                            <option value="xbl">Xbox One</option>
                            <option value="origin">PC</option>
                        </select>
                        <br />
                        <label className="label-name">Player Username</label>
                        <br />
                        <input
                            type="text"
                            placeholder="Player Name"
                            name="username"
                            onChange={handleChanges}
                            className="input-box"
                        />
                        <br />
                        <button className="landing-button" type="submit">Search for Player Stats</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Landing;