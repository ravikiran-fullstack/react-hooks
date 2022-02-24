import React, { useState } from "react";
import { CounterContext } from "./CounterContext";
import FunctionComponent from "./FunctionComponent";

const ContextHook = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className='main'>
      <div style={{ display: "block" }}>
        <h1>{counter}</h1>
      </div>
      <div>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          Decrement
        </button>
      </div>
      <div style={{ display: "block" }}>
        <CounterContext.Provider value={{ value: counter, setCounter }}>
          <FunctionComponent counter={counter}></FunctionComponent>
        </CounterContext.Provider>
      </div>
    </div>
  );
};

export default ContextHook;
