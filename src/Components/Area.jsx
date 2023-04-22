import React, {useState, useEffect} from "react";
import "./Stylesheets/Length.css";

function Area(){
  const units = ["SquareMillimeter", "SquareCentimeter", "SquareMeter", "SquareKilometer","Hectare", "Acre", "SquareMile", "SquareYard", "SquareFoot", "SquareInch"]
  const [m, setM] = useState(1);
  const [n, setN] = useState(1);
  const [unit1, setUnit1] = useState("SquareMeter")
  const [unit2, setUnit2] = useState("SquareMeter")
  const [input1, setInput1] = useState("0")
  const [input2, setInput2] = useState("0")
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
      setM(constant(units.indexOf(e.target.innerText)))
     
    }
    function changeUnit2(e){
      setUnit2(e.target.innerText)
      setN(constant(units.indexOf(e.target.innerText)))
    }

    function constant(i){
      let cal
      switch(i){
        case(0): cal=Math.pow(10,-6);
        break;
        case(1): cal=Math.pow(10,-4);
        break;
        case(2): cal=Math.pow(10,0);
        break;
        case(3): cal=Math.pow(10,6);
        break;
        case(4): cal=Math.pow(10,4);
        break;
        case(5): cal=4046.856;
        break;
        case(6): cal=2589988.11;
        break;
        case(7): cal=0.83612736;
        break;
        case(8): cal=0.09290304;
        break;
        case(9): cal=0.00064516;
        break;
      }
      return cal;
    }

    function inputNum(e){
      if(input1.includes(".") && e.target.innerText === ".") return;
      if(check1){
        if(input1==="0"){setInput1(e.target.innerText)
        }else{setInput1(input1 + e.target.innerText)}
      }
    }

    useEffect(() => {setInput2(String(parseFloat(input1)*m/n))},[input1,m,n])
    

    return <div className="area">
        <div className="screen1"><input onClick={() => {setCheck1(true); setCheck2(false)}} value={input1}></input>
          <div class="dropdown unit">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {unit1}</button>
            <ul class="dropdown-menu">
            <li><div class="dropdown-item" onClick={changeUnit1}>SquareMeter</div></li>
            <li><div class="dropdown-item" onClick={changeUnit1}>SquareMillimeter</div></li>
            <li><div class="dropdown-item" onClick={changeUnit1}>SquareCentimeter</div></li>
            <li><div class="dropdown-item" onClick={changeUnit1}>SquareKilometer</div></li>
            <li><div class="dropdown-item" onClick={changeUnit1}>SquareMile</div></li>
            <li><div class="dropdown-item" onClick={changeUnit1}>SquareYard</div></li>
            <li><div class="dropdown-item" onClick={changeUnit1}>SquareFoot</div></li>
            <li><div class="dropdown-item" onClick={changeUnit1}>SquareInch</div></li>
            <li><div class="dropdown-item" onClick={changeUnit1}>Hectare</div></li>
            <li><div class="dropdown-item" onClick={changeUnit1}>Acre</div></li>
            </ul>
          </div></div>
        <div className="screen2"><input onClick={() => {setCheck2(true); setCheck1(false)}} value={input2}></input>
          <div class="dropdown unit">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {unit2}</button>
            <ul class="dropdown-menu">
            <li><div class="dropdown-item" onClick={changeUnit2}>SquareMeter</div></li>
            <li><div class="dropdown-item" onClick={changeUnit2}>SquareMillimeter</div></li>
            <li><div class="dropdown-item" onClick={changeUnit2}>SquareCentimeter</div></li>
            <li><div class="dropdown-item" onClick={changeUnit2}>SquareKilometer</div></li>
            <li><div class="dropdown-item" onClick={changeUnit2}>SquareMile</div></li>
            <li><div class="dropdown-item" onClick={changeUnit2}>SquareYard</div></li>
            <li><div class="dropdown-item" onClick={changeUnit2}>SquareFoot</div></li>
            <li><div class="dropdown-item" onClick={changeUnit2}>SquareInch</div></li>
            <li><div class="dropdown-item" onClick={changeUnit2}>Hectare</div></li>
            <li><div class="dropdown-item" onClick={changeUnit2}>Acre</div></li>
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

export default Area;