import React, {useState, useEffect} from "react";
import "./Stylesheets/Length.css";

function Temperature(){
  const units = ["Celcius", "Fahrenheit", "Kelvin"]
  const [m, setM] = useState(0);
  const [n, setN] = useState(2);
  const [unit1, setUnit1] = useState("Celcius")
  const [unit2, setUnit2] = useState("Kelvin")
  const [input1, setInput1] = useState("0")
  const [input2, setInput2] = useState("273.15")
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)
    
    function reset(){
      setInput1("0");
      setInput2("0");
      setCheck1(false)
      setCheck2(false)
    }

    function changeUnit1(e){
      setUnit1(e.target.innerText)
      setM(units.indexOf(e.target.innerText))
     
    }
    function changeUnit2(e){
      setUnit2(e.target.innerText)
      setN(units.indexOf(e.target.innerText))
    }

    function inputNum(e){
      if(input1.includes(".") && e.target.innerText === ".") return;
      if(check1){
        if(input1==="0"){setInput1(e.target.innerText)
        }else{setInput1(input1 + e.target.innerText)}
      }
    }

    useEffect(() => {
        if(m===n){
            setInput2(input1)
        }else if(m===0){
            switch (n) {
                case 1: setInput2(String(32+1.8*parseFloat(input1)))  
                break;
                case 2: setInput2(String(273.15+parseFloat(input1)))
                break;
            }
        }else if(m===1){
            switch(n){
                case 0: setInput2(String((parseFloat(input1)-32)/1.8))  
                break;
                case 2: setInput2(String(273.15+(parseFloat(input1)-32)/1.8))
                break;
            }
        }else if(m===2){
            switch(n){
                case 0: setInput2(String(parseFloat(input1)-273.15))  
                break;
                case 1: setInput2(String((parseFloat(input1)-273.15)*1.8+32))
                break;
            }
        }
    },[input1,m,n])
    

    return <div className="area">
        <div className="screen1"><input onClick={() => {setCheck1(true); setCheck2(false)}} value={input1}></input>
          <div class="dropdown unit">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {unit1}</button>
            <ul class="dropdown-menu">
            <li><div class="dropdown-item" onClick={changeUnit1}>Celcius</div></li>
            <li><div class="dropdown-item" onClick={changeUnit1}>Fahrenheit</div></li>
            <li><div class="dropdown-item" onClick={changeUnit1}>Kelvin</div></li>
            </ul>
          </div></div>
        <div className="screen2"><input onClick={() => {setCheck2(true); setCheck1(false)}} value={input2}></input>
          <div class="dropdown unit">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {unit2}</button>
            <ul class="dropdown-menu">
            <li><div class="dropdown-item" onClick={changeUnit2}>Celcius</div></li>
            <li><div class="dropdown-item" onClick={changeUnit2}>Fahrenheit</div></li>
            <li><div class="dropdown-item" onClick={changeUnit2}>Kelvin</div></li>
            </ul>
          </div></div>
        <div className="bn black" onClick={inputNum}>7</div>
        <div className="bn black" onClick={inputNum}>8</div>
        <div className="bn black" onClick={inputNum}>9</div>
        
        <div className="bn black" onClick={inputNum}>4</div>
        <div className="bn black" onClick={inputNum}>5</div>
        <div className="bn black" onClick={inputNum}>6</div>
        
        <div className="bn black" onClick={inputNum}>1</div>
        <div className="bn black" onClick={inputNum}>2</div>
        <div className="bn black" onClick={inputNum}>3</div>
        
        
        <div className="bn black" onClick={inputNum}>.</div>
        <div className="bn black" onClick={inputNum}>0</div>
        <div className="bn equal" onClick={reset}>AC</div>
    </div>
}

export default Temperature;