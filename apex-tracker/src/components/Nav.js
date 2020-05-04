import React from "react";
import ApexLogo from "../images/apex-logo.png"

const Nav = () => {
    return (
        <nav>
            <a className = "logo-pic" href="/"><img alt="apex logo" className="apex-logo" src={ApexLogo} /></a>
            <a className="portfolio" href="https://thomas-rodriguez.com/">Portfolio</a>
        </nav>
    )
};

export default Nav;