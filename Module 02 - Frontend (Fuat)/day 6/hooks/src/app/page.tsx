"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(100);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <center>
        <h2 className="font-bold"> You Clicked {count} times</h2>
        <button className="bg-red-300 rounded-md px-2 py-1 mt-2 font-semibold"
        onClick={() => setCount(count+1)}
        >
          Click Me 
        </button>
      </center>
    </div>
  );
}
