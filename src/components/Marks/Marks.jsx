import React from "react";
import { Col, Row } from "react-bootstrap";
import data from "../data/db.json";


export const Marks = () => {
  const Data = data["part-1"];
  
  return (
    <>
    {Data.map((item,i)=>(
      <Row className="mt-1" key={i}>
    <Col className=" text-center border fw-normal p-1" xs lg="1">
          0{item.id}
        </Col>
        <Col className=" text-center border fw-normal text-black" xs lg="2">
        {item.subject}
        </Col>
        <Col className=" text-center border " xs lg="9">
          <Row>
            <Col className=" text-center border fw-normal text-black">
              {item.FA}
            </Col>
            <Col className=" text-center border fw-normal text-black">
              {item["oral-1"]}
            </Col>
            <Col className=" text-center border fw-normal text-black">
            {item.BA}
            </Col>
            <Col className=" text-center border fw-normal text-black">
            {item["Oral-2"]}
            </Col>
            <Col className=" text-center border fw-normal text-black">
              { item.BA + item.FA + item["Oral-2"] + item["oral-1"]}
            </Col>
          </Row>
        </Col>
      </Row>
    ))}
    </>
  );
};

