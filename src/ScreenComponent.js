import React from "react";
import useScreen from "./useScreen";

const ScreenComponent = () => {
  const screenSize = useScreen();
  return <div>Screen size is {screenSize}</div>;
};

export default ScreenComponent;
