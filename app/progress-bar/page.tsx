"use client";

import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [items, setItems] = useState<any[]>([]);
  const [width, setWidth] = useState(0);

  const handleAdd = () => {
    setItems((prev) => [...prev, "constant value"]);
    setWidth(0); // reset progress
  };

  useEffect(() => {
    if (items.length === 0) return;

    const interval = setInterval(() => {
      setWidth((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1; // 1% per step
      });
    }, 20); // 20ms × 100 = 2000ms

    return () => clearInterval(interval);
  }, [items]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-4 w-[400px]">
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add
        </button>

        {items.map((item, index) => (
          <div key={index} className="w-full bg-gray-300 h-5 rounded">
            <div
              className="bg-green-400 h-5 rounded transition-none"
              style={{ width: `${width}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
