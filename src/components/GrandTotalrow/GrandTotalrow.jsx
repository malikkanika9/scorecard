import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../Tablee/Table.css"

export const GrandTotalrow = () => {
  return (
    <>
      <Row id="iconBorder">
        <Col className="col-5 border">
          <Col className="border border-secondary col-4"></Col>
          <Col className="border border-secondary col-4"></Col>
        </Col>
        <Col className="border border-secondary col-7"></Col>
      </Row>
      <Row>
        <Col className="border p-0 border-secondary">Percentage </Col>
        <Col className="border border-secondary col-7">
         </Col>
      </Row>
      <Row>
        <Col className="border border-secondary col-5 p-0 ">RANK</Col>
        <Col className="border border-secondary col-7 ">V</Col>
      </Row>

    </>
  );
};