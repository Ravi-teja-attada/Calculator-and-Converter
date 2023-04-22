import React, { useState } from "react";
import Calculator from "./Components/Calculator";
import Scientific from "./Components/Scientific";
import Converter from "./Components/Converter";
import Menu from "./Components/Menu";


function App(){
  const [box, setBox] = useState(<Calculator />);

  function Container(e){
    if (e.target.innerText === "Converter"){
      setBox(<Converter />)
    }else if(e.target.innerText==="Scientific"){
      setBox(<Scientific />)
    } else if(e.target.innerText==="Standard"){
      setBox(<Calculator />)
    }
  }
  
  return (
    <div>
      <div className="menu">
        <div className="bar standard" onClick={Container}>Standard</div>
        
        <div className="bar converter" onClick={Container}>Converter</div>
      </div>
      {box}
    </div>
  );
}
  


export default App;
