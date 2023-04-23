import React, {useState, useEffect} from "react";
import "./Stylesheets/Length.css";

function BMI(){
  let w,h;
  const heightUnits = ["Centimeter", "Meter", "Foot", "Inch"]
  const weightUnits = ["Kilogram", "Pound"]
  const numbers = ['7','8', '9','4','5','6','1','2','3']
 
  const [unit1, setUnit1] = useState("Centimeter")
  const [unit2, setUnit2] = useState("Kilogram")
  const [input1, setInput1] = useState("0")
  const [input2, setInput2] = useState("0")
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)
  const [checkAns, setCheckAns] = useState(false);
  const [bmi, setBmi ] = useState(0);
  const [customColor, setCustomColor] = useState({color:''});
  const [customMessage, setCustomMessage] = useState('');
  const [bmiStyles, setBmiStyles] = useState({
    padding: "0 2.5rem",
    gridColumn: "1/-1",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)"
  });



    function reset(){
      setInput1("0");
      setInput2("0");
      setCheck1(false)
      setCheck2(false)
      setCheckAns(false)
    }

    function check(){
      
      if(unit1==="Centimeter"){
        w=100
      }else if(unit1==="Foot"){
        w=3.2084
      }else if(unit1==="Inch"){
        w=39.37
      }else{w=1}

      if(unit2==="Pound"){
        h=2.204622
      }else{h=1}

      let bmiValue = parseFloat(input2)*w/Math.pow(parseFloat(input1)*h,2)*100
       setBmi(String(bmiValue).slice(0,4));

       if(bmiValue>16.5 && bmiValue<18.5){
        setCustomColor({color:'blue'});
        setCustomMessage('You are underweight')
       }else if(bmiValue>=18.5 && bmiValue<=25){
        setCustomColor({color: 'green'})
        setCustomMessage('You have normal weight')
       }else if(bmiValue>25 && bmiValue<=40){
        setCustomColor({color:'red'})
        setCustomMessage('You are over weight')
       }

      setCheckAns(true);

    }

   const Flop = ()=>{
      if (checkAns) {
        return (<div style={{gridColumn: "1/-1",
    display: "grid"}}><h1 style={customColor}>Your BMI is {bmi}</h1>
        <h2>{customMessage}</h2></div>)
      } else {
        return <div>
        <div className="screen1"><input onClick={() => {setCheck1(true); setCheck2(false)}} value={input1}></input>
  <div class="dropdown unit">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {unit1}</button>
    <ul class="dropdown-menu">
    {heightUnits.map((item)=><li><div class="dropdown-item" onClick={changeUnit1}>{item}</div></li>)}
    </ul>
  </div></div>

  <div className="screen2"><input onClick={() => {setCheck2(true); setCheck1(false)}} value={input2}></input>
  <div class="dropdown unit">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {unit2}</button>
    <ul class="dropdown-menu">
    {weightUnits.map((item)=><li><div class="dropdown-item" onClick={changeUnit2}>{item}</div></li>)}
    </ul>
  </div></div>
        </div>
      }
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
      }else if(check2){
        if(input2==="0"){setInput2(e.target.innerText)
        }else{setInput2(input2 + e.target.innerText)}
      }
    }

    return <div className="area">
          <div style={bmiStyles}>
            <Flop />
          </div>
        
          {numbers.map((item)=><div className="bn black" onClick={inputNum}>{item}</div>)}
          <div className="line4">
          <div className="bn equal" onClick={check}>Go</div>
          <div className="bn black" onClick={inputNum}>.</div>
          <div className="bn black" onClick={inputNum}>0</div>
          <div className="bn equal" onClick={reset}>AC</div>
          </div>
          
    </div>
}

export default BMI;