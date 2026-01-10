// MY STOPWATCH LOGIC

"use client";
import { useEffect, useState } from "react";

const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    if (toggled) {
      const interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setTimer(0);
    }
  }, [toggled]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="flex justify-center">
          <div className="">
            {timer > 60 ? `${Math.floor(timer / 60)}:${timer % 60}` : timer}
          </div>
        </div>

        <button
          onClick={() => setToggled(!toggled)}
          className="text-blue-500 px-3 m-3 bg-gray-300 rounded-md cursor-pointer"
        >
          Start
        </button>
        <button
          onClick={() => setToggled(!toggled)}
          className="text-red-600 px-3 m-3 bg-gray-400 rounded-md cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default Stopwatch;
