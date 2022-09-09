import React from "react";
import { Col, Row } from "react-bootstrap";

export const Total = () => {
  const marks = [70, 78, 78, 66, 77];
  return (
    <>
      <Row>
        {marks &&
          marks.map((e, i) => (
            <Col className=" text-center border" key={i}>
              {e}
            </Col>
          ))}
      </Row>
    </>
  );
};