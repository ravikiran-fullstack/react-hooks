import { useState } from "react";
import EffectHook from "./EffectHook";
import RefHook from "./RefHook";
import MemoHook from "./MemoHook";
import ContextHook from "./contextHook/ContextHook";

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div>
      {/* <div>
        <button onClick={() => setFlag(!flag)}>Toggle</button>
      </div> */}
      {/* <div>{flag && <EffectHook></EffectHook>}</div> */}
      {/* <RefHook></RefHook> */}
      {/* <MemoHook></MemoHook> */}
      <ContextHook></ContextHook>
    </div>
  );
}

export default App;
