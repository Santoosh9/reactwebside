import React, { useState } from 'react'

const Counter = () => {

    let [count, setCount] = useState(100)

    const increase_count =()=>{
        setCount(++count)
    }

    

  return (
    <div>count:{count}
    <button className='btn btn-warning' onClick={increase_count}>Incresed Count</button>
    <button  onClick={()=> {return setCount(++count)}}>Incresed Count</button>
    <button  onClick={()=> {return setCount(--count)}}>Decrese Count</button>
    <button  onClick={()=> {return setCount(0)}}>reset</button>
    </div>
    
  )
}

export default Counter