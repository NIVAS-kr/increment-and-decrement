import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  function incrementHandler() {
    setCount(count + 1);
  }
  function decrementHandler() {
    setCount(count - 1);
  }
  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="w-[100vw]  h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-2xl">
        Increment & decrement
      </div>
      <div className="bg-white flex justify-center gap-12 py-3 rounder-sm text-[25px] text-[#344151]">
        <button onClick={incrementHandler}>+</button>
        <div> {count}</div>
        <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={resetHandler}> Reset</button>
    </div>
  );
}

export default App;
