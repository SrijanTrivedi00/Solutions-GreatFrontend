// // Improved ui/ux

"use client";
import { useEffect, useState } from "react";

const formatTime = (time: any) => {
  const m = Math.floor(time / 60);
  const s = time % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
};

const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [toggled, setToggled] = useState(false);
  const [laps, setLaps] = useState<any>([]);



  useEffect(() => {
    if (!toggled) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [toggled]);

  const handleReset = () => {
    setToggled(false);
    setTimer(0);
    setLaps([]);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-96">
        <h2 className="text-xl font-semibold text-center mb-4">Stopwatch</h2>

        {/* Timer */}
        <div className="text-5xl font-mono font-bold text-center mb-6">
          {formatTime(timer)}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => setToggled(!toggled)}
            className={`px-4 py-2 rounded-lg text-white font-medium transition ${
              toggled
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {toggled ? "Pause" : "Start"}
          </button>

          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition"
          >
            Reset
          </button>

          <button
            onClick={() => setLaps([...laps, timer])}
            disabled={!toggled}
            className="px-4 py-2 rounded-lg bg-gray-500 hover:bg-gray-600 text-white font-medium transition disabled:opacity-50"
          >
            Lap
          </button>
        </div>

        {/* Laps */}
        <div>
          <h4 className="font-semibold mb-2">Laps</h4>

          {laps.length === 0 ? (
            <p className="text-sm text-gray-400 text-center">
              No laps recorded
            </p>
          ) : (
            <div className="max-h-40 overflow-y-auto border rounded-lg">
              {laps.map((lap: any, index: any) => (
                <div
                  key={index}
                  className="flex justify-between px-3 py-2 border-b text-sm"
                >
                  <span>Lap {index + 1}</span>
                  <span className="font-mono">{formatTime(lap)}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;

// MY STOPWATCH LOGIC

// "use client";
// import { useEffect, useState } from "react";

// const Stopwatch = () => {
//   const [timer, setTimer] = useState(0);
//   const [toggled, setToggled] = useState(false);
//   const [laps,setLaps]=useState<number[]>([])

//   useEffect(() => {
//     if (toggled) {
//       const interval = setInterval(() => {
//         setTimer((prev) => prev + 1);
//       }, 1000);

//       return () => clearInterval(interval);
//     } else {
//       setTimer(0);
//     }
//   }, [toggled]);

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div>
//         <div className="flex justify-center">
//           <div className="">
//             {timer > 60 ? `${Math.floor(timer / 60)}:${timer % 60}` : timer}
//           </div>
//         </div>

//         <button
//           onClick={() => setToggled(!toggled)}
//           className="text-blue-500 px-3 m-3 bg-gray-300 rounded-md cursor-pointer"
//         >
//           Start
//         </button>
//         <button
//           onClick={() => setToggled(!toggled)}
//           className="text-red-600 px-3 m-3 bg-gray-400 rounded-md cursor-pointer"
//         >
//           Reset
//         </button>
//         <button  onClick={() => setLaps([...laps, timer])} className="bg-gray-400 text-amber-300 rounded-md cursor-pointer px-3 m-3" >Save Lap</button>
//       </div>
//       <div>
//         <h4 className="text-red-400 ">Laps</h4>
//         <div className="flex-row">
//            {
//             laps.map((lap,index)=>
//                 <span key={index}>{lap}</span>
//             )
//            }

//         </div>
//       </div>
//     </div>
//   );
// };
// export default Stopwatch;
