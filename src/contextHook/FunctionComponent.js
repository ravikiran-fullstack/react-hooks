import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

const FunctionComponent = ({ counter }) => {
  const { value, setCounter } = useContext(CounterContext);
  return (
    <div>
      <br />
      <div>
        <h1>Function Component</h1>
        <button onClick={() => setCounter(value + 1)}>Increment Counter</button>
      </div>
      <br />
      <div>{counter}</div>
      {value}
      <Fchild counter={counter}></Fchild>
    </div>
  );
};

const Fchild = ({ counter }) => {
  const { value, setCounter } = useContext(CounterContext);
  return (
    <div>
      Fchild
      <button onClick={() => setCounter(value - 1)}>Decrement</button>
      {counter}
    </div>
  );
};

export default FunctionComponent;
