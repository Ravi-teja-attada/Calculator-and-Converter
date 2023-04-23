import React, { useState } from "react";
import Calculator from "./Components/Calculator";
import "./Components/Stylesheets/Converter.css";
import Length from "./Components/Length"
import Area from "./Components/Area"
import Volume from "./Components/Volume"
import Temperature from "./Components/Temperature"
import Time from "./Components/Time"
import BMI from "./Components/BMI"
import Mass from "./Components/Mass"
import Speed from "./Components/Speed";
import Data from "./Components/Data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faRuler, faTemperatureHalf, faScaleBalanced, faServer, faGaugeSimpleHigh, faClock, faChild } from '@fortawesome/free-solid-svg-icons';
import {faSquare} from '@fortawesome/free-regular-svg-icons';


function App(){
  const [box, setBox] = useState(<Calculator />);
  const [convColor, setConvColor] = useState({
    backgroundColor: "white"
  });
  const [standColor, setStandColor] = useState({backgroundColor: "orange"})


  let Converter =  ()=>{
    return <div className="convert">
    <div className="bn" onClick={Container}><FontAwesomeIcon icon={faChild} className="icon"/>BMI</div>
    <div className="bn" onClick={Container}><FontAwesomeIcon icon={faRuler} className="icon"/>Length</div>
    <div className="bn" onClick={Container}><FontAwesomeIcon icon={faSquare} className="icon"/>Area</div>
    <div className="bn" onClick={Container}><FontAwesomeIcon icon={faCube} className="icon"/>Volume</div>
    <div className="bn" onClick={Container}><FontAwesomeIcon icon={faTemperatureHalf} className="icon"/>Temperature</div>
    <div className="bn" onClick={Container}><FontAwesomeIcon icon={faClock} className="icon"/>Time</div>
    <div className="bn" onClick={Container}><FontAwesomeIcon icon={faScaleBalanced} className="icon"/>Mass</div>
    <div className="bn" onClick={Container}><FontAwesomeIcon icon={faGaugeSimpleHigh} className="icon"/>Speed</div>
    <div className="bn" onClick={Container}><FontAwesomeIcon icon={faServer} className="icon"/>Data</div>
    </div>
  }
  function Container(e){
    if (e.target.innerText === "Converter"){
      setBox(<Converter />)
      setConvColor({backgroundColor: "orange"})
      setStandColor({backgroundColor: "white"})
    } else if(e.target.innerText==="Standard"){
      setBox(<Calculator />)
      setConvColor({backgrounColor: "white"})
      setStandColor({backgroundColor: "orange"})
    } else if(e.target.innerText==="BMI"){
      setBox(<BMI />)
    }else if(e.target.innerText==="Length"){
      setBox(<Length />)
    }else if(e.target.innerText==="Area"){
      setBox(<Area />)
    }else if(e.target.innerText==="Volume"){
      setBox(<Volume />)
    }else if(e.target.innerText==="Mass"){
      setBox(<Mass />)
    }else if(e.target.innerText==="Temperature"){
      setBox(<Temperature />)
    }else if(e.target.innerText==="Time"){
      setBox(<Time />)
    }else if(e.target.innerText==="Speed"){
      setBox(<Speed />)
    }else if(e.target.innerText==="Data"){
      setBox(<Data />)
    }
  }
  
  return (
    <div>
      <div className="menu">
        <div className="bar standard" onClick={Container} style={standColor} >Standard</div>
        
        <div className="bar converter" onClick={Container} style={convColor}>Converter</div>
      </div>
      {box}
    </div>
  );
}
  


export default App;
