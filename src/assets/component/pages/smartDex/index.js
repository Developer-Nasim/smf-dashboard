import React,{useState} from "react";
import "./style.css"   
import Backg from "../../../imgs/background.png"
import { BiCog,BiChevronDown,BiInfoCircle } from "react-icons/bi";
import Logo from "../../../imgs/logo.png"

import { BsGithub,BsLayoutWtf,BsDiscord,BsTelegram,BsTwitter,BsBoxArrowInUpRight,BsXCircleFill } from "react-icons/bs";

import { Link,useNavigate } from "react-router-dom"; 
import XTZ from "../../../imgs/icons/xtz.png"
import Crunch from "../../../imgs/icons/crunch.png"
import TheButton from "../../helper/button";
import Modal from "../../helper/modal";
 
 


function SmartDex() { 

    const [ Slippage,setSlippage ] = useState('0.5%')

    return (
        <>
        
        <div className="dashboard" style={{background: "url("+Backg+")"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="swap-blk blk_color">
                            <div className="swap-blk-corner">
                                <BiCog/> 
                                <div className="swap-blk-wrp blk_color">
                                    <h5>Trade setting</h5> 
                                    <label htmlFor="">
                                        Slippage tolerance
                                        <div className="dts">
                                            <button type="button" onClick={(e)=>setSlippage(e.target.textContent)} className={Slippage === "0.5%"? 'active' : ""}>0.5%</button>
                                            <button type="button" onClick={(e)=>setSlippage(e.target.textContent)} className={Slippage === "1%"? 'active' : ""}>1%</button>
                                            <button type="button" onClick={(e)=>setSlippage(e.target.textContent)} className={Slippage === "4%"? 'active' : ""}>4%</button>
                                            <span className="inp">
                                                <input type="number" placeholder="0.10" className="blk_color" id="" />
                                                <small>%</small>
                                            </span>
                                        </div>    
                                    </label> 
                                    <label htmlFor="">
                                        Transaction timeout
                                        <div className="dts tmot"> 
                                            <span className="inp">
                                                <input type="number" placeholder="20" className="blk_color" id="" />
                                                <small>Min</small>
                                            </span>
                                        </div>    
                                    </label> 
                                </div>
                            </div>
                            <div className="swap-menus">
                                <button type="button">Swap</button>
                                <button type="button">Liquidity</button>
                            </div>
                            <div className="swap-contents">
                                <div className="the_swap"> 
                                    <div className="crc-blk blk_color">
                                        <div className="crc-top">
                                            <button type="button"><img src={XTZ} alt="" /> XTZ <BiChevronDown/></button>
                                            <input type="number" placeholder="0.0" />
                                        </div>
                                        <div className="crc-bottom">
                                            <p>Balance: 0.00 XTZ <small>(Max)</small></p>
                                        </div>
                                    </div>    
                                    <div className="crc-blk blk_color">
                                        <div className="crc-top">
                                            <button type="button"><img src={Crunch} alt="" /> crunch <BiChevronDown/></button>
                                            <input type="number" placeholder="0.0" />
                                        </div>
                                        <div className="crc-bottom">
                                            <p>Balance: 0.00 CRUNCH </p>
                                        </div>
                                    </div> 
                                </div>   
                                <p className="tlrnc">
                                    <span>Slippage tolerance</span>
                                    <span>0.5%</span>
                                </p>
                                <button type="button" className="theme-btn" data-bs-toggle="modal" data-bs-target="#connectWalletModal">Connect wallet</button> 
                            </div>
                        </div>
                        <div className="swap-more blk_color mt-4">
                            <ul>
                                <li>
                                    <span>Minimum received <div><BiInfoCircle/> <p className="blk_color"> Your transaction will revert if there is Your transaction will revert if there is Your transaction. </p></div></span>
                                    <span>0.00 CRUNCH</span>
                                </li>
                                <li>
                                    <span>Price impact<div><BiInfoCircle/> <p className="blk_color"> Your transaction will revert if there is Your transaction will revert if there is Your transaction. </p></div></span>
                                    <span>0.00%</span>
                                </li>
                                <li>
                                    <span>Liquidity provider fee<div><BiInfoCircle/> <p className="blk_color"> Your transaction will revert if there is Your transaction will revert if there is Your transaction. </p></div></span>
                                    <span>0.00</span>
                                </li>
                            </ul>
                        </div>
                    </div>  
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-4 ">
                        <div className="smartDex-bottom mt-4">
                            <div className="social">
                                <Link to="/" ><BsLayoutWtf/></Link>
                                <Link to="/" ><BsGithub/></Link>
                                <Link to="/" ><BsDiscord/></Link>
                                <Link to="/" ><BsTelegram/></Link>
                                <Link to="/" ><BsTwitter/></Link> 
                            </div>
                            <TheButton classes={""} href={"#"} content={<>Have questions?<BsBoxArrowInUpRight/></>}/>  
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <Modal ModalName="connectWallet">
            <div className="connectWallet-smartDex">
                <div className="connectWallet-smartDex-header">
                    <img src={Logo} alt="" />
                    <button data-bs-dismiss="modal" type="button"><BsXCircleFill/></button>
                </div>
                <h5>Choose your preferred wallet</h5>
                <span>Browser Extensions</span>
                <div className="WalletBlks">
                    <div className="cnt">
                        <h4>Spire <small>Not installed</small></h4>
                        <img src="" alt="" />
                    </div>
                    <button type="button" className="theme-btn" data-bs-toggle="modal" data-bs-target="#connectWalletModal">Pair wallet on another device</button> 

                </div>
            </div>
        </Modal>
        </>
    )
}

export default SmartDex;