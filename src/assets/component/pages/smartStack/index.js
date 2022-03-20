import React,{useState} from "react";
import "./style.css"   
import Backg from "../../../imgs/background.png" 
import SmkIcn from "../../../imgs/icons/smk.svg"  
import SocialsBar from "../../helper/socials";
import ConnectWalletModal from "../../helper/modal/ConnectWallet";
import { AiFillThunderbolt,AiFillStar,AiFillClockCircle } from "react-icons/ai";

 


function SmartStack() { 
    
    const [ Apr,setApr ] = useState(20)


    return (
        <>  
        <div className="dashboard" style={{background: "url("+Backg+")"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="stack-smak blk_color mb-3">
                            <div className="smakMnu">
                                <button type="button" onClick={() => setApr(20)} className={Apr === 20 ? "active" : ""}>20% APR</button>
                                <button type="button" onClick={() => setApr(36)} className={Apr === 36 ? "active" : ""}>36% APR</button>
                            </div>
                            <div className="apr_cnt">
                                <div><img src={SmkIcn} alt="" /> Stake SMAK</div>
                                <span className="blk_color">{Apr === 36 ? "90 DAY LOCKUP" : "FLEXIBLE"}</span>
                            </div>
                            <p>Balance: 0 SMAK <span>Use Max</span></p>
                            <label htmlFor="" className="blk_color">
                                <input type="text" placeholder="0" />
                                <span>SMAK</span>
                            </label>
                            <p><small style={{color:"red",opacity:"0"}}>Please enter an amount</small> <b>Min. 1 SMAK ~ 0.0172 USD</b></p>
                            <button type="button" data-bs-dismiss="modal" className="theme-btn" data-bs-toggle="modal" data-bs-target="#connectWalletModal">Connect wallet</button> 
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="stkDtl blk_color mb-3">
                            <h4>My staking details</h4>
                            <ul className="rnkDtl blk_color">
                                <li>
                                    <p>My SMAK Balance</p>
                                    <h5>0 SMAK</h5>
                                </li>
                                <li className="mdlBlk">
                                    <p>Total SMAK Staked</p>
                                    <h5>0 SMAK</h5>
                                </li>
                                <li>
                                    <p>Total SMAK Earned</p>
                                    <h5>0 SMAK</h5>
                                </li>
                            </ul>
                            <ul className="rnkDtlBlk">
                                <li className="blk_color">
                                    <AiFillThunderbolt/> 
                                    <button type="type" className="blk_color">Staking details</button>
                                </li>
                                <li className="blk_color">
                                    <AiFillStar/> 
                                    <button type="type" className="blk_color">Flexible staking</button>
                                </li>
                                <li className="blk_color">
                                    <AiFillClockCircle/> 
                                    <button type="type" className="blk_color">Locked details</button>
                                </li>
                            </ul>
                        </div>
                    </div> 
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <h4 className="dsh_ttl mb-3">Dashboard <span>SMAK Staking Data</span></h4>
                    </div>
                    <div className="col-lg-4">
                        <div className="stk_blk blk_color mb-3">
                            <p>$SMAK Price</p>
                            <h5>$0.0172 USD <span>4.79%</span></h5>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="stk_blk blk_color mb-3">
                            <p>Total SMAK Staked</p>
                            <h5>285,756,547.5 SMAK</h5>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="stk_blk blk_color mb-3">
                            <p>Total Staking Rewards</p>
                            <h5>65,372,349.778 SMAK</h5>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="stkCnt blk_color	    ">
                            <h5>SMAK Staking Contract Details</h5>
                            <ul>
                                <li>
                                    <span>Contract address</span>
                                    <span className="text-truncate">KT1TwzD6zV3WeJ39uk</span>
                                </li>
                                <li>
                                    <span>Number of stakers</span>
                                    <span className="text-truncate">2,803</span>
                                </li>
                                <li>
                                    <span>Circulating</span>
                                    <span className="text-truncate">543,027,727 SMAK</span>
                                </li>
                                <li>
                                    <span>Market cap</span>
                                    <span className="text-truncate">9,332,915.623 USD</span>
                                </li>
                                <li>
                                    <span>Max supply cap</span>
                                    <span className="text-truncate">15,400,816.059 USD</span>
                                </li>
                                <li>
                                    <span>SMAK burned</span>
                                    <span className="text-truncate">11,152,288.57 SMAK</span>
                                </li>
                                <li>
                                    <span>Total supply</span>
                                    <span className="text-truncate">896,083,333 SMAK</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row"> 
                    <div className="col-lg-12 mt-4">
                        <SocialsBar /> 
                    </div>
                </div>
            </div> 
        </div>
 
        </>
    )
}

export default SmartStack;