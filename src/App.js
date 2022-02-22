import { useState } from "react";
import EffectHook from "./EffectHook";
import RefHook from "./RefHook";

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div>
      <div>
        <button onClick={() => setFlag(!flag)}>Toggle</button>
      </div>
      {/* <div>{flag && <EffectHook></EffectHook>}</div> */}
      <RefHook></RefHook>
    </div>
  );
}

export default App;
