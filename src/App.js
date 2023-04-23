import React, { useState } from "react";
import Calculator from "./Components/Calculator";

import Converter from "./Components/Converter";



function App(){
  const [box, setBox] = useState(<Calculator />);
  const [convColor, setConvColor] = useState({
    backgroundColor: "white"
  });
  const [standColor, setStandColor] = useState({backgroundColor: "orange"})


  function Convert(){
    
  }
  function Container(e){
    if (e.target.innerText === "Converter"){
      setBox(<Converter />)
      setConvColor({backgroundColor: "orange"})
      setStandColor({backgroundColor: "white"})
    } else if(e.target.innerText==="Standard"){
      setBox(<Calculator />)
      setConvColor({backgrounColor: "white"})
      setStandColor({backgroundColor: "orange"})
    }
  }
  
  return (
    <div>
      <div className="menu">
        <div className="bar standard" onClick={Container} style={standColor} >Standard</div>
        
        <div className="bar converter" onClick={Container} style={convColor}>Converter</div>
      </div>
      {box}
    </div>
  );
}
  


export default App;
