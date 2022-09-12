import React from "react";
import { Col, Row } from "react-bootstrap";

export const Total = () => {
  const marks = [70, 78, 78, 66, 77];
  return (
    <>
      <Row >
        {marks.map((item, i) => (
            <Col className=" border-end text-center border-secondary" key={i}>
              {item}
            </Col>
          ))}
      </Row>
    </>
  );
};