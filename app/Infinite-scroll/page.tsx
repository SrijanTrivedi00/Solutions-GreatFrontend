"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [Data, SetData] = useState<any>([]);
  const [trigger, setTrigger] = useState(false);

  const fetchData = async () => {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
    );
    console.log(result?.data);
    SetData(result?.data);
  };
  useEffect(() => {
    fetchData();
  }, [trigger]);

  useEffect(()=>{
   const observer=IntersectionObserver
  },[])
  return (
    <div>
      <button onClick={() => setTrigger((prev) => !prev)}>
        click to refetch
      </button>
      {Data?.map((item: any, index: any) => (
        <div>
          <h1>{item?.title}</h1>
          <p>{item?.body}</p>
        </div>
      ))}
    </div>
  );
};

export default InfiniteScroll;
