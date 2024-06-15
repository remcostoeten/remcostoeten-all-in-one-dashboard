'use client'

import { useState, useEffect } from "react";

type CurrentTimeProps = {
  updateInterval?: number;
}

export default function CurrentTime({ updateInterval = 1000 }: CurrentTimeProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), updateInterval);
    return () => clearInterval(timer);
  }, [updateInterval]);

  return <time className='text-white' dateTime={time.toISOString()}>{time.toLocaleTimeString()}</time>;
}