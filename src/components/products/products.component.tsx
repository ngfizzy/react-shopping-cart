import React, { FC, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Heading } from "../heading";
import { Product } from "../product";
import { Cart } from "../cart";


const initial = [...Array(16)].map((_, index) => index);

export const Products: FC = () => {
  const [products, setProducts] = useState(initial)
  const [isShowingCart, setIsShowingCart] = useState(false);
  
  useEffect(() => {
    const overflow = isShowingCart ? 'hidden' : 'auto';

    document.body.style.overflow = overflow;
}, [isShowingCart]);

  const handleClick = ()=> {
    setIsShowingCart(!isShowingCart);
  }

  return (
    <>
      <Heading title="All Products" subtitle="A 360l look at Lumin" />
      <Row className="products p-5 border">
        <Col sm={12} md={12} lg={10} className="mx-auto margin-bottom">
          <Row>
            {products.map((_, index) =>
              <Product onClick={handleClick} key={index} />)}
          </Row>
        </Col>
      </Row>
      <Cart isShowing={isShowingCart}  onClick={handleClick}/>
    </>

  );
}
