import { FC } from "react";
import { Col, Image } from "react-bootstrap";
import { IProduct } from "../../core/interfaces";

import "./product.component.css";


interface ProductProps { 
  onAddToCart: (product: IProduct) => any;
  product: IProduct;
  currency: string;
}

export const Product:FC<ProductProps> = ({onAddToCart, product, currency}) => {
  
  return (
    <Col  sm={6} md={4} className="mb-5 p-2">
      <div className="mx-center w-100 h-100 product">
        <Image
          src={product.image_url}
          rounded 
        />
        <div className="text-center product-info">
          <h4>{product.title}</h4>
          <h6>From: {currency} {product.price}</h6>
        </div>
          <button className="px-2 py-3 border-0 cta" onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </Col>
  );
}