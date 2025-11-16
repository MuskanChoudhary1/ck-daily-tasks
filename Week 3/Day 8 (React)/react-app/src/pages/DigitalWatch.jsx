import React, { useState, useEffect } from "react";

function DigitalWatch() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date()); 
    }, 1000);

    // cleanup when page is left
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <h2>Digital Watch</h2>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default DigitalWatch;
