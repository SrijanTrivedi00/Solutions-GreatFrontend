"use client";
import { useState } from "react";

const First = ({ setactiveTab }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-black my-3 text-center">
        this is the first tab
      </h1>

      <div className="flex justify-center gap-5">
        <button
          onClick={() => setactiveTab("Second")}
          className="bg-red-400 rounded-lg px-4 py-2"
        >
          Second
        </button>
        <button
          onClick={() => setactiveTab("Third")}
          className="bg-red-400 rounded-lg px-4 py-2"
        >
          Third
        </button>
      </div>
    </div>
  );
};

const Second = ({ setactiveTab }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-black my-3 text-center">Second</h1>

      <div className="flex justify-center gap-5">
        <button
          onClick={() => setactiveTab("First")}
          className="bg-red-400 rounded-lg px-4 py-2"
        >
          First
        </button>
        <button
          onClick={() => setactiveTab("Third")}
          className="bg-red-400 rounded-lg px-4 py-2"
        >
          Third
        </button>
      </div>
    </div>
  );
};

const Third = ({ setactiveTab }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-black my-3 text-center">Third</h1>

      <div className="flex justify-center gap-5">
        <button
          onClick={() => setactiveTab("Second")}
          className="bg-red-400 rounded-lg px-4 py-2"
        >
          Second
        </button>
        <button
          onClick={() => setactiveTab("First")}
          className="bg-red-400 rounded-lg px-4 py-2"
        >
          First
        </button>
      </div>
    </div>
  );
};

const TabSwitch = () => {
  const [activeTab, setactiveTab] = useState("First");

  return (
    <div className="flex justify-center items-center h-screen">
      {activeTab === "First" ? (
        <First setactiveTab={setactiveTab} />
      ) : activeTab === "Second" ? (
        <Second setactiveTab={setactiveTab} />
      ) : (
        <Third setactiveTab={setactiveTab} />
      )}
    </div>
  );
};

export default TabSwitch;
