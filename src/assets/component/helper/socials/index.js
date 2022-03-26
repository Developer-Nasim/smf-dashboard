import React from "react";
import "./style.css" 
import { BsGithub,BsLayoutWtf,BsDiscord,BsTelegram,BsTwitter,BsBoxArrowInUpRight } from "react-icons/bs";
import {Link  } from "react-router-dom"
import TheButton from "../button";

function SocialsBar() {
    return (
        <div className="social-bar">
            <div className="social">
                <Link to="/" ><BsLayoutWtf/></Link>
                <Link to="/" ><BsGithub/></Link>
                <Link to="/" ><BsDiscord/></Link>
                <Link to="/" ><BsTelegram/></Link>
                <Link to="/" ><BsTwitter/></Link> 
            </div>
            {/* <TheButton classes={""} href={"#"} content={<>Have questions?<BsBoxArrowInUpRight/></>}/>   */}
        </div>
    )
}

export default SocialsBar;