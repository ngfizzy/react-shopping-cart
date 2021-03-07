import { FC } from "react";
import { Col, Image } from "react-bootstrap";

import './product.component.css';

export const Product:FC<{ onClick: (...arg: any[]) => any;}> = ({onClick}) => {
  
  return (
    <Col  sm={6} md={4} className="mb-5">
      <div className="mx-center w-100 product">
        <Image
          src="https://images.all-free-download.com/images/graphicthumb/hd_picture_of_the_beautiful_natural_scenery_03_166249.jpg"
          rounded 
        />
        <div>
          <h4>Amazing Product</h4>
          <h6>From: $8000</h6>
        </div>
          <button className="px-5 py-3 border-0 cta" onClick={() => onClick()}>Add to Cart</button>
      </div>
    </Col>
  );
}