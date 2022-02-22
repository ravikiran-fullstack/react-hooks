import React, { useState, useEffect } from "react";

const EffectHook = () => {
  const [time, setTime] = useState(new Date().toString());
  const [message, setMessage] = useState("useEffect demo");

  useEffect(() => {
    console.log("Component mounted or updated", time);
    const interval = setInterval(showDate, 1000);

    return () => {
      // perform clean ups in this function
      console.log("clean up of interval");
      clearInterval(interval);
    };
  }, [time, message]); // empty array for only for first time mounting

  const showDate = () => {
    setTime(new Date().toString());
  };
  return (
    <div>
      <div>{time}</div>
      <button onClick={showDate}>Show current date</button>

      <div>{message}</div>
      <button onClick={() => setMessage("Changed functional component")}>
        change message
      </button>
    </div>
  );
};

export default EffectHook;
