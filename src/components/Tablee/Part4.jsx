import React from "react";
import { Col, Row } from "react-bootstrap";

export const Part4 = () => {
  
  return (
    <>
      

    <Row className="mt-1">
        <Col className=" border fw-normal p-1" ></Col>
        <Col className=" border fw-normal p-1" >No. of working days</Col>
        <Col className=" border fw-normal p-1" >No. of days Present</Col>
        <Col className=" border fw-normal p-1" >Percentage</Col>
      </Row>
      
         <Row className="mt-1" >
         <Col className=" border fw-normal p-1 ">Term-1</Col>
         <Col className=" border fw-normal p-1 ">83</Col>
         <Col className=" border fw-normal p-1" >83</Col>
         <Col className=" border fw-normal p-1">100</Col>

    </Row>
     
    </>
  );
};
