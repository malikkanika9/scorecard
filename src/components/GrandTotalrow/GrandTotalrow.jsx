import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export const GrandTotalrow = () => {
  return (
    <>
      <Row>
        <Col className="col-5 border">
          <Col className="border col-4"></Col>
          <Col className="border col-4"></Col>
        </Col>
        <Col className="border col-7"></Col>
      </Row>
      <Row>
        <Col className="border p-0 ">Percentage </Col>
        <Col className="border col-7">
         </Col>
      </Row>
      <Row>
        <Col className="border col-5 p-0 ">RANK</Col>
        <Col className="border  col-7 ">V</Col>
      </Row>

    </>
  );
};