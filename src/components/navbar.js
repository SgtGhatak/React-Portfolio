import React, { Component } from "react";
import './navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="Navbar">
                <ul>
                    <a className="github-logo" href="https://github.com/SgtGhatak">
                        <div class="github-image">
                            <img src={require("../images/GitHub-Mark-Light-120px-plus.png")} alt="GitHub logo goes here" />
                        </div>
                    </a>
                </ul>
                <ul>
                    <li>
                        <a className="Home" href='/'>Home</a>
                    </li>
                    <li>
                        <a className="About" href='/pages/about.js'>About</a>
                    </li>
                    <li>
                        <a className="Contact" href='/pages/contact.js'>Contact </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;