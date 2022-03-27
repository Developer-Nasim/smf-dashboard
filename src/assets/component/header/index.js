import React,{useEffect} from "react";
import "./style.css"
import Logo from "../../imgs/logo.png"
import CircleLogo from "../../imgs/circleLogo.png"
import TheButton from "../helper/button";
import { NavLink } from "react-router-dom";
import SocialsBar from "../helper/socials";
import ConnectWalletModal from "../helper/modal/ConnectWallet";

function Header() { 

    useEffect(() => { 
        let MenuBtnss = document.querySelectorAll('.mblTgl');
        MenuBtnss.forEach(btn => {
            btn.addEventListener('click', () => { 
                document.querySelector('body').classList.toggle('show_menu')
            })
        }) 
    })

    return (
        <> 
            <div className="header">
                <div className="header-wrp">
                    <a className="header-logo" href="/"><img src={Logo} alt="" /></a>
                    <ul className=" d-none d-xl-flex">
                        <li> <NavLink to={"/"} className={""}>Dashboard</NavLink> </li>
                        <li> <NavLink to={"/smartdex"} className={""}>smartdex</NavLink> </li>
                        <li> <NavLink to={"/smartstack"} className={""}>smartstack</NavLink> </li>
                        <li> <NavLink to={"/antiscamai"} className={""}>antiscamai</NavLink> </li>
                        <li> <NavLink to={"/whalesaI"} className={""}>Whales AI</NavLink> </li>
                        <li> <NavLink to={"/tradingbotaI"} className={""}>TradingBotAI</NavLink> </li>
                        <li> <NavLink to={"/docs"} className={"drp_menu"}>Docs <span></span></NavLink> 
                            <ul>
                                <li> <NavLink to={"/#"} className={""}>Audit</NavLink> </li>
                                <li> <NavLink to={"/#"} className={""}>GitHub</NavLink> </li>
                                {/* <li><TheButton classes={""} href={"#"} content={""}/></li>
                                <li><TheButton classes={""} href={"#"} content={""}/></li>  */}
                            </ul>
                        </li>  
                    </ul>
                    <div className="connectWallet">
                        <button className={"theme-btn cnctWlt d-none d-xl-block"} data-bs-toggle="modal" data-bs-target="#connectWalletModal"><img src={CircleLogo} alt="" /> Connect Wallet</button> 
                        <button type="button" className="mblTgl d-block d-xl-none"></button>
                    </div>

                    <SocialsBar />
                </div>
                {/* <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-wrp">
                                <a className="header-logo" href="/"><img src={Logo} alt="" /></a>
                                <ul className=" d-none d-xl-flex">
                                    <li><TheButton classes={""} href={"#"} content={"Dashboard"}/></li>
                                    <li><TheButton classes={""} href={"smartdex"} content={"SmartDex"}/></li>
                                    <li><TheButton classes={""} href={"smartstack"} content={"SmartStake"}/></li>
                                    <li><TheButton classes={""} href={"antiscamai"} content={"AntiScamAI"}/></li> 
                                    <li><TheButton classes={""} href={"#"} content={"Whales AI"}/></li>
                                    <li><TheButton classes={""} href={"#"} content={"TradingBotAI"}/></li>
                                    <li><TheButton classes={"drp_menu"} href={"#"} content={<>Docs <span></span></>}/>
                                        <ul>
                                            <li><TheButton classes={""} href={"#"} content={"Audit"}/></li>
                                            <li><TheButton classes={""} href={"#"} content={"GitHub"}/></li> 
                                        </ul>
                                    </li>
                                </ul>
                                <div className="connectWallet">
                                    <button className={"theme-btn cnctWlt d-none d-xl-block"} data-bs-toggle="modal" data-bs-target="#connectWalletModal"><img src={CircleLogo} alt="" /> Connect Wallet</button> 
                                    <button type="button" className="mblTgl d-block d-xl-none"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="mobileMenu">
                <button type="button" className="mblTgl">X</button>
                <ul>
                    <li><TheButton classes={""} href={"#"} content={"Dashboard"}/></li>
                    <li><TheButton classes={""} href={"smartdex"} content={"SmartDex"}/></li>
                    <li><TheButton classes={""} href={"smartstack"} content={"SmartStake"}/></li>
                    <li><TheButton classes={""} href={"antiscamai"} content={"AntiScamAI"}/></li> 
                    <li><TheButton classes={""} href={"#"} content={"WhalesAI"}/></li>
                    <li><TheButton classes={""} href={"#"} content={"TradingBotAI"}/></li>
                    <li><TheButton classes={""} href={"#"} content={"Docs"}/>
                        <ul>
                             <li><TheButton classes={""} href={"#"} content={"Audit"}/></li>
                             <li><TheButton classes={""} href={"#"} content={"GitHub"}/></li> 
                        </ul>
                    </li>
                    <li>
                        <button type="button" data-bs-dismiss="modal" className="theme-btn" data-bs-toggle="modal" data-bs-target="#connectWalletModal"><img src={CircleLogo} alt="" /> Connect Wallet</button>
                        {/* <TheButton classes={"cnctWlt"} href={"#"} content={<></>}/> */}
                    </li> 
                </ul>
            </div>
            <ConnectWalletModal />
        </>
    )
}

export default Header;