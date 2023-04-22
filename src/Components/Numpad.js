import React from "react";


function Numpad(props){
    return <div className="container">
         <div className="bn black" onClick={props.inputNum}>7</div>
        <div className="bn black" onClick={props.inputNum}>8</div>
        <div className="bn black" onClick={props.inputNum}>9</div>
        
        <div className="bn black" onClick={props.inputNum}>4</div>
        <div className="bn black" onClick={props.inputNum}>5</div>
        <div className="bn black" onClick={props.inputNum}>6</div>
        
        <div className="bn black" onClick={props.inputNum}>1</div>
        <div className="bn black" onClick={props.inputNum}>2</div>
        <div className="bn black" onClick={props.inputNum}>3</div>
        
        
        <div className="bn black" onClick={props.inputNum}>.</div>
        <div className="bn black" onClick={props.inputNum}>0</div>
        <div className="bn equal" onClick={props.reset}>AC</div>
    </div>
}

export default Numpad;