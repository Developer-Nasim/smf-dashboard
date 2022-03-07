import React,{useEffect,useRef} from "react";
import "./style.css"
import Logo from "../../imgs/logo.png"
import CircleLogo from "../../imgs/circleLogo.png"
import TheButton from "../helper/button";

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
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-wrp">
                                <a className="header-logo" href="#"><img src={Logo} alt="" /></a>
                                <ul className=" d-none d-xl-flex">
                                    <li><TheButton classes={""} href={"#"} content={"Dashboard"}/></li>
                                    <li><TheButton classes={""} href={"smartdex"} content={"SmartDex"}/></li>
                                    <li><TheButton classes={""} href={"#"} content={"SmartStake"}/></li>
                                    <li><TheButton classes={""} href={"antiscamai"} content={"AntiScamAI"}/></li> 
                                    <li><TheButton classes={""} href={"#"} content={"Whales AI"}/></li>
                                    <li><TheButton classes={""} href={"#"} content={"TradingBotAI"}/></li>
                                </ul>
                                <div className="connectWallet">
                                    <TheButton classes={"cnctWlt d-none d-xl-block"} href={"#"} content={<><img src={CircleLogo} alt="" /> Connect Wallet</>}/> 
                                    <button type="button" className="mblTgl d-block d-xl-none"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobileMenu">
                <button type="button" className="mblTgl">X</button>
                <ul>
                    <li><TheButton classes={""} href={"#"} content={"Dashboard"}/></li>
                    <li><TheButton classes={""} href={"smartdex"} content={"SmartDex"}/></li>
                    <li><TheButton classes={""} href={"#"} content={"SmartStake"}/></li>
                    <li><TheButton classes={""} href={"antiscamai"} content={"AntiScamAI"}/></li> 
                    <li><TheButton classes={""} href={"#"} content={"WhalesAI"}/></li>
                    <li><TheButton classes={""} href={"#"} content={"TradingBotAI"}/></li>
                    <li><TheButton classes={"cnctWlt"} href={"#"} content={<><img src={CircleLogo} alt="" /> Connect Wallet</>}/></li> 
                </ul>
            </div>
        </>
    )
}

export default Header;