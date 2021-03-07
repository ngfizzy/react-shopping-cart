import React, { FC } from "react";
import { Nav, Image } from "react-bootstrap";
import { Counter } from "../counter";

import './cart-item.component.css'

export const CartItem: FC = () => {
  
  const onCountChange = (count: number) => {
    console.log('>>>>>>>>>>> count', count)
  }

  return(
    <Nav.Item  className="bg-light mb-4 cart-item p-3">
      <div>
        <span className="d-block ml-auto cart-item-delete">x</span>
        <h4>Product Name </h4>
      </div>
      <div className="cart-item-image-wrapper">
        <Image
          className="cart-item-image"
          src="https://images.all-free-download.com/images/graphicthumb/hd_picture_of_the_beautiful_natural_scenery_03_166249.jpg"
        />
      </div>
      <div className="cart-item-p d-flex">
        <Counter onChange={onCountChange} />
        <div className="p-2 cart-item-price">$9000</div>
      </div>
    </Nav.Item>
  );
}
