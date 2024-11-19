import React, { useState, useEffect } from "react";

type CountUpProps = {
  start?: number;
  end: number;
  duration?: number;
  separator?: string;
  className?: string;
};

const CountUp: React.FC<CountUpProps> = ({
  start = 0,
  end,
  duration = 2,
  separator = "",
  className = "",
}) => {
  const [currentValue, setCurrentValue] = useState(start);

  useEffect(() => {
    const increment = (end - start) / (duration * 60);

    const animate = () => {
      setCurrentValue((prev) => {
        const nextValue = prev + increment;
        if (
          (start < end && nextValue >= end) ||
          (start > end && nextValue <= end)
        ) {
          return end;
        }
        return nextValue;
      });
    };

    const interval = setInterval(animate, 1000 / 60);
    return () => clearInterval(interval);
  }, [start, end, duration]);

  const formatNumber = (value: number) => {
    if (!separator) return Math.round(value).toString();
    return Math.round(value)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  };

  return <span className={className}>{formatNumber(currentValue)}</span>;
};

export default CountUp;
