import React, { FC } from "react"
import { Button, Nav } from "react-bootstrap"
import Select from "react-select";
import { ICartItem } from "../../core/interfaces";
import { CartItem } from "../cart-item";

import "./cart.component.css";

interface SideBarProps  {
  isShowing?: boolean;
  currencies?: string[];
  onToggle?: (...args: any[]) => any;
  onDelete?: (...args: any) => any;
  onCountChange?: (item: ICartItem, operation: '+' | '-') => any;
  items: {[key: number]: ICartItem, ids: number[]}
  onCurrencyChange: (arg: {value: string; label: string} | null) => any;
  currency: string;

}

export const Cart: FC<SideBarProps> = ({
  isShowing,
  items,
  onToggle,
  onCountChange,
  onDelete,
  currencies,
  currency, 
  onCurrencyChange
}) => {
  const showClassName = (isShowing && "show") || "";

  const subtotal = items.ids.reduce((acc, currId) => {
    const currItem = items[currId];

    return acc + (currItem.price * currItem.count!)
  },0);

  const options = (currencies || []).map(currency => ({ value: currency, label: currency }));

  return (
    <>
      <div 
        className={`cart-backdrop bg-light ${showClassName}` }
        onClick={onToggle}
      />
      <Nav className={`col-md-12 ${showClassName} cart`}>
        <Select options={options} onChange={(value) => onCurrencyChange && onCurrencyChange(value)}/>
        <div className="w-100 cart-wrapper overflow-auto">
          {items.ids.map((id: number) => (
            <CartItem
              item={items[id]} key={id} 
              onCountChange={onCountChange}
              onDelete={onDelete}
              currency={currency}
            />
            )
          )}
        </div>
        <hr />
        <div>
            <span className="text-bold d-inline-block mr-5 mb-3 cart-sub">Subtotal</span>
            <span className="sub-value">{currency} {subtotal}</span>
          </div>
        <Button className="p-4 cta d-inline-block w-100">PROCEED TO CHECKOUT</Button>
      </Nav>
    </>
  );
}
