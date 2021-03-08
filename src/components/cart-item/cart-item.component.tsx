import React, { FC } from "react";
import { Nav, Image } from "react-bootstrap";
import { ICartItem } from "../../core/interfaces";
import { Counter } from "../counter";

import "./cart-item.component.css";



interface CartItemProps {
  item: ICartItem;
  currency: string;
  onCartItemChanged?: (item: ICartItem) => any;
  onDelete?: (item: ICartItem) => any;
  onCountChange?: (item: ICartItem, operator: "+" | "-" ) => any;
}

export const CartItem: FC<CartItemProps> = ({item, onCountChange, onDelete, currency}) => {
  return(
    <Nav.Item  className="bg-light mb-4 cart-item p-3">
      <div>
        <span 
          className="d-block ml-auto cart-item-delete pointer"
          onClick={() => onDelete && onDelete(item)}
        >x</span>
        <h4>{item?.title}</h4>
      </div>
      <div className="cart-item-image-wrapper">
        <Image
          className="cart-item-image"
          src={item.image_url} 
        />
      </div>
      <div className="cart-item-p d-flex">
        <Counter item={item} onChange={onCountChange} />
        <div className="p-2 cart-item-price">{currency}  {item.price}</div>
      </div>
    </Nav.Item>
  );
}