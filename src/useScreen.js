import { useState, useEffect } from "react";

export default function useScreen() {
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize");
    };
  }, []);
  const checkScreenSize = () => {
    if (window.innerWidth > 992) {
      setScreenSize("large");
    }

    if (window.innerWidth > 600 && window.innerWidth < 992) {
      setScreenSize("medium");
    }

    if (window.innerWidth < 600) {
      setScreenSize("small");
    }
  };

  return screenSize;
}
