import { FC, useState } from "react"
import { Nav } from "react-bootstrap"
import { CartItem } from "../cart-item";

import './cart.component.css';

interface SideBarProps  {
  isShowing?: boolean;
  onClick: (...args: any[]) => any;
}

export const Cart: FC<SideBarProps> = ({isShowing, onClick}) => {
  const [cartItems, setCartItems] = useState(Array.from(new Array(8)));
  const showClassName = (isShowing && 'show') || '';


  return (
    <>
      <div className={`cart-backdrop bg-light ${showClassName}` } onClick={onClick} />
      <Nav className={`col-md-12 ${showClassName} cart`}>
        {cartItems.map((_, index) => (
            <CartItem key={index} />
          )
        )}
      </Nav>
    </>
  );
}
