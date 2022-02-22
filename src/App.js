import { useState } from "react";
import EffectHook from "./EffectHook";
function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div>
      <div>
        <button onClick={() => setFlag(!flag)}>Toggle</button>
      </div>
      <div>{flag && <EffectHook></EffectHook>}</div>
    </div>
  );
}

export default App;
