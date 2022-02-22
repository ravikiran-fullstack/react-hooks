import React, { useState, useRef, useEffect } from "react";

/*
  Use Cases of useRef Hook
  1) To reference a DOM element
  2) For storing previous state
  3) Hold mutable value prevent re-render of component
*/

const RefHook = () => {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);

  const inputElement = useRef("");
  const previousCounterRef = useRef();

  useEffect(() => {
    previousCounterRef.current = counter;
  }, [counter]);

  console.log(inputElement);

  const resetInput = () => {
    setName("");
    inputElement.current.focus();
    console.log(inputElement.current.value);
    // inputElement.current.value = "tensorFlow";
  };
  return (
    <div>
      <div>
        <input
          ref={inputElement}
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete='off'
        />
        <button onClick={resetInput}>Reset</button>
      </div>
      {name && <div>Name is {name}</div>}

      <div>Counter {counter}</div>
      {previousCounterRef.current && previousCounterRef.current}
      <div>
        <button onClick={(e) => setCounter(Math.ceil(Math.random() * 100))}>
          Generate Random Number
        </button>
      </div>
    </div>
  );
};

export default RefHook;
