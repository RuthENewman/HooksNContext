import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = event => {
      setPosition({
        x: event.pageX,
        y: event.pageY
      });
    };

    console.log("Setting up event");
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
};

export { useMousePosition as default };
