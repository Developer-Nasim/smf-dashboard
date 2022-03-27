import React from "react";
import "./style.css" 
import {Link  } from "react-router-dom" 

function ComingSoon() { 
    return (
        <div className="commingsoon">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="commingsoon_wrp">  
                            <h2>Coming Soon</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon;