"use client";
import axios from "axios";
import { Clock10Icon, HeartIcon } from "lucide-react";
import { useState } from "react";

const LikeButton = () => {
  const [status, setStatus] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [msg, setMsg] = useState("");

  const handleLike = async () => {
    if (status) {
      setStatus(false);
      return;
    }

    setSpinner(true);
    try {
      await axios.post(
        "https://questions.greatfrontend.com/api/questions/like-button"
      );
      setStatus(true);
      setMsg("");
    } catch {
      setMsg("Error during attempted like. Please try again later.");
    } finally {
      setSpinner(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-3">
      <button
        onClick={handleLike}
        className={`rounded-full flex items-center justify-center gap-2 
        px-6 py-3 min-w-[140px]
        border hover:border-red-500 cursor-pointer
        ${status ? "text-red-500" : "text-black"}`}
      >
        {spinner ? <Clock10Icon /> : <HeartIcon />}
        {status ? "Liked" : "Like"}
      </button>

      {msg && <p className="text-sm text-red-500">{msg}</p>}
    </div>
  );
};

export default LikeButton;
