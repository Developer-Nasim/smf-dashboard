import Header from "./assets/component/header";
import Dasboard from "./assets/component/pages/dasboard";
import { Routes, Route } from "react-router-dom"
import AntiScamAi from "./assets/component/pages/antiScamAi"
import SmartDex from "./assets/component/pages/smartDex"
import SmartStack from "./assets/component/pages/smartStack"


function App() {
  return (
    <>
    <Header />
    <Routes> 
      <Route path="/" element={ <Dasboard/> } /> 
      <Route path="/antiscamai" element={ <AntiScamAi/> } /> 
      <Route path="/smartdex" element={ <SmartDex/> } />
      <Route path="/smartstack" element={ <SmartStack/> } />
    </Routes>
    </>
  );
}

export default App;
