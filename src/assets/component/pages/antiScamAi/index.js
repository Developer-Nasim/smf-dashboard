import React from "react";
import "./style.css"  
import ContentBlk from "../../helper/contentBlk"
import Backg from "../../../imgs/background.png"
import TheButton from "../../helper/button";
import { useNavigate } from "react-router-dom"; 

 
 


function AntiScamAi() {
    const navigate = useNavigate();
    return (
        <div className="dashboard" style={{background: "url("+Backg+")"}}>
            <div className="container">
                <div className="row">
                    {/* <div className="col-lg-12"> 
                        <button type="button" className="goback" onClick={() => navigate(-1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l9-8v6h15v4h-15v6z"/></svg>
                        </button>
                    </div>  */}
                    <ContentBlk classes={"col-lg-6 offset-lg-3 col-md-8 offset-md-2 mb-3"}>
                        <h4>AntiScamAI</h4>
                        <form action="#" className="antiScamAiForm">
                            <label htmlFor="">
                                Website 
                                <input type="url" placeholder="Http://...." />
                            </label>
                            <label htmlFor="">
                                Contract Address 
                                <input type="text" placeholder="....###" />
                            </label> 
                            <TheButton classes={""} href={"#"} content={"Scan"}/>
                        </form>
                    </ContentBlk>   
                </div>
            </div> 
        </div>
    )
}

export default AntiScamAi;