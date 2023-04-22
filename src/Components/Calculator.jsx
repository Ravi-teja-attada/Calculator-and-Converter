import React, { useState, useEffect } from "react";
import "./Stylesheets/Calculator.css";



function Calculator() {
  const [prevNum, setPrevNum] = useState("");
  const [curNum, setCurNum] = useState("");
  const [operator, setOperator] = useState(null);
  const [input, setInput] = useState("0");
  const [total, setTotal] = useState(false);

  let reset = () => {
    setPrevNum("");
    setCurNum("");
    setOperator(null);
    setInput("0");
    setTotal(false);
  };

  let percentage = () => {
    if(curNum){
    prevNum ? setCurNum(String(parseFloat(prevNum) / 100 * curNum))
      : setCurNum(String(parseFloat(curNum) / 100));
    }else if(prevNum){
      setCurNum(String(parseFloat(prevNum)/100));
    }
  }

  let operation = (e) => {
    if (curNum === "" && prevNum == "") return;
    setTotal(false);
    if (prevNum !== "") {
      equals();
      setTotal(false);
    } else if(prevNum === "" && curNum !== ""){
      setPrevNum(curNum);
      setCurNum("");
    };
    setOperator(e.target.innerText);
  }

  let inputNum = (e) => {
    if (curNum.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setTotal(false)
      setPrevNum("")
    }

    (curNum !== "" && curNum !== "0") ? setCurNum((pre) => pre + e.target.innerText) : setCurNum(e.target.innerText);
  };

  useEffect(() => { setInput(curNum) }, [curNum]);
  useEffect(() => { setInput("0") }, []);

  let minusPlus = () => {
    if (curNum) {
      setCurNum(String(-1 * parseFloat(curNum)));
    }
  };

  let equals = (e) => {
    if (total) return;
    if (curNum === "") return;
    let cal
    switch (operator) {
      case "/":
        cal = String(parseFloat(prevNum) / parseFloat(curNum))
        break;
      case "*":
        cal = String(parseFloat(prevNum) * parseFloat(curNum))
        break;
      case "-":
        cal = String(parseFloat(prevNum) - parseFloat(curNum))
        break;
      case "+":
        cal = String(parseFloat(prevNum) + parseFloat(curNum))
        break;
      default:
        return;
    };
    setTotal(true);
    setPrevNum(cal);
    setCurNum("");
    setOperator(null);
  };

  let back = () => {
    if(total) return;
    if(curNum !== "") {
      setCurNum(curNum.slice(0, curNum.length-1))
    }
  }


    return <div className="container">
    <div className="screen">{input !== "" ? input : prevNum}</div>
    <div className="bn orange" onClick={reset}>AC</div>
    <div className="bn orange" onClick={back}>x</div>
    <div className="bn orange" onClick={percentage}>%</div>
    <div className="bn orange" onClick={operation}>/</div>
    <div className="bn black" onClick={inputNum}>7</div>
    <div className="bn black" onClick={inputNum}>8</div>
    <div className="bn black" onClick={inputNum}>9</div>
    <div className="bn orange" onClick={operation}>*</div>
    <div className="bn black" onClick={inputNum}>4</div>
    <div className="bn black" onClick={inputNum}>5</div>
    <div className="bn black" onClick={inputNum}>6</div>
    <div className="bn orange" onClick={operation}>-</div>
    <div className="bn black" onClick={inputNum}>1</div>
    <div className="bn black" onClick={inputNum}>2</div>
    <div className="bn black" onClick={inputNum}>3</div>
    <div className="bn orange" onClick={operation}>+</div>
    <div className="bn black" onClick={minusPlus}>+/-</div>
    <div className="bn black" onClick={inputNum}>0</div>
    <div className="bn black" onClick={inputNum}>.</div>
    <div className="bn equal" onClick={equals}>=</div>
  </div>
}

export default Calculator;