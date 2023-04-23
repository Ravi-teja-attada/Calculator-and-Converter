import React, {useState, useEffect} from "react";
import "./Stylesheets/Length.css";

function Data(){
  const units = ["Byte B", "Kilobyte KB", "Megabyte MB", "Gigabyte GB", "Terabyte TB", "Petabyte PB"]
  const numbers = ['7','8', '9','4','5','6','1','2','3','.','0']
  const [m, setM] = useState(1);
  const [n, setN] = useState(1);
  const [unit1, setUnit1] = useState("Megabyte MB")
  const [unit2, setUnit2] = useState("Megabyte MB")
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
        case(0): cal=Math.pow(2,-20);
        break;
        case(1): cal=Math.pow(2,-10);
        break;
        case(2): cal=1;
        break;
        case(3): cal=Math.pow(2,10);
        break;
        case(4): cal=Math.pow(2,20);
        break;
        case(5): cal=Math.pow(2,30);
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
            {units.map((item)=><li><div class="dropdown-item" onClick={changeUnit1}>{item}</div></li>)}
            
            </ul>
          </div></div>
        <div className="screen2"><input onClick={() => {setCheck2(true); setCheck1(false)}} value={input2}></input>
          <div class="dropdown unit">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {unit2}</button>
            <ul class="dropdown-menu">
            {units.map((item)=><li><div class="dropdown-item" onClick={changeUnit2}>{item}</div></li>)}
            </ul>
          </div></div>
          {numbers.map((item)=><div className="bn black" onClick={inputNum}>{item}</div>)}
        <div className="bn equal" onClick={reset}>AC</div>
    </div>
}

export default Data;