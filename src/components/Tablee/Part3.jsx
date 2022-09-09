import React from "react";
import { Col, Row } from "react-bootstrap";
import data from '../data/db.json'

export const Part3 = () => {
    const Data = data["part_3"];
  return (
    <>
      
      <Row className="mt-1">
        <Col className=" border fw-normal p-1" xs lg='8'></Col>
        <Col className=" border fw-bold p-1" xs lg='4'>Grade</Col>
      </Row>
      { Data.map((item,i)=>(
         <Row className="mt-1" key={i}>
         <Col className=" border fw-normal p-1 fs-2" xs lg='8'>{item.topic}</Col>
         <Col className=" border fw-bold p-1 text-center " xs lg='4'>{item.grade}</Col>
       </Row>
      ))}
    </>
  );
};
