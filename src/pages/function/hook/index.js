import React, { useState, useEffect, useLayoutEffect, useMemo, useCallback } from 'react';

export default function(props){
  const [count, setCount] = useState(10)
  const [text, setText] = useState('text-demo')
  //const [state, setState] = useState()


  //useEffect api 异步相关操作 可多个
  async function demo1(){
    console.log('demo1 async')
  }

  useEffect(() => {
    fetch('/api/getLists')
    console.log('useEffect')//支持异步

    async function demo(){
      console.log('demo async')
    }
    demo()//不需要await
    demo1()
  }, [count]) //参数[] 只执行一次 

  //
  useEffect(() => {
    console.log('useEffect 2')
  }, [])

  //useLayoutEffect api 操作dom 改变显示效果 
  useLayoutEffect(() => {
    console.log('useLayoutEffect')
  }, [])

  ////////

  // const handleCount = ()=>{
  //   setCount(count + 1)
  // }

  const noCacheText = ()=>{
    console.log('text changed')
    return text
  }   

  //useMeno, useCallback 缓存 性能优化 返回经过缓存的值
  const memoText = useMemo(()=>{
    console.log('text changed2')
    return text
  }, [text])

  const handleCount = useCallback(()=>{
      console.log('count changed')
      setCount(count + 1)
  }, [count])

  return (
    <div>
       <h1 onClick={handleCount}>count: {count}</h1>
       {/* <h1>text:{noCacheText()}</h1> */}
       <h1>text:{memoText}</h1>
    </div>
  )
}