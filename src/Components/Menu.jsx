import React from "react";
import "./Stylesheets/Converter.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faRuler, faTemperatureHalf, faScaleBalanced, faCoins, faRepeat, faClock, faChild } from '@fortawesome/free-solid-svg-icons';
import {faSquare} from '@fortawesome/free-regular-svg-icons';

function Menu(){
    return <div className="convert">
    <div className="bn" ><FontAwesomeIcon icon={faRuler} className="icon"/>Length</div>
    <div className="bn" ><FontAwesomeIcon icon={faSquare} className="icon"/>Area</div>
    <div className="bn" ><FontAwesomeIcon icon={faChild} className="icon"/>BMI</div>
    <div className="bn" ><FontAwesomeIcon icon={faCube} className="icon"/>Volume</div>
    <div className="bn" ><FontAwesomeIcon icon={faTemperatureHalf} className="icon"/>Temperature</div>
    <div className="bn" ><FontAwesomeIcon icon={faClock} className="icon"/>Time</div>
    <div className="bn" ><FontAwesomeIcon icon={faScaleBalanced} className="icon"/>Mass</div>
    <div className="bn" ><FontAwesomeIcon icon={faRepeat} className="icon"/>Numerical System</div>
    <div className="bn" ><FontAwesomeIcon icon={faCoins} className="icon"/>Currency</div>
    </div>
}

export default Menu;