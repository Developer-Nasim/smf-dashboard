import React,{useState} from "react";
import "./style.css"  
import ContentBlk from "../../helper/contentBlk"
import Backg from "../../../imgs/background.png"  
import { CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from "./ProgressProvide";
 
 


function AntiScamAi() { 
    const [valueEnd, setValueEnd]           = useState(46);
    const [ClickAbleScan, setClickAbleScan] = useState(false);
    const [showDetails, setshowDetails]     = useState(false); 
    const [ datas,setDatas ]                    = useState({
        name:"",
        url:"",
        address:"",
    });

    const {name,url,address} = datas;

    const changeInput = (inp) => {
        setDatas({...datas,[inp.name]:inp.value})
        if (name.length <= 0 || url.length <= 0 || address.length <= 0) {
            setClickAbleScan(false)
        }else{
            setClickAbleScan(true)
        }
    }

    const ShowMoreDetails =() => {

    }



    return (
        <> 
            <div className="dashboard" style={{background: "url("+Backg+")"}}>
                <div className="container">
                    <div className="row">
                        {/* <div className="col-lg-12"> 
                            <button type="button" className="goback" onClick={() => navigate(-1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l9-8v6h15v4h-15v6z"/></svg>
                            </button>
                        </div>  */}
                        <ContentBlk classes={"col-lg-8 offset-lg-2 col-md-10 offset-md-1 mb-3"}>
                            <h4>AntiScamAI</h4>
                            <form action="#" className="antiScamAiForm">
                                <label htmlFor="">
                                    Project Name 
                                    <input type="text" name="name" placeholder="Project Name" onChange={(e) => changeInput(e.target)} />
                                </label>
                                <label htmlFor="">
                                    Website 
                                    <input type="text" name="url" placeholder="Http://...." onChange={(e) => changeInput(e.target)} />
                                </label>
                                <label htmlFor="">
                                    Contract Address 
                                    <input type="text" name="address" placeholder="....###" onChange={(e) => changeInput(e.target)} />
                                </label> 
                                <button className={ClickAbleScan ? "theme-btn" : "theme-btn diasbled"} onClick={(e) => {
                                    e.preventDefault();
                                    setshowDetails(true)
                                }}>Scan</button>
                                {/* <TheButton classes={ClickAbleScan ? "" : "diasbled"} href={"#"} content={"Scan"}/> */}
                                
                            </form>

                            {showDetails ?  
                            <div className="score-details">
                            
                                <div className="scror_contents"> 
                                    <div className="progBlk"> 
                                        <ProgressProvider valueStart={0} valueEnd={valueEnd}>
                                            {value => <CircularProgressbarWithChildren 
                                            strokeWidth={5}
                                            value={value} 
                                            // text={value+"%"} 
                                            styles={buildStyles({ 
                                                // Text size
                                                textSize: '16px',

                                                // How long animation takes to go from one percentage to another, in seconds
                                                pathTransitionDuration: 2,
                
                                                // Colors
                                                pathColor: valueEnd <= 30 ? `red` : "`rgba(62, 152, 199, 100)`",
                                                textColor: '#f88',
                                                trailColor: 'rgb(43 36 109)',
                                                backgroundColor: '#3e98c7',
                                            })}>
                                                <h3 className="innerHeading">{value}%</h3>
                                                <span>Content Analysis</span> 
                                            </CircularProgressbarWithChildren>}
                                        </ProgressProvider> 
                                        <button onClick={() => ShowMoreDetails()} data-bs-toggle="modal" data-bs-target="#MoreContentsModal" className="theme-btn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M0 12l9-8v6h15v4h-15v6z"/></svg></button>
                                    </div>
                                    <div className="progBlk"> 
                                        <ProgressProvider valueStart={0} valueEnd={valueEnd}>
                                            {value => <CircularProgressbarWithChildren 
                                                strokeWidth={5}
                                                value={value} 
                                                // text={`${value}%`} 
                                                styles={buildStyles({ 
                                                    // Text size
                                                    textSize: '16px',

                                                    // How long animation takes to go from one percentage to another, in seconds
                                                    pathTransitionDuration: 2,
                    
                                                    // Colors
                                                    pathColor: valueEnd <= 30 ? `red` : "`rgba(62, 152, 199, 100)`",
                                                    textColor: '#f88',
                                                    trailColor: 'rgb(43 36 109)',
                                                    backgroundColor: '#3e98c7',
                                                })}>
                                                <h3 className="innerHeading">{value}%</h3>
                                                <span>Blockchain Analysis</span>
                                            </CircularProgressbarWithChildren>}
                                        </ProgressProvider> 
                                        <button onClick={() => ShowMoreDetails()} data-bs-toggle="modal" data-bs-target="#MoreContentsModal" className="theme-btn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M0 12l9-8v6h15v4h-15v6z"/></svg></button>
                                    </div>
                                    <div className="progBlk">
                                        <ProgressProvider valueStart={0} valueEnd={valueEnd}>
                                            {value => <CircularProgressbarWithChildren 
                                            strokeWidth={5}
                                            value={value} 
                                            // text={`${value}%`} 
                                            styles={buildStyles({ 
                                                // Text size
                                                textSize: '16px',

                                                // How long animation takes to go from one percentage to another, in seconds
                                                pathTransitionDuration: 2,
                
                                                // Colors
                                                pathColor: valueEnd <= 30 ? `red` : "`rgba(62, 152, 199, 100)`",
                                                textColor: '#f88',
                                                trailColor: 'rgb(43 36 109)',
                                                backgroundColor: '#3e98c7',
                                            })}>
                                                <h3 className="innerHeading">{value}%</h3>
                                                <span>Market Sentiment</span>
                                            </CircularProgressbarWithChildren>}
                                        </ProgressProvider>  
                                        <button onClick={() => ShowMoreDetails()} data-bs-toggle="modal" data-bs-target="#MoreContentsModal" className="theme-btn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M0 12l9-8v6h15v4h-15v6z"/></svg></button>
                                    </div>
                                    <div className="progBlk"> 
                                        <ProgressProvider valueStart={0} valueEnd={valueEnd}>
                                            {value => <CircularProgressbarWithChildren 
                                            strokeWidth={5}
                                            value={value} 
                                            // text={`${value}%`} 
                                            styles={buildStyles({ 
                                                // Text size
                                                textSize: '16px',

                                                // How long animation takes to go from one percentage to another, in seconds
                                                pathTransitionDuration: 2,
                
                                                // Colors
                                                pathColor: valueEnd <= 30 ? `red` : "`rgba(62, 152, 199, 100)`",
                                                textColor: '#f88',
                                                trailColor: 'rgb(43 36 109)',
                                                backgroundColor: '#3e98c7',
                                            })}>
                                                <h3 className="innerHeading">{value}%</h3>
                                                <span>Global Score</span>
                                            </CircularProgressbarWithChildren>}
                                        </ProgressProvider> 
                                    </div>
                                </div> 
                                <h3>Our Opinion</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptas consequatur vero id distinctio nam doloribus perspiciatis quo expedita accusantium excepturi, debitis error rerum fuga aperiam explicabo adipisci vitae provident.</p>
                            </div>
                            : ""}




                        </ContentBlk>   
                    </div>
                </div> 
            </div> 

            <div class="modal fade" id="MoreContentsModal" tabindex="-1" aria-labelledby="MoreContentsModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="MoreContentsModalLabel">More Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h4>More details About this</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsum quam quisquam reprehenderit autem facere. Odit aspernatur cum corporis eligendi exercitationem quidem quae molestias at voluptate modi a est tempore delectus earum ipsum sit, expedita maiores ipsa eveniet. Quod eos placeat vitae rerum. Qui provident ullam officia molestias exercitationem ducimus vel rem accusantium quo, veritatis recusandae dicta dolorum doloribus nisi quibusdam illum explicabo error facere quam minima distinctio. Placeat iure reprehenderit nam? Fuga quaerat quam, at molestiae dolor libero quis veniam commodi perferendis nihil deleniti voluptatibus quidem consectetur temporibus dolore. Aliquam provident vero maxime quasi perferendis, nihil perspiciatis est eum.</p>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default AntiScamAi;