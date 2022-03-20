import React,{useState} from "react";
import "./style.css"   
import Backg from "../../../imgs/background.png"
import { BiCog,BiChevronDown,BiInfoCircle } from "react-icons/bi"; 

import { BsXCircleFill } from "react-icons/bs";
 
import XTZ from "../../../imgs/icons/xtz.png"
import Crunch from "../../../imgs/icons/crunch.png" 
import Umami from "../../../imgs/icons/wallet/umami.png" 
 
import Modal from "../../helper/modal";
import SocialsBar from "../../helper/socials";
import ConnectWalletModal from "../../helper/modal/ConnectWallet";
 
 


function SmartDex() { 

    const [ Slippage,setSlippage ] = useState('0.5%');
    const [ SwapMenu,setSwapMenu ] = useState("Swap");
    const [ SelectTkn,setSelectTkn ] = useState("FA 1.2"); 
    const [ ShowTknType,setShowTknType ] = useState(false);


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
                                <button type="button" onClick={(e) => setSwapMenu(e.target.textContent)} className={SwapMenu === "Swap" ? "active" : ""}>Swap</button>
                                <button type="button" onClick={(e) => setSwapMenu(e.target.textContent)} className={SwapMenu === "Liquidity" ? "active" : ""}>Liquidity</button>
                            </div>
                            <div className="swap-contents">
                                { SwapMenu === "Swap" ?  
                                <div className="the_swap"> 
                                    <div className="crc-blk blk_color">
                                        <div className="crc-top">
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#tokenSelectModal" onClick={() => setShowTknType(false)}><img src={XTZ} alt="" /> XTZ <BiChevronDown/></button>
                                            <input type="number" placeholder="0.0" />
                                        </div>
                                        <div className="crc-bottom">
                                            <p>Balance: 0.00 XTZ <small>(Max)</small></p>
                                        </div>
                                    </div>    
                                    <div className="crc-blk blk_color">
                                        <div className="crc-top">
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#tokenSelectModal" onClick={() => setShowTknType(false)}><img src={Crunch} alt="" /> crunch <BiChevronDown/></button>
                                            <input type="number" placeholder="0.0" />
                                        </div>
                                        <div className="crc-bottom">
                                            <p>Balance: 0.00 CRUNCH </p>
                                        </div>
                                    </div> 
                                </div>
                                :
                                <div className="the_swap"> 
                                    <div className="crc-blk blk_color">
                                        <div className="crc-top">
                                            <button type="button" className="pdr-10"><img src={XTZ} alt="" /> XTZ </button>
                                            <input type="number" placeholder="0.0" />
                                        </div>
                                        <div className="crc-bottom">
                                            <p>Balance: 0.00 XTZ <small>(Max)</small></p>
                                        </div>
                                    </div>    
                                    <div className="crc-blk blk_color">
                                        <div className="crc-top">
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#tokenSelectModal" onClick={() => setShowTknType(false)}><img src={Crunch} alt="" /> crunch <BiChevronDown/></button>
                                            <input type="number" placeholder="0.0" />
                                        </div>
                                        <div className="crc-bottom">
                                            <p>Balance: 0.00 CRUNCH <small>(Max)</small> </p>
                                        </div>
                                    </div> 
                                    <ul className="liquidity blk_color">
                                        <li>CRUNCH per XTZ <br /> 287.07204888</li>
                                        <li>XTZ per CRUNCH <br /> 0.003483</li>
                                        <li>Pool share <br /> 0.00%</li> 
                                    </ul>
                                </div>
                                }
                                <p className="tlrnc">
                                    <span>Slippage tolerance</span>
                                    <span>0.5%</span>
                                </p>
                                <button type="button" className="theme-btn" data-bs-toggle="modal" data-bs-target="#connectWalletModal">Connect wallet</button> 
                            </div>
                        </div>
                        <div className="swap-more blk_color mt-4">
                            { SwapMenu === "Swap" ?  
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
                            : 
                                <p>By adding liquidity you'll earn 0.25% of all trades on
                                this pair proportional to your share of the pool. Fees
                                are added to the pool, accrue in real time and can
                                be claimed by withdrawing your liquidity.</p>
                            }
                        </div>
                    </div>  
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-4  mt-4">
                        <SocialsBar /> 
                    </div>
                </div>
            </div> 
        </div>
  
        <Modal ModalName="tokenSelect">
            <div className="tokenSelect blk_color"> 
                {!ShowTknType ?  
                    <div className="slct_a_tkn"> 
                        <div className="tokenSelect_head">
                            <h5>Select a Token</h5>
                            <button data-bs-dismiss="modal" type="button"><BsXCircleFill/></button>
                        </div> 
                        <input type="text" placeholder="Search name or paste contract address" className="search_now blk_color" />
                        <div className="tkn_fp">
                            <h5>Tokens frequently paired</h5>
                            <div className="fp_tkn">
                                <button type="button" className="blk_color"><img src={XTZ} alt="" /> XTZ</button>
                                <button type="button" className="blk_color"><img src={XTZ} alt="" /> SMAK</button>
                                <button type="button" className="blk_color"><img src={XTZ} alt="" /> USDtz</button>
                                <button type="button" className="blk_color"><img src={XTZ} alt="" /> BTCtz</button>
                                <button type="button" className="blk_color"><img src={XTZ} alt="" /> ETHtz</button>
                                <button type="button" className="blk_color"><img src={XTZ} alt="" /> KUSD</button>
                                <button type="button" className="blk_color"><img src={XTZ} alt="" /> ctez</button>
                            </div>
                        </div>
                        <ul className="mr_tkns">
                            <li>
                                <img src={Umami} alt="" />
                                <p>EASY <small>CRUNCH</small></p>
                            </li>
                            <li>
                                <img src={Umami} alt="" />
                                <p>EASY <small>CRUNCH</small></p>
                            </li>
                            <li>
                                <img src={Umami} alt="" />
                                <p>EASY <small>CRUNCH</small></p>
                            </li>
                            <li>
                                <img src={Umami} alt="" />
                                <p>EASY <small>CRUNCH</small></p>
                            </li>
                            <li>
                                <img src={Umami} alt="" />
                                <p>EASY <small>CRUNCH</small></p>
                            </li>
                            <li>
                                <img src={Umami} alt="" />
                                <p>EASY <small>CRUNCH</small></p>
                            </li>
                            <li>
                                <img src={Umami} alt="" />
                                <p>EASY <small>CRUNCH</small></p>
                            </li>
                            <li>
                                <img src={Umami} alt="" />
                                <p>EASY <small>CRUNCH</small></p>
                            </li>
                            <li>
                                <img src={Umami} alt="" />
                                <p>EASY <small>CRUNCH</small></p>
                            </li>
                            <li>
                                <img src={Umami} alt="" />
                                <p>EASY <small>CRUNCH</small></p>
                            </li>
                            <li>
                                <img src={Umami} alt="" />
                                <p>EASY <small>CRUNCH</small></p>
                            </li>
                            <li>
                                <img src={Umami} alt="" />
                                <p>EASY <small>CRUNCH</small></p>
                            </li>
                            <li>
                                <img src={Umami} alt="" />
                                <p>EASY <small>CRUNCH</small></p>
                            </li>
                            <li>
                                <img src={Umami} alt="" />
                                <p>EASY <small>CRUNCH</small></p>
                            </li>
                            <li>
                                <img src={Umami} alt="" />
                                <p>EASY <small>CRUNCH</small></p>
                            </li>
                            <li>
                                <img src={Umami} alt="" />
                                <p>EASY <small>CRUNCH</small></p>
                            </li>
                        </ul>
                        <button type="button" className="theme-btn" onClick={() => setShowTknType(true)}>+ Add new token</button> 
                    </div>
                :
                    <div className="slct_tkn_typ"> 
                        <div className="tokenSelect_head">
                            <h5>Select Token type</h5>
                            <button onClick={() => setShowTknType(false)} type="button"><BsXCircleFill/></button>
                        </div>
                        <div className="selectTypeHere">
                            <button type="button" onClick={(e) => setSelectTkn(e.target.textContent)} className={SelectTkn === "FA 1.2" ? "active" : ""}>FA 1.2</button>
                            <button type="button" onClick={(e) => setSelectTkn(e.target.textContent)} className={SelectTkn === "FA 2" ? "active" : ""}>FA 2</button> 
                        </div>
                        <div className="infoType blk_color">
                            <h6>Add token address</h6>
                            <input type="text" placeholder="KT1c578hd...." className="" />
                        </div>    
                        {SelectTkn === "FA 2" ?  
                            <div className="infoType blk_color">
                                <h6>Token id</h6>
                                <input type="number" placeholder="0" className="" />
                            </div>  
                        : ""}  
                        <div className="infoType blk_color">
                            <h6>Deposit Amount</h6>
                            <input type="number" placeholder="0.0" className="" />
                        </div>  
                        <div className="infoType blk_color">
                            <h6>You pair</h6>
                            <div className="pair_wrp">
                                <button type="button" className="blk_color"><img src={XTZ} alt="" /> XTZ</button>
                                <input type="number" placeholder="0.0" className="" />
                            </div>
                        </div>  
                        <p><span>Rate</span> <span>1 XTZ = 0 TOKEN</span></p> 
                        <button type="button" data-bs-dismiss="modal" className="theme-btn" data-bs-toggle="modal" data-bs-target="#connectWalletModal">Connect wallet</button> 
                    </div>
                }
            </div>
        </Modal>
        </>
    )
}

export default SmartDex;