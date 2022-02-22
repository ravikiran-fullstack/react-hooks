import React from "react";
import { useState } from "useState";

const StateHook = () => {
  const [value, setValue] = useState("Ravikiran"); // cant use useState conditionally, or inside the function
  const [names, setNames] = useState([]);

  const [flag, setFlag] = useState(false);

  const changeName = () => {
    setValue("Ravikiran Yadav");
    setFlag(true);
  };

  const addNames = (e) => {
    e.preventDefault();

    setNames([...names, { id: names.length, name: value }]);
    console.log(names);
  };

  return (
    <div>
      <div>Hello {flag ? value : ""}</div>
      <button onClick={changeName}>Change name</button>
      <hr />
      <hr />
      <form onSubmit={addNames}>
        <input
          type='text'
          value={value}
          placeholder='add name'
          onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit'>Add Names</button>
      </form>
      <ol>
        {names.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ol>
    </div>
  );
};

export default StateHook;
