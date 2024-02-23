import { useState } from 'react'
import './App.css'

export default function Counterapp() {
    const [count, setCount] = useState(0)
  return (
    <div>
      <div>
        <a >
          <img src=".\src\assets\step-count.png" className="logo"  />
        </a>
        
      </div>
      <h1>COUNT APP</h1>
      <div className="card">


       <h1>{count}</h1> 



        <button onClick={() => setCount((count) => count + 1)}>
          <h4>+</h4>
        </button>
        
        
        <button onClick={() => setCount((count) => count - 1)}>
         <h4>-</h4> 
        </button>

       
      </div>
    </div>
  )
}


