import React from "react";
import './Landing.css';

export default function Landing() {


    return (
        <div className="landingHeader">
            
            <h2 className="landingH2">ADOPT, DON'T SHOP.</h2>
            <img className="landingHeadImg" src="./images/petadopt.jpeg" alt="adopted dog"/>
            
            <div className="landingCards">
                <img className="landingH3Img" src="./images/shelterdog.jpg" alt="shelter dog"/>
                <h3 className="landingH3">Connecting you to local shelters!</h3>
            </div>
            <div className="landingCards">    
                <img className="landingH3Img" src="./images/bestfriend.jpg" alt="adopted dog"/>
                <h3 className="landingH3">Easily matching you to your new best friend!</h3>
            </div>

            <ul className="landingList">
                <li className="landingItem"><img className="landingIcon" src="./images/signup.png" alt="signup"/>Sign up for an account</li>
                <li className="landingItem"><img className="landingIcon" src="./images/swipe2.png" alt="swipe"/>Swipe through available pets</li>
                <li className="landingItem"><img className="landingIcon" src="./images/save.png" alt="save"/>Save and view pets that you are interested in</li>
                <li className="landingItem"><img className="landingIcon" src="./images/adopt.png" alt="adopt"/>Connect with the local shelter and start the adoption process!</li>
            </ul>
        </div>
    )
}