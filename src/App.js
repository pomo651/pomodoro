import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const INIT_SECOND = 100;
  const [second,setSecond] = useState(INIT_SECOND);
  //useRef is for an object is persisted for the entire lifetime of the component.
  //就是说如果一个object 需要被引用多次
  let intervalRef = useRef();
// 在unmount 之后暂停倒数
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  },[]);

  const handleStart = () => {
    intervalRef.current = setInterval(() => {
      setSecond(second => {return second - 1});
      // setSecond(second => second - 1);
    },1000);
  }
  const handlePause = () => {
    clearInterval(intervalRef.current);
  }
  const handleStop = () => {
    clearInterval(intervalRef.current);
    setSecond(INIT_SECOND);
  }

  return (
    <div className="App">
      <button onClick={handleStart}>start</button>
      <button onClick={handlePause}>pause</button>
      <button onClick={handleStop}>stop</button>
      {second}
    </div>
  );
}

export default App;
