import React from "react";
import {Col,Container, Row,} from "react-bootstrap";
import {Marks} from "../Marks/Marks";
import {Total} from "../Total/Total";
export const Tablee = () => {
  return (
    <>
      <Container  className="border primary mt-4">
        <Row className="mt-2 ">
          <Col className="text-center border " > 
            <h4 style={{color:"red"}}> First Terminal Examination 2018-2019</h4>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className=" text-center border">
            <h5 style={{font: "bold"}}>Academic Performance</h5>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className=" text-center border">
            <h5>First Examination 29</h5>
          </Col>
        </Row>
        <Row className="mt-2 border">
          <Col className=" text-center border" xs lg="6">
            <Row className="border">
              <h5 style={{ color: "blue" }}>Part-I -:Scholastic Areas</h5>
            </Row>
            <Row className="mt-1">
              <Col className=" text-center border fw-bold p-2" xs lg="1">
                Sr. No
              </Col>
              <Col className=" text-center border fw-bold text-black p-2"xs lg="2" >
                Subjects
              </Col>
              <Col className=" text-center border" xs lg="9">
                <Row>
                  <Col className=" text-center border fw-normal p-1">FA</Col>
                  <Col className=" text-center border fw-normal p-1">Oral</Col>
                  <Col className=" text-center border fw-normal p-1">BA</Col>
                  <Col className=" text-center border fw-normal p-1">Oral</Col>
                  <Col className=" text-center border fw-normal fs-6 p-1">
                    Total
                  </Col>
                </Row>
{/*  out of marks */}
   <Total/>
              </Col>
            </Row>
            <Marks/>
          </Col>
          <Col className=" text-center border">
            <h5 style={{ color: "blue" }} >Part-II :-Co-Scholastic Areas</h5>
          </Col>
        </Row>
      </Container>
    </>
  );
};

