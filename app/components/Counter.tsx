/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("Client Component");
  return <div>Counter {count}</div>;
};

export default Counter;
