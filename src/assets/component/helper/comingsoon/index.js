import React from "react";
import "./style.css" 
import {Link  } from "react-router-dom"
import Img from "../../../imgs/comingsoon2.gif"

function ComingSoon() { 
    return (
        <div className="commingsoon">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="commingsoon_wrp"> 
                            <img src={Img} alt="" />
                            {/* <h2>Coming Soon</h2>
                            <p>This page is coming soon</p>
                            <Link className="theme-btn" to={"/"}>Go Back</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon;