import React from "react";
import "./Banner.css";
import heroimg from "./heroimg.png"; // Make sure the image is in the same folder or adjust the path

function Banner() {
    return (
        <div className="mainhero">
        <div className="hero">
            <div className="bannerSection">
                <div className="bannerLeft">
                    <div className="greenBox">
                        <img src={heroimg} alt="Hero" className="heroImage" />
                    </div>
                </div>
                <div className="bannerRight">
                    <p className="bannerRight2">
                        Empower Your Future with Personalized Guidance
                    </p>
                    <p className="bannerRight3">
                        Navigate your educational and career journey with AI-driven insights
                        tailored just for you.
                    </p>
                    <div className="bannerButton">
                        <div className="bannerButton2">
                            <p>Talk to Experts</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wave">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,32L480,160L960,64L1440,96L1440,320L960,320L480,320L0,320Z"></path></svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,96L480,32L960,160L1440,32L1440,320L960,320L480,320L0,320Z"></path></svg>
                    </div>
        </div>
    );
}

export default Banner;