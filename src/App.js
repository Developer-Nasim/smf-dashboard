import Header from "./assets/component/header";
import Dasboard from "./assets/component/pages/dasboard";
import { Routes, Route } from "react-router-dom"
import AntiScamAi from "./assets/component/pages/antiScamAi"
import ComingSoon from "./assets/component/helper/comingsoon";
import SmartDex from "./assets/component/pages/smartDex"
import SmartStack from "./assets/component/pages/smartStack"


function App() {
  return (
    <div className="dasboard_contents_here">
    <Header />
    <div className="the_contents"> 
      <Routes> 
        <Route path="/" element={ <Dasboard/> } /> 
        <Route path="/antiscamai" element={ <AntiScamAi/> } /> 
        <Route path="/smartdex" element={ <SmartDex/> } />
        <Route path="/smartstack" element={ <SmartStack/> } />
        <Route path="/whalesaI" element={ <ComingSoon/> } />
        <Route path="/tradingbotaI" element={ <ComingSoon/> } />
        <Route path="/docs" element={ <ComingSoon/> } />
      </Routes>
    </div>
 
    </div>
  );
}

export default App;
