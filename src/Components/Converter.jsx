import React, {useState} from "react";
import "./Stylesheets/Converter.css";
import Length from "./Length"
import Area from "./Area"
import Volume from "./Volume"
import Temperature from "./Temperature"
import Time from "./Time"
import BMI from "./BMI"
import Mass from "./Mass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faRuler, faTemperatureHalf, faScaleBalanced, faCoins, faRepeat, faClock, faChild } from '@fortawesome/free-solid-svg-icons';
import {faSquare} from '@fortawesome/free-regular-svg-icons';



function Converter (){
    let List = <div className="convert">
    <div className="bn" onClick={change}><FontAwesomeIcon icon={faChild} className="icon"/>BMI</div>
    <div className="bn" onClick={change}><FontAwesomeIcon icon={faRuler} className="icon"/>Length</div>
    <div className="bn" onClick={change}><FontAwesomeIcon icon={faSquare} className="icon"/>Area</div>
    <div className="bn" onClick={change}><FontAwesomeIcon icon={faCube} className="icon"/>Volume</div>
    <div className="bn" onClick={change}><FontAwesomeIcon icon={faTemperatureHalf} className="icon"/>Temperature</div>
    <div className="bn" onClick={change}><FontAwesomeIcon icon={faClock} className="icon"/>Time</div>
    <div className="bn" onClick={change}><FontAwesomeIcon icon={faScaleBalanced} className="icon"/>Mass</div>
    <div className="bn" onClick={change}><FontAwesomeIcon icon={faRepeat} className="icon"/>Numerical System</div>
    <div className="bn" onClick={change}><FontAwesomeIcon icon={faCoins} className="icon"/>Currency</div>
    </div>

    const [box2, setBox2] = useState(List);

    function change(e){
        if(e.target.innerText==="Mass"){
            setBox2(<Mass />)
        }else if(e.target.innerText==="BMI"){
            setBox2(<BMI />)
        }else if(e.target.innerText==="Time"){
            setBox2(<Time />)
        }else if(e.target.innerText==="Temperature"){
            setBox2(<Temperature />)
        }else if(e.target.innerText==="Volume"){
            setBox2(<Volume />);
        }else if(e.target.innerText === "Length"){
            setBox2(<Length />)
        }else if(e.target.innerText==="Area"){
            setBox2(<Area />)
        }else{
            setBox2(List)
        }
    }
    return <div>{box2}</div>;
}

export default Converter;