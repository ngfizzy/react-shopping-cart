import { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const GlobalLayout: FC = ({children}) => (
  <Container fluid>
    <Row>
      <Col>
        {children}
      </Col>
    </Row>
  </Container>
);
