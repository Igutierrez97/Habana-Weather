import React, { useEffect, useState } from 'react';
import Clock from "react-clock"
import 'react-clock/dist/Clock.css';

function Reloj(){
    const [value, setValue] = useState(new Date())
    
    useEffect(() => {
      const interval = setInterval(()=>setValue(new Date()), 1000)

      return ()=>{
        clearInterval(interval);
      };
    }, [])
  
    return(
        <div className='dark:bg-slate-600 rounded-full'>
            <Clock value={value}  size={150} renderNumbers={false}/>
        </div>
    )
}

export default Reloj