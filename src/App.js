import { useState, useReducer } from "react";
import EffectHook from "./EffectHook";
import RefHook from "./RefHook";
import MemoHook from "./MemoHook";
import ContextHook from "./contextHook/ContextHook";
import ReducerHook from "./ReducerHook";
import CustomHook from "./CustomHook";
import useCounter from "./useCounter";

function App() {
  // const [flag, setFlag] = useState(true);
  const [counter, increment, decrement, reset] = useCounter(0);
  return (
    <div className='main'>
      {/* <div>
        <button onClick={() => setFlag(!flag)}>Toggle</button>
      </div> */}
      {/* <div>{flag && <EffectHook></EffectHook>}</div> */}
      {/* <RefHook></RefHook> */}
      {/* <MemoHook></MemoHook> */}
      {/* <ContextHook></ContextHook> */}
      {/* useReducer code */}
      {/* <ReducerHook></ReducerHook> */}
      <h2>{counter}</h2>
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
      </div>
      <CustomHook></CustomHook>
    </div>
  );
}

export default App;
