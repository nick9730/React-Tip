import { useState } from "react";


function App() {
  const [value,setValue] = useState()
  const [valSel,setValSel] = useState(0) 
  const [ show , setShow] = useState(false)
  const [valSel1,setVal1] = useState(0)
  const Reset = ()=>
  {
    setValSel(0)
    setValue('')
    setVal1(0)
    setShow(false)
  }
  

 
  return (
    <div className="App">
       <Bill  setShow= {setShow} val = {value}  setVal= {setValue}/>
       <Tip  valtip={valSel} fum={setValSel}>how did your friend like oure serc</Tip>
       <Tip  valtip={valSel1} fum={setVal1}>how did your friend like oure serc</Tip>

       
      

       <Footer  valSel1={valSel1}  show={show} valSel={valSel} val = {value}  setVal= {setValue} setValSel={setValSel} />
       <button onClick={Reset}>Reset</button>
    </div>
    
  );
}

function Bill( {val,setVal,setShow}){




  return(
    <div >

      <p>How much was the bill </p><input type="text" value={val}   onChange={(e)=>{ setVal(e.target.value)
      setShow(true)} }></input>
      
    </div>

    )
}


function Tip({valtip,fum, children} ){
  return(<div>
 {children}
    <select value={valtip} onChange={(e)=>fum(Number(e.target.value))}>
      <option value='0'>Dissatisfied 0%</option>
      <option value='5'>It was okay 5%</option>
      <option value= '20'> Absolutely amazing 20%</option>

    </select> 
    
  </div>)
}

function Footer({val,valSel,show,valSel1}){

   
   
  return(
    <div>
    
      { show && <div>
        <p>  {(val!==undefined && val!==null) || valSel!==0 || valSel1!==0   ? 
         `You will pay ${Number(val)+Number(val*valSel/100)+Number(val*valSel1/100)}
          (${val} +  ${Number(val*valSel1/100) + Number(val*valSel/100)} Tip) ` : ''  } </p>
      
          </div>
}
</div>
  
   
  
  )
}


export default App;
