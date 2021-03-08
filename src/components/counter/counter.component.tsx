import { FC } from "react";
import { Button } from "react-bootstrap";
import { ICartItem } from "../../core/interfaces";

import "./counter.component.css";

interface CounterProps {
  item: ICartItem;
  onChange?: (item: ICartItem, operator: "+" | "-") => void;
}

export const Counter:FC<CounterProps> = ({ item,  onChange}) => {
  return (
    <div className="counter bg-light border border-dark">
      <Button 
        className="p-2" variant="light"
        onClick={() => onChange && onChange(item, "-")}
      >
        -
      </Button>
      <span className="p-1  text-center count">{item.count}</span>
      <Button className="p-2" variant="light" onClick={() => onChange && onChange(item, "+")}>
        +
      </Button>
    </div>
  );
};

