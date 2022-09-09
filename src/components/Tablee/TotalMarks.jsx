import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export const TotalMarks = ({ id, sub, fa, Oral1, sa, Oral2, elem }) => {
  return (
    <Row className="h-25">
      <Col className="text-center border col-1 h-80">
        <Row>
          <Col>{Number(id) + 1}</Col>
        </Row>
      </Col>
      
      <Col className="text-center border col-7">
        <Row>
          <Col className="border col-2">{fa}</Col>
          <Col className="border col-2">{Oral1}</Col>
          <Col className="border col-2">{sa}</Col>
          <Col className="border col-2">{Oral2}</Col>
        <Col className="border col-4">{fa + sa + Oral1 + Oral2}</Col>
        </Row>
      </Col>
    </Row>
  );
};