import React, { useState, useEffect } from 'react';

export default function(props){
  const [count, setCount] = useState(10)

  useEffect(() => {

  }, [])

  const handleCount = ()=>{
    setCount(count + 1)
  }
  return (
    <div>
       <h1 onClick={handleCount}>count: {count}</h1>
    </div>
  )
}