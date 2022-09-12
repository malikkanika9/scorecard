import React from "react";
import { Col, Row } from "react-bootstrap";
import data from '../data/db.json'

const Part2 = () => {
    const Data = data["part_2"];
  return (
    <>
      <Row className="mt-1">
        <Col className=" border-end border-bottom border-top fw-normal border-secondary p-1 " sm={{span:12}}md={{span:5}}></Col>
        <Col className=" border fw-bold border-secondary p-1" xslg='6'>Grade</Col>
      </Row>
      { Data.map((item,i)=>(
         <Row className="mt-1" key={i}>
         <Col className=" border-end border-bottom border-top  fw-normal border-secondary p-1 fs-4"  xs lg='8'>{item.topic}</Col>
         <Col className=" border fw-bold border-secondary  text-center "  xs lg='4'>{item.grade}</Col>
       </Row>
      ))}
    </>
  );
};

export default Part2;