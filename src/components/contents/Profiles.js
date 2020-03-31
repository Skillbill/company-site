import React from "react"
import totoProfilePicture from "../../images/profiles/toto.jpeg"
import defaultProfilePicture from "../../images/profiles/profile-picture-default.png"
import "./content.css"


export default () => {
    return (
        <div class="profiles">
            <h2>Profiles</h2>
            <p>
                Some of us agreed to write a small profile ot them here. We are proud to work with them and here you can have a look of our colleagues. You can see them in a random order.
            </p>

            <div class="profile">
                <p class="name-nickname">Antonio Castaldi - Toto</p>
                <img src={totoProfilePicture} alt="toto profile" class="profile-picture"></img>
                <p class="bio">Father, Software Engineer, Sportsman. HRM, Software architect/developer. I like to play and train</p>
                <ul class="socials">
                    <li><a href="https://github.com/toto-castaldi">Git Hub</a></li>
                    <li><a href="http://www.linkedin.com/in/antoniocastaldi">Linkedin</a></li>
                </ul>
            </div>

            <div class="profile">
                <p class="name-nickname">Dev 1</p>
                <img src={defaultProfilePicture} alt="profile" class="profile-picture"></img>
                <p class="bio">Dev 1</p>
                <ul class="socials">
                    <li><a href="https://github.com/dev">Git Hub</a></li>
                </ul>
            </div>
            
            <div class="profile">
                <p class="name-nickname">Dev 2</p>
                <img src={defaultProfilePicture} alt="profile" class="profile-picture"></img>
                <p class="bio">Dev 2</p>
                <ul class="socials">
                    <li><a href="https://github.com/dev">Git Hub</a></li>
                </ul>
            </div>
        </div>
    )
}