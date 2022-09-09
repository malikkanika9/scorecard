import React from "react";
import { Col, Row } from "react-bootstrap";

import data from "../data/db.json";

export const Marks = () => {
  const Data = data["part_1"];

  return (
    <>
      {Data &&
        Data.map((item, i) => (
          <Row  key={i}>
            <Col className=" text-center border" xs lg="1">
              {item.id}
            </Col>
            <Col
              className=" text-center border fst-normal  text-black "
              xs
              lg="2"
            >
              {item.subject}
            </Col>
            <Col className=" text-center border " xs lg="9">
              <Row>
                <Col className=" text-center border">
                  {item.FA}
                </Col>
                <Col className=" text-center border">
                  {item["Oral1"]}
                </Col>
                <Col className=" text-center border ">
                  {item.BA}
                </Col>
                <Col className=" text-center border ">
                  {item["Oral2"]}
                </Col>
                 
                <Col className=" text-center border ">
                  {item.BA +item.FA + item["Oral2"] + item["Oral1"]}
                </Col>
              </Row>
            </Col>
          </Row>
        ))}
    </>
  );
};
