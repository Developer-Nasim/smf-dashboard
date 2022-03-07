import React from "react";
import "./style.css" 
import CircleLogo from "../../../imgs/circleLogo.png"
import ContentBlk from "../../helper/contentBlk"
import Backg from "../../../imgs/background.png"
import { useNavigate } from "react-router-dom";
import TheButton from "../../helper/button";
import ChartComponent from "../../helper/chart"
import DemoStock from "../../helper/chart/stock"
import WhitePaper from "../../../imgs/whitepaper.png";
import Audits from "../../../imgs/audits.png";
import Github from "../../../imgs/github.png";
import Tutorial from "../../../imgs/tutorial.png";
import FAQ from "../../../imgs/faq.png";
import Video from "../../../imgs/video.png";

 


function IconBlk({href,img,classes}) {
    const navigate = useNavigate();
    return <li className={classes} onClick={() => navigate('/'+href)}><img src={img} alt="" /></li> 
}


function Dashboard() {
    const navigate = useNavigate();
    return (
        <div className="dashboard" style={{background: "url("+Backg+")"}}>
            <div className="container">
                <div className="row">
                    {/* <div className="col-lg-12"> 
                        <button type="button" className="goback" onClick={() => navigate(-1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l9-8v6h15v4h-15v6z"/></svg>
                        </button>
                    </div> */}
                    <ContentBlk classes={"col-xl-6 col-lg-12 mb-3"}>
                        <h4>Wallet</h4>
                        <ul className="dlist">
                            <li>
                                <span>Wallet ID -</span>
                                <span className="text-truncate">0xAE973B22d9764476041043C7d6eFdF20a5E6093F</span>
                            </li>
                            <li>
                                <span>Balance: </span>
                                <span>1,562,621.00 SMF</span>
                            </li>
                            <li>
                                <span>SMF 24H PNL: </span>
                                <span style={{color:"#198754"}}>+$1,245.00 / +89.00%</span>
                            </li>
                            <li>
                                <span>Total Wallet Balance: </span>
                                <span>$19,892.91</span>
                            </li>
                            <li>
                                <span>Total 24H PNL: </span>
                                <span style={{color:"#198754"}}>+$756.70 / +3.95%</span>
                            </li> 
                        </ul>
                        <div className="btns">
                            <TheButton classes={""} href={"#"} content={"Explorer"}/>
                            <TheButton classes={""} href={"#"} content={"Buy"}/>
                        </div>
                    </ContentBlk> 
                    <ContentBlk classes={"col-xl-6 col-lg-12 mb-3"}>
                        <div className="smf-data"> 
                            <div className="smf-data-left"> 
                                <h5><img src={CircleLogo} alt="" /> SMF Data: $0 <small className="badge bg-success">1%</small></h5>
                                <ul className="dlist">
                                    <li>
                                        <span>24H VOL:</span>
                                        <span>$11,958,452</span>
                                    </li>
                                    <li>
                                        <span>Market Cap: </span>
                                        <span>$97,054,126</span>
                                    </li>
                                    <li>
                                        <span>Circulating Supply:</span>
                                        <span>$97,054,126</span>
                                    </li>
                                    <li>
                                        <span>Total Supply:</span>
                                        <span>$97,054,126</span>
                                    </li> 
                                </ul>
                            </div>
                            <div className="smf-data-right">
                                <ChartComponent/>
                                {/* <DemoStock/> */}
                                <div className="a_days">
                                    <button type="button">1d</button>
                                    <button type="button">7d</button>
                                    <button type="button">1m</button>
                                    <button type="button">3m</button>
                                </div>
                            </div>
                        </div>
                    </ContentBlk>  
                    <ContentBlk classes={"col-lg-4 col-md-6 mb-3"}>
                        <h4>AntiScamAI</h4>
                        <p>Maximise your Investment by Scanning any crypto project before to Invest</p>
                        <button type="button" className="gotothatPage" onClick={() => navigate("#")}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l9-8v6h15v4h-15v6z"/></svg></button>
                    </ContentBlk>  
                    <ContentBlk classes={"col-lg-4 col-md-6 mb-3"}>
                        <h4>WhalesTrackerAI</h4>
                        <p>Stay updated, get AI Insight and Prediction. Copy Transactions to profit from the Pump !</p>
                        <button type="button" className="gotothatPage" onClick={() => navigate("#")}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l9-8v6h15v4h-15v6z"/></svg></button>
                    </ContentBlk> 
                    <ContentBlk classes={"col-lg-4 col-md-6 mb-3"}>
                        <h4>TradingBotAI</h4>
                        <p>Set traget profit, get insurance ratio. Shill while your wealth growing.</p>
                        <button type="button" className="gotothatPage" onClick={() => navigate("#")}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l9-8v6h15v4h-15v6z"/></svg></button>
                    </ContentBlk> 
                    <ContentBlk classes={"col-lg-4 col-md-6 mb-3"}>
                        <h4>SmartDex</h4>
                        <p>Swap tokens at SmartDex with AI managed and optimised slipage.</p>
                        <button type="button" className="gotothatPage" onClick={() => navigate("#")}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l9-8v6h15v4h-15v6z"/></svg></button>
                    </ContentBlk> 
                    <ContentBlk classes={"col-lg-4 col-md-6 mb-3"}>
                        <h4>Liquidity</h4>
                        <p>Add liquidity to SmartDapp and Profit from every swap fees.</p>
                        <button type="button" className="gotothatPage" onClick={() => navigate("#")}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l9-8v6h15v4h-15v6z"/></svg></button>
                    </ContentBlk> 
                    <ContentBlk classes={"col-lg-4 col-md-6 mb-3"}>
                        <h4>SmartStake</h4>
                        <p>Our Dual Reward system designed to let you benefit from Tax USDT reflection even with your SMF staked.</p>
                        <button type="button" className="gotothatPage" onClick={() => navigate("#")}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l9-8v6h15v4h-15v6z"/></svg></button>
                    </ContentBlk> 
                    <ContentBlk classes={"col-lg-12"}>
                        <div className="help_center"> 
                            <h4>Support Center</h4>
                            <ul>
                                <IconBlk href="#" img={WhitePaper} classes=""/> 
                                <IconBlk href="#" img={Audits} classes=""/> 
                                <IconBlk href="#" img={Github} classes=""/> 
                                <IconBlk href="#" img={Tutorial} classes=""/> 
                                <IconBlk href="#" img={FAQ} classes=""/> 
                                <IconBlk href="#" img={Video} classes=""/>  
                            </ul>
                        </div>
                    </ContentBlk> 
                </div>
            </div> 
        </div>
    )
}

export default Dashboard;