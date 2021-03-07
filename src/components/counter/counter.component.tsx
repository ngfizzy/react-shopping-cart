import React, { FC, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

import './counter.component.css';

interface CounterProps {
  onChange?: (count: number) => void;
}

export const Counter:FC<CounterProps> = ({onChange}) => {
  const [count, setCount] = useState(1);

  const increment = () => setCount((count  + 1));
  const decrement = () => setCount((count > 1 ? count - 1: 1));

  useEffect(() => {
    onChange && onChange(count);
  }, [count, onChange]);

  return (
    <div className="counter bg-light">
      <Button className="p-2" variant="light" onClick={decrement}>-</Button>
      <span className="p-1  text-center count">{count}</span>
      <Button className="p-2" variant="light" onClick={increment}>+</Button>
    </div>
  );
}