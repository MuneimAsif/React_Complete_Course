import { useEffect, useState } from "react";

const Clock = ({ color }) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <>
      <h3 style={{color}}>{time}</h3>
    </>
  );
};
export default Clock;
