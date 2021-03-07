import { FC } from "react";
import { Col, Row } from "react-bootstrap";

import './heading.component.css'

export const Heading:FC<{title: string; subtitle: string;}> = ({title, subtitle}) => {
  return(
    <Row className="heading-row">
      <Col lg={9} xl={10} className="mx-auto heading ">
        <div className="heading-wrapper">
          <h2>{title}</h2>
          <h5>{subtitle}</h5>
        </div>

      </Col>
    </Row>
  );
}