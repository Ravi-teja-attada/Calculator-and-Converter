import React, {useState, useEffect} from "react";
import "./Stylesheets/Length.css";

function Temperature(){
  const units = ["Decimal", "Binary","Hexa Decimal", "Octa Decimal"]
  const [decimal, setDecimal] = useState("")
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
      
    }
    function changeUnit2(e){
      setUnit2(e.target.innerText)
      
    }

    function inputNum(e){
      if(input1.includes(".") && e.target.innerText === ".") return;
      if(check1){
        if(input1==="0"){setInput1(e.target.innerText)
        }else{setInput1(input1 + e.target.innerText)}
      }
    }

    useEffect(() => {
        if(unit1 ==="Decimal"){
            setDecimal(input1)
        }else if(unit1==="Binary"){
            setDecimal(String(binaryToDecimal(parseFloat(input1))))
        }else if(unit1 === "Octa Decimal"){
            setDecimal(String(octaToDecimal(parseFloat(input1))))
        }else if(unit1==="Hexa Decimal"){
            setDecimal(String(hexaToDecimal(input1)))
        }
        
    },[input1,unit1])
    
    function binaryToDecimal(num) {
        let dec=0,i=0
        while(num>0){
            dec = dec+(num%10)*Math.pow(2,i)
            num=num/10
            i++;
        }
        return dec
    }

    function octaToDecimal(num) {
        let dec=0,i=0
        while(num>0){
            dec = dec+(num%10)*Math.pow(8,i)
            num=num/10
            i++;
        }
        return dec
    }

    

    return <div className="area">
        <div className="screen1"><input onClick={() => {setCheck1(true); setCheck2(false)}} value={input1}></input>
          <div class="dropdown unit">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {unit1}</button>
            <ul class="dropdown-menu">
            <li><div class="dropdown-item" onClick={changeUnit1}>Binary</div></li>
            <li><div class="dropdown-item" onClick={changeUnit1}>Decimal</div></li>
            <li><div class="dropdown-item" onClick={changeUnit1}>Octa Decimal</div></li>
            <li><div class="dropdown-item" onClick={changeUnit1}>Hexa Decimal</div></li>
            </ul>
          </div></div>
        <div className="screen2"><input onClick={() => {setCheck2(true); setCheck1(false)}} value={input2}></input>
          <div class="dropdown unit">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {unit2}</button>
            <ul class="dropdown-menu">
            <li><div class="dropdown-item" onClick={changeUnit2}>Binary</div></li>
            <li><div class="dropdown-item" onClick={changeUnit2}>Decimal</div></li>
            <li><div class="dropdown-item" onClick={changeUnit2}>Octa Decimal</div></li>
            <li><div class="dropdown-item" onClick={changeUnit2}>Hexa Decimal</div></li>
            </ul>
          </div></div>
        <div className="bn black" onClick={inputNum}>F</div>
        <div className="bn black" onClick={inputNum}>E</div>
        <div className="bn black" onClick={inputNum}>D</div>

        <div className="bn black" onClick={inputNum}>C</div>
        <div className="bn black" onClick={inputNum}>B</div>
        <div className="bn black" onClick={inputNum}>A</div>

        <div className="bn black" onClick={inputNum}>7</div>
        <div className="bn black" onClick={inputNum}>8</div>
        <div className="bn black" onClick={inputNum}>9</div>
        
        <div className="bn black" onClick={inputNum}>4</div>
        <div className="bn black" onClick={inputNum}>5</div>
        <div className="bn black" onClick={inputNum}>6</div>
        
        <div className="bn black" onClick={inputNum}>1</div>
        <div className="bn black" onClick={inputNum}>2</div>
        <div className="bn black" onClick={inputNum}>3</div>
        
        <div className="bn black" onClick={inputNum}>x</div>
        <div className="bn black" onClick={inputNum}>0</div>
        <div className="bn equal" onClick={reset}>AC</div>
    </div>
}

export default Temperature;