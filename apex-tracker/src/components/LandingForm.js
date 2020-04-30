import React, {useState} from "react";

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
        <div>
            <h3>Welcome to Apex Legends Player Stats Tracker</h3>
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
    )
};

export default Landing;