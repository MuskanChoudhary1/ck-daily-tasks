import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h2>Counter Page</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count => count+1)}>Increment</button>
      <button onClick={() => setCount(count => count-1)}>Decrement</button>
    </div>
  );
}

export default Counter;
