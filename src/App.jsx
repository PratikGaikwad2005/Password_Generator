import { useState } from 'react'
import {LC, NC, SC, UC} from './Data/Char.jsx'
import { ToastContainer, toast } from 'react-toastify';
import './App.css'



function App() {
 
  const [UpperCase , setUpperCase] = useState(false)
  const [LowerCase , setLowerCase] = useState(false)
  const [Number , setNumber] = useState(false)
  const [Symblos , setSymblos] = useState(false)
  const [PassLength , setPassLength] = useState(0)
  const [fPass , setfPass] = useState('')



  let HandlePass = ()=>{
    let final  =""
    let pass = ''
    if(UpperCase || LowerCase || Number || Symblos){
      if(UpperCase) pass += UC
      if(LowerCase) pass += LC
      if(Number) pass += NC
      if(Symblos) pass += SC
      // console.log(pass)
      for(let i=0 ;i< PassLength ;i++){
        final += pass.charAt(Math.floor(Math.random()*pass.length))
      }
      setfPass(final)
     }
     else{
      toast.error("Please select at least one option")
     }
  }

  let copyPass = ()=>{
    navigator.clipboard.writeText(fPass)
  }

  return (
    <>
     <ToastContainer />
      <div className='container'>

      <div className = "passBox">
        <h1> Password Generator </h1>
        <div className='genertor'>
        <input type='text' readOnly value={fPass} /><button onClick={copyPass}>Copy</button>
        </div >
        <div className='passLength'>
          <label>Password Length</label>
          <input type='number'max={12} min={8} 
          onChange={(event)=>{setPassLength(event.target.value)}} />
        </div>
        <div className='passType'>
          <div className='passLength' >
          <label>Include Uppercase</label>
          <input type='checkbox' checked = {UpperCase} onChange={()=>setUpperCase(!UpperCase)}/>
          </div>
          <div className='passLength'>
          <label>Include Lowercase</label>
          <input type='checkbox' checked = {LowerCase} onChange={()=>setLowerCase(!LowerCase)} />
          </div>
          <div className='passLength'>
          <label>Include Numbers</label>
          <input type='checkbox' checked = {Number} onChange={()=>setNumber(!Number)} />
          </div>
          <div className='passLength'>
          <label>Include Special Characters</label>
          <input type='checkbox' checked = {Symblos} onChange={()=>setSymblos(!Symblos)} />
          </div>
        </div>
        <div className='btn' onClick={HandlePass}>
          <button>Generate</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
