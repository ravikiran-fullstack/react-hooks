import React, { useState, useMemo } from "react";

const MemoHook = () => {
  /*
  
  1) To Optimize expensive operations
  2) To solve the referential equality

  */

  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const result = useMemo(() => {
    return factorial(counter);
  }, [counter]);

  return (
    <div>
      <h1>
        Factorial of {counter} is <span>{result}</span>
      </h1>
      <div>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>

      <hr />
      <hr />

      <div>
        <div>Enter Name</div>
        <input
          type='text'
          placeholder='enter name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <DisplayName name={name}></DisplayName>
      </div>
    </div>
  );
};

const DisplayName = React.memo(({ name }) => {
  console.log("name", name);
  return <p>name is {name}</p>;
});

const factorial = (n) => {
  let i = 0;
  while (i < 100000000) {
    i++;
  }

  if (n < 0) {
    return -1;
  }

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};

export default MemoHook;
